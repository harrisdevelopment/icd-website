import { z } from "zod";
import { projectTypes, roofSystems, timelines } from "@content/contact";

/**
 * One schema for both sides: the form validates with it in the browser and the
 * server action validates the same shape again before sending anything.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(120, "That name is too long."),
  company: z.string().trim().max(160, "That is too long."),
  email: z.string().trim().max(200).pipe(z.email("Enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .max(40, "That phone number is too long.")
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Enter a phone number with area code."),
  projectType: z.enum(projectTypes, { error: "Select a project type." }),
  location: z.string().trim().min(2, "Enter the project city and state.").max(160),
  roofSystem: z.enum(roofSystems).or(z.literal("")),
  timeline: z.enum(timelines).or(z.literal("")),
  solicitation: z.string().trim().max(120, "That is too long."),
  details: z
    .string()
    .trim()
    .min(10, "Tell us a little about the project (at least a sentence).")
    .max(5000, "Please keep this under 5,000 characters."),
  /** Honeypot. Real visitors never see it, so it stays empty. The server
   *  action checks it before anything else (see app/contact/actions.ts). */
  website: z.string().max(500).optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
export type ContactField = keyof ContactInput;

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "invalid"; fieldErrors: Partial<Record<ContactField, string>> }
  | { ok: false; reason: "rate_limited" | "send_failed" };

/** Maps zod issues to one message per field (first issue wins). */
export function fieldErrorsFrom(error: z.ZodError): Partial<Record<ContactField, string>> {
  const out: Partial<Record<ContactField, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as ContactField | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
