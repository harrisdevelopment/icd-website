import type { ContactData } from "./contact-schema";

/** True when the city/state text says Florida ("Tampa, FL", "Miami Florida"). */
export function isFloridaProject(location: string): boolean {
  return /(^|[^a-z])(fl|florida)([^a-z]|$)/i.test(location);
}

/** Strip line breaks and control characters so user text is safe in a subject. */
function oneLine(text: string): string {
  return text.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim();
}

export function buildSubject(data: ContactData): string {
  return `Proposal request: ${oneLine(data.projectType)} in ${oneLine(data.location)}`;
}

export function buildBody(data: ContactData): string {
  const florida = isFloridaProject(data.location);
  const row = (label: string, value: string) => `${label}: ${value.trim() || "(not provided)"}`;

  const lines = [
    ...(florida ? ["FLORIDA PROJECT, LOOP IN EPIC", ""] : []),
    "New proposal request from the ICD website.",
    "",
    row("Full name", data.name),
    row("Company / agency", data.company),
    row("Email", data.email),
    row("Phone", data.phone),
    row("Project type", data.projectType),
    row("Project city & state", data.location),
    row("Roof system", data.roofSystem),
    row("Timeline", data.timeline),
    row("Solicitation or bid number", data.solicitation),
    "",
    "Project details:",
    data.details,
  ];
  return lines.join("\n");
}

/** Email for a lead captured by the website chat agent (/api/lead). */
export function buildLeadSubject(lead: import("./lead-schema").LeadData): string {
  const tier = lead.lead_tier === "unrated" ? "" : ` (${lead.lead_tier.toUpperCase()})`;
  return `Chat lead${tier}: ${oneLine(lead.project_type)} in ${oneLine(lead.project_city_state)}`;
}

export function buildLeadBody(lead: import("./lead-schema").LeadData): string {
  const florida = lead.florida_project || isFloridaProject(lead.project_city_state);
  const row = (label: string, value: string) => `${label}: ${value.trim() || "(not provided)"}`;

  const lines = [
    ...(florida ? ["FLORIDA PROJECT, LOOP IN EPIC", ""] : []),
    "New lead from the ICD website chat assistant. The visitor agreed to share these details.",
    "",
    row("Lead rating", lead.lead_tier === "unrated" ? "" : lead.lead_tier.toUpperCase()),
    row("Why", lead.lead_tier_reason),
    "",
    row("Full name", lead.full_name),
    row("Company / agency", lead.company),
    row("Role", lead.role),
    row("Email", lead.email),
    row("Phone", lead.phone),
    row("Project type", lead.project_type),
    row("Project city & state", lead.project_city_state),
    row("Building type and size", lead.building_type_and_size),
    row("Roof system", lead.roof_system),
    row("Timeline", lead.timeline),
    row("Solicitation or bid number", lead.solicitation_number),
    row("Decision-maker status", lead.decision_maker_status),
    row("Access requirements", lead.access_requirements),
    "",
    "Project details:",
    lead.details,
    "",
    "Conversation summary:",
    lead.conversation_summary || "(not provided)",
    "",
    "Questions the assistant could not answer (please address in follow-up):",
    ...(lead.unanswered_questions.length ? lead.unanswered_questions.map((q) => `- ${q}`) : ["(none)"]),
  ];
  return lines.join("\n");
}
