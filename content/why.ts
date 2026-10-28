import type { ImageKey } from "./images";
import type { PageKey } from "./pages";

export const whyPage = {
  meta: {
    title: "Why Partner With Us",
    description:
      "Veteran-owned leadership, safety you can audit, and crews that mobilize nationwide. Certifications and qualifications for owners, primes, and GCs.",
  },
  hero: {
    image: "hero" as ImageKey,
    breadcrumb: [{ label: "Why Partner With Us" }],
    title: "Why owners, primes, and GCs choose ICD.",
    lead: "Veteran-owned leadership, safety you can audit, and crews that mobilize nationwide.",
  },
  certifications: {
    eyebrow: "Credentials",
    title: "Certifications & Qualifications",
    items: [
      {
        title: "SDVOSB",
        body: "Service-Disabled Veteran-Owned Small Business",
      },
      { title: "Minority-Owned" },
      { title: "EM 385-1-1", body: "Trained personnel" },
      { title: "TWIC credential", body: "Robert Fuentes" },
      { title: "NAICS 238160" },
      { title: "PSC Z2JZ" },
      { title: "SAM registration", body: "[UEI / CAGE]" },
      { title: "Manufacturer certifications", body: "[TBD]" },
      { title: "Insurance and bonding", body: "[TBD]" },
    ],
  },
  leadership: {
    eyebrow: "Leadership",
    name: "Robert Fuentes",
    role: "Owner",
    summary: "21+ years of roofing and construction leadership.",
    bio: "[SHORT BIO]",
    headshot: "[HEADSHOT]",
  },
  related: ["government", "gc", "commercial"] satisfies PageKey[],
};
