// Government Contracting is the template; the other five service pages use
// the same shape. Edit copy here, not in the components.
import type { InteriorPage } from "./types";

const who = { label: "Who We Serve" };

export const government: InteriorPage = {
  key: "government",
  meta: {
    title: "Government Contracting",
    description:
      "A veteran-owned SDVOSB roofing contractor for federal, military, and public facilities. Prime, sub, or teaming partner.",
  },
  hero: {
    image: "gov-a",
    breadcrumb: [who, { label: "Government Contracting" }],
    title: "Government & military roofing, done to spec.",
    lead: "A veteran-owned SDVOSB roofing contractor for federal, military, and public facilities. Prime, sub, or teaming partner.",
  },
  deliver: {
    title: "From tile on a barracks to metal on a hangar.",
    intro:
      "Government and military roofing comes with tighter safety rules, stricter documentation, and less room for schedule slips. Our crews have worked tile and metal roofing scopes on military and government facilities, from new installation through full replacement. We bring the field supervision and paperwork discipline those jobs require.",
    scope: [
      {
        title: "Tile roofing",
        body: "Installation and replacement on government and military buildings.",
      },
      {
        title: "Metal roofing",
        body: "Standing seam, double-lock, trapezoidal, and R-panel systems.",
      },
      {
        title: "Low-slope systems",
        body: "TPO, EPDM, PVC, and modified bitumen for large footprints.",
      },
      {
        title: "Reroofing",
        body: "Tear-off, deck inspection and replacement, insulation, and tapered systems.",
      },
      {
        title: "Repairs & maintenance",
        body: "Leak investigation, flashing, drains, curbs, and penetrations.",
      },
      {
        title: "Restoration",
        body: "Coatings, waterproofing, and metal roof retrofits.",
      },
    ],
    side: {
      title: "Contracting Info",
      capabilityLink: true,
      rows: [
        { label: "Business type", value: "SDVOSB, Minority-Owned" },
        { label: "NAICS", value: "238160" },
        { label: "PSC", value: "Z2JZ" },
        { label: "UEI", value: "[UEI]" },
        { label: "CAGE", value: "[CAGE]" },
        { label: "SAM status", value: "[ACTIVE?]" },
        { label: "Service area", value: "Nationwide" },
      ],
    },
  },
  split: {
    images: ["gov-b"],
    eyebrow: "Safety & Compliance",
    title: "Built for a federal safety plan.",
    list: [
      "EM 385-1-1 trained personnel",
      "Competent-person oversight on site",
      "Daily toolbox talks, PPE, and fall protection",
      "TWIC card holder for secure facility access",
      "Field supervision and logistics coordination, nationwide",
    ],
  },
  steps: {
    title: "Teaming with primes",
    intro:
      "Looking for an SDVOSB roofing sub to strengthen a bid? Send the solicitation number and we'll respond with scope and pricing.",
    items: [
      {
        title: "Send the solicitation",
        body: "Share the RFP or sources-sought notice and the roofing scope.",
      },
      {
        title: "We scope and price",
        body: "A clear roofing scope and number you can carry into your bid.",
      },
      {
        title: "We mobilize",
        body: "Supervised crews, safety plan, and daily reporting from day one.",
      },
    ],
  },
  related: ["gc", "commercial", "maintenance"],
  cta: { title: "Have a facility or a solicitation? Let's talk scope." },
};

