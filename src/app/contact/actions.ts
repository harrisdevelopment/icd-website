"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { buildBody, buildSubject } from "@/lib/contact-email";
import {
  contactSchema,
  fieldErrorsFrom,
  type ContactInput,
  type ContactResult,
} from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";

async function clientIp(): Promise<string> {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

/**
 * Receives the proposal request form. Validates with the same schema as the
 * client, drops honeypot hits silently, rate-limits by IP, then emails the
 * request through Resend. Env vars: RESEND_API_KEY, CONTACT_TO_EMAIL,
 * CONTACT_FROM_EMAIL.
 */
export async function submitContact(input: ContactInput): Promise<ContactResult> {
  // Honeypot: only bots fill the hidden field. Report success and send nothing,
  // so they learn nothing about what was filtered.
  if (typeof input?.website === "string" && input.website.trim().length > 0) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, reason: "invalid", fieldErrors: fieldErrorsFrom(parsed.error) };
  }

  if (isRateLimited(await clientIp())) {
    return { ok: false, reason: "rate_limited" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL.");
    return { ok: false, reason: "send_failed" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: buildSubject(parsed.data),
      text: buildBody(parsed.data),
    });
    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return { ok: false, reason: "send_failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Failed to send:", err);
    return { ok: false, reason: "send_failed" };
  }
}
