import { z } from "zod";
import { projectTypes } from "@content/contact";

/**
 * Payload sent by the ElevenLabs chat agent's `submit_lead` tool.
 * Field names are snake_case to match the tool definition. The model fills
 * these in, so the schema is forgiving about case and string/boolean forms,
 * but strict about the fields ICD needs to follow up.
 */
const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

const looseBoolean = z.union(
  [
    z.boolean(),
    z.enum(["true", "false", "yes", "no"]).transform((v) => v === "true" || v === "yes"),
  ],
  { error: "Required: true or false." },
);

function normalizeProjectType(raw: string): (typeof projectTypes)[number] {
  const wanted = raw.trim().toLowerCase();
  return projectTypes.find((t) => t.toLowerCase() === wanted) ?? "Other";
}

export const leadSchema = z
  .object({
    full_name: z.string({ error: "Required: the visitor's full name." }).trim().min(2, "Enter the visitor's full name.").max(120),
    company: optionalText(160),
    email: z.string({ error: "Required: the visitor's email address." }).trim().max(200).pipe(z.email("Enter a valid email address.")),
    phone: z
      .string({ error: "Required: the visitor's phone number with area code." })
      .trim()
      .max(40)
      .refine((v) => v.replace(/\D/g, "").length >= 10, "Enter a phone number with area code."),
    project_type: z.string().trim().max(80).optional().default("Other").transform(normalizeProjectType),
    project_city_state: z.string({ error: "Required: the project city and state." }).trim().min(2, "Enter the project city and state.").max(160),
    roof_system: optionalText(80),
    timeline: optionalText(80),
    solicitation_number: optionalText(120),
    details: z.string({ error: "Required: a short summary of the project." }).trim().min(3, "Summarize the project in a sentence or two.").max(5000),
    role: optionalText(120),
    building_type_and_size: optionalText(200),
    decision_maker_status: optionalText(300),
    access_requirements: optionalText(300),
    florida_project: looseBoolean.optional().default(false),
    lead_tier: z
      .string()
      .trim()
      .toLowerCase()
      .optional()
      .default("")
      .transform((v) => (v === "hot" || v === "warm" || v === "cold" ? v : "unrated")),
    lead_tier_reason: optionalText(500),
    unanswered_questions: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .default([])
      .transform((v) => (Array.isArray(v) ? v : v ? [v] : []).map((q) => q.trim().slice(0, 300)).filter(Boolean).slice(0, 10)),
    conversation_summary: optionalText(2000),
    consent_to_share: looseBoolean,
  })
  .refine((d) => d.consent_to_share === true, {
    path: ["consent_to_share"],
    message: "The visitor must agree to share their details before the lead is sent.",
  });

export type LeadData = z.output<typeof leadSchema>;