export const gc: InteriorPage = {
  key: "gc",
  meta: {
    title: "General Contractor Partnerships",
    description:
      "Staffed crews, field supervision, and clean handoffs for general contractors on commercial, institutional, and government projects.",
  },
  hero: {
    image: "t-gc",
    eyebrow: "Who We Serve",
    breadcrumb: [who, { label: "General Contractor Partnerships" }],
    title: "A roofing sub you don't have to babysit.",
    lead: "Staffed crews, field supervision, and clean handoffs for general contractors on commercial, institutional, and government projects.",
  },
  deliver: {
    title: "We show up, staffed and supervised.",
    intro:
      "Your schedule depends on the roofing sub. We bring experienced crews, a supervisor on site, and the logistics to mobilize anywhere in the country. You get daily updates and a roof that passes inspection the first time.",
    scope: [
      { title: "New roof installation" },
      { title: "Reroofing and tear-off" },
      { title: "Metal panel and standing seam" },
      { title: "Low-slope single-ply" },
      { title: "Insulation and tapered systems" },
      { title: "Punch list and warranty support" },
    ],
    side: {
      title: "Working with us",
      rows: [
        { label: "Prime or sub", value: "Both" },
        { label: "Bonding capacity", value: "[BONDING CAPACITY]" },
        { label: "Insurance", value: "[COI ON REQUEST]" },
        { label: "Service area", value: "Nationwide" },
      ],
    },
  },
  split: {
    images: ["gov-a", "sys-metal"],
    title: "Built for your schedule.",
    body: "Rapid mobilization, competent-person oversight, daily toolbox talks, and fall protection on every job. Safety documentation is ready when your superintendent asks for it.",
  },
  steps: {
    title: "How we work with GCs",
    items: [
      { title: "Send the plans and scope" },
      { title: "We bid it clearly, with exclusions spelled out" },
      { title: "We mobilize, report daily, and close out clean" },
    ],
  },
  related: ["government", "commercial", "maintenance"],
};

export const commercial: InteriorPage = {
  key: "commercial",
  meta: {
    title: "Commercial & Private-Sector Projects",
    description:
      "Repairs, coatings, retrofits, and full replacements for retail, office, industrial, and private-sector buildings.",
  },
  hero: {
    image: "t-com",
    breadcrumb: [who, { label: "Commercial & Private-Sector Projects" }],
    title: "Commercial roofing that protects the business inside.",
    lead: "Repairs, coatings, retrofits, and full replacements for retail, office, industrial, and private-sector buildings.",
  },
  deliver: {
    title: "Fix it, extend it, or replace it.",
    intro:
      "Not every roof needs replacing. We inspect first, then recommend the option that fits the building and the budget: targeted repair, a restoration coating, a metal retrofit, or a full reroof.",
    scope: [
      { title: "Leak investigation and repair" },
      { title: "Roof coatings and restoration" },
      { title: "Metal roof retrofit" },
      { title: "Single-ply replacement (TPO, EPDM, PVC)" },
      { title: "Modified bitumen" },
      { title: "Industrial metal panels" },
    ],
  },
  split: {
    images: ["sys-tpo", "gov-b"],
    title: "Work around your operations.",
    body: "We plan staging, noise, and access around your tenants and your business hours, so the work doesn't shut you down.",
  },
  steps: {
    title: "Sectors",
    items: [
      { title: "Retail centers" },
      { title: "Industrial and warehouse" },
      { title: "Office and private-sector" },
    ],
  },
  related: ["gc", "multifamily", "maintenance"],
};

export const multifamily: InteriorPage = {
  key: "multifamily",
  meta: {
    title: "Multifamily & HOA Communities",
    description:
      "Roofing programs for apartment communities and homeowner associations, built for durability and predictable budgets.",
  },
  hero: {
    image: "mf-a",
    breadcrumb: [who, { label: "Multifamily & HOA Communities" }],
    title: "Roofing for communities, planned around residents.",
    lead: "Roofing programs for apartment communities and homeowner associations, built for durability and predictable budgets.",
  },
  deliver: {
    title: "One contractor for every building.",
    intro:
      "Multifamily roofs are a portfolio, not a single job. We inspect every building, prioritize the work, and schedule phases so boards and property managers can plan and budget.",
    scope: [
      { title: "Community-wide roof assessments" },
      { title: "Phased replacement plans" },
      { title: "Shingle, low-slope, and metal systems" },
      { title: "Repairs and leak response" },
      { title: "Preventive maintenance programs" },
      { title: "Board-ready reports and photos" },
    ],
  },
  split: {
    images: ["mf-b", "mt-a"],
    title: "Residents stay informed.",
    body: "We coordinate with property management on notices, parking, and safe walkways, so the work stays on schedule and residents aren't surprised.",
  },
  steps: {
    title: "How it works",
    items: [
      { title: "Assess every building" },
      { title: "Prioritize and budget" },
      { title: "Phase the work" },
    ],
  },
  related: ["commercial", "insurance", "maintenance"],
};

