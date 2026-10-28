export const contactPage = {
  meta: {
    title: "Request a Proposal",
    description:
      "Tell us about the roof. Share the project basics and Innovation Construction Development will follow up to talk scope, schedule, and next steps.",
  },
  eyebrow: "Request a Proposal",
  title: "Tell us about the roof.",
  lead: "Share the basics and we'll follow up within [RESPONSE TIME] to talk scope, schedule, and next steps.",
  florida: {
    pre: "Nationwide. Florida with ",
    link: "Epic Roofing",
    post: ".",
  },
  privacyLine: "We never share your information.",
  success: {
    title: "Request received",
    // [RESPONSE TIME] renders as a placeholder until the client fills it in.
    body: "Thanks. We'll be in touch within [RESPONSE TIME].",
  },
  error:
    "Something went wrong and your request was not sent. Please call or email us directly and we'll take it from there.",
};

// Select options. These strings are what arrives in the email.
export const projectTypes = [
  "Government / Military",
  "General Contractor Partnership",
  "Commercial / Private-Sector",
  "Multifamily / HOA",
  "Insurance Restoration",
  "Roof Maintenance Program",
  "Other",
] as const;

export const roofSystems = [
  "Not sure",
  "TPO / EPDM / PVC",
  "Metal",
  "Modified bitumen",
  "Tile / slate",
  "Shingle",
] as const;

export const timelines = [
  "Urgent / active leak",
  "Within 30 days",
  "1 to 3 months",
  "Budgeting / planning",
] as const;
