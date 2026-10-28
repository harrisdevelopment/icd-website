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