export const insurance: InteriorPage = {
  key: "insurance",
  meta: {
    title: "Insurance Restoration",
    description:
      "Inspections, documentation, and repairs after hail, wind, and storm events for commercial and multifamily properties.",
  },
  hero: {
    image: "gov-b",
    breadcrumb: [who, { label: "Insurance Restoration" }],
    title: "Storm damage, documented and repaired right.",
    lead: "Inspections, documentation, and repairs after hail, wind, and storm events for commercial and multifamily properties.",
  },
  // Compliance: keep wording to inspection, documentation, meeting the
  // adjuster, and repair. Never claim ICD negotiates or handles claims, acts
  // against the insurer, or waives deductibles (BRIEF §6.4).
  deliver: {
    title: "Clear documentation. Quality repairs.",
    intro:
      "After a storm, you need to know what's damaged and what it will take to fix it. We inspect, document the damage with photos and a written scope, and complete the repairs or replacement once your claim is settled.",
    scope: [
      { title: "Post-storm roof inspections" },
      { title: "Photo documentation and written scope" },
      { title: "Emergency leak mitigation" },
      { title: "Repairs and full replacement" },
      { title: "Coordination with your adjuster on site" },
      { title: "Code-compliant rebuild" },
    ],
  },
  split: {
    images: ["mt-b", "sys-tpo"],
    title: "Stop the damage first.",
    body: "Temporary protection to prevent interior damage, then a permanent repair plan.",
  },
  steps: {
    title: "How it works",
    items: [
      { title: "Inspect and document" },
      { title: "Meet your adjuster on site" },
      { title: "Repair or replace" },
    ],
  },
  related: ["multifamily", "commercial", "maintenance"],
};

export const maintenance: InteriorPage = {
  key: "maintenance",
  meta: {
    title: "Roof Maintenance Programs",
    description:
      "Scheduled inspections, preventive repairs, and clear reporting for owners and property managers.",
  },
  hero: {
    image: "mt-a",
    breadcrumb: [{ label: "Roof Maintenance Programs" }],
    title: "Catch it before it leaks.",
    lead: "Scheduled inspections, preventive repairs, and clear reporting for owners and property managers.",
  },
  deliver: {
    title: "Budget for maintenance, not emergencies.",
    intro:
      "Most roof failures start small: a split seam, a clogged drain, loose flashing. A maintenance program catches them early and extends the life of the roof you already paid for.",
    scope: [
      { title: "Scheduled inspections" },
      { title: "Drain, curb, and penetration checks" },
      { title: "Flashing and seam repairs" },
      { title: "Coatings and waterproofing" },
      { title: "Photo reports after every visit" },
      { title: "Repair priorities with pricing" },
    ],
    side: {
      title: "Program options",
      rows: [
        { label: "Frequency", value: "[e.g., semi-annual]" },
        { label: "Includes", value: "Inspection + report" },
        { label: "Repairs", value: "Quoted separately" },
        { label: "Coverage", value: "Nationwide" },
      ],
    },
  },
  split: {
    images: ["mt-b", "t-maint"],
    title: "You see what we see.",
    body: "Every visit ends with a written report and photos, so you know the roof's condition without climbing up there.",
  },
  steps: {
    title: "How it works",
    items: [
      { title: "Baseline inspection" },
      { title: "Scheduled visits" },
      { title: "Report and repair plan" },
    ],
  },
  related: ["multifamily", "commercial", "insurance"],
};

export const interiorPages = { government, gc, commercial, multifamily, insurance, maintenance };
