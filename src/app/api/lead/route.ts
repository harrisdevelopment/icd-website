import { createHash, timingSafeEqual } from "node:crypto";
import { Resend } from "resend";
import { buildLeadBody, buildLeadSubject } from "@/lib/contact-email";
import { leadSchema } from "@/lib/lead-schema";
import { isRateLimited, rememberKey, wasSeenRecently } from "@/lib/rate-limit";

// Webhook called by the ElevenLabs chat agent's `submit_lead` tool.
// Env vars: LEAD_WEBHOOK_SECRET (shared with the ElevenLabs tool header),
// RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.

const MAX_BODY_BYTES = 50_000;

const json = (body: Record<string, unknown>, status = 200) => Response.json(body, { status });

function sameSecret(provided: string, expected: string): boolean {
  // Hash first so the comparison is constant-time and length-safe.
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

function providedSecret(request: Request): string {
  const header = request.headers.get("x-lead-secret");
  if (header) return header;
  const auth = request.headers.get("authorization") ?? "";
  return auth.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : "";
}

export async function POST(request: Request) {
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[lead] LEAD_WEBHOOK_SECRET is not set.");
    return json({ ok: false, error: "not_configured", message: "Lead delivery is not available right now." }, 503);
  }
  if (!sameSecret(providedSecret(request), secret)) {
    return json({ ok: false, error: "unauthorized" }, 401);
  }

  // Calls come from ElevenLabs servers, so limit the endpoint as a whole.
  if (isRateLimited("lead-webhook", { max: 30 })) {
    return json({ ok: false, error: "rate_limited", message: "Too many leads right now. Ask the visitor to call 405-595-1190." }, 429);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: "too_large" }, 413);
  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    // Messages are written for the agent so it can ask the visitor for what is missing.
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "payload");
      if (!fields[key]) fields[key] = issue.message;
    }
    return json(
      {
        ok: false,
        error: "validation",
        message: `Lead not sent. Fix these fields and call the tool again: ${Object.entries(fields)
          .map(([k, v]) => `${k} (${v})`)
          .join("; ")}`,
        fields,
      },
      400,
    );
  }
  const lead = parsed.data;

  // The same person submitting twice in a few minutes is almost always a retry.
  // The key is only recorded after a successful send, so a failed attempt can retry.
  const dedupeKey = `${lead.email.toLowerCase()}|${lead.phone.replace(/\D/g, "")}`;
  if (wasSeenRecently(dedupeKey)) {
    return json({ ok: true, duplicate: true, message: "This lead was already sent to ICD." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[lead] Missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL.");
    return json({ ok: false, error: "not_configured", message: "Lead delivery is not available right now." }, 503);
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: buildLeadSubject(lead),
      text: buildLeadBody(lead),
    });
    if (error) {
      console.error("[lead] Resend rejected the message:", error);
      return json({ ok: false, error: "send_failed", message: "The lead could not be sent." }, 502);
    }
    rememberKey(dedupeKey);
    return json({ ok: true, message: "Lead sent to ICD." });
  } catch (err) {
    console.error("[lead] Failed to send:", err);
    return json({ ok: false, error: "send_failed", message: "The lead could not be sent." }, 502);
  }
}
