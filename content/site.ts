// Company-wide facts. Change a value here and it updates everywhere.
export const site = {
  name: "Innovation Construction Development",
  legalName: "Innovation Construction Development LLC",
  shortWordmark: { top: "INNOVATION", bottom: "CONSTRUCTION & DEVELOPMENT" },
  url: "https://inncd.com",
  owner: "Robert Fuentes",
  phone: { display: "405-595-1190", href: "tel:4055951190", e164: "+14055951190" },
  email: "r.fuentes@inncd.com",
  address: {
    street: "1814 Nantz Ln",
    city: "Conroe",
    state: "TX",
    zip: "77304",
    oneLine: "1814 Nantz Ln, Conroe, TX 77304",
  },
  badges: ["Veteran-Owned", "Minority-Owned", "SDVOSB"],
  naics: "238160",
  psc: "Z2JZ",
  capabilityStatement: "/capability-statement.pdf",
  capabilityStatementLabel: "Download capability statement (PDF)",
  footerBlurb:
    "Government and commercial vendor, subcontractor, and teaming opportunities welcomed.",
  ctaLabel: "Request a Proposal",
  ctaHref: "/contact",
} as const;
