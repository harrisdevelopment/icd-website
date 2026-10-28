import type { ImageKey } from "./images";
import type { PageKey } from "./pages";

export const home = {
  meta: {
    title: "Commercial & Government Roofing Contractor",
    description:
      "Veteran-owned roofing and construction for government, military, institutional, and private-sector projects. Experienced crews, nationwide.",
  },
  hero: {
    eyebrow: "Commercial & Industrial Roofing Specialists",
    title: ["Built to Serve.", "Proven to Perform."],
    lead: "Veteran-owned roofing and construction for government, military, institutional, and private-sector projects. Experienced crews, nationwide.",
  },
  credentials: [
    { value: "21+ Years", label: "Roofing and construction leadership" },
    { value: "SDVOSB", label: "Veteran-owned and minority-owned" },
    { value: "Nationwide", label: "Rapid crew mobilization" },
    { value: "EM 385-1-1", label: "Trained personnel on every site" },
    { value: "NAICS 238160", label: "Roofing contractors" },
  ],
  serve: {
    eyebrow: "Who We Serve",
    title: "One crew. Six kinds of clients.",
    intro:
      "Whether you manage a base, a portfolio, or a single building, we scope it, crew it, and stand behind the work.",
    cards: [
      {
        title: "Government & Military",
        page: "government",
        image: "t-gov",
        body: "Tile, metal, and low-slope scopes for federal, military, and public facilities.",
      },
      {
        title: "General Contractor Partnerships",
        page: "gc",
        image: "t-gc",
        body: "A roofing sub that shows up staffed, supervised, and on schedule.",
      },
      {
        title: "Commercial & Private-Sector",
        page: "commercial",
        image: "t-com",
        body: "Repairs, coatings, retrofits, and replacements for retail, office, and industrial.",
      },
      {
        title: "Multifamily & HOA",
        page: "multifamily",
        image: "t-mf",
        body: "Roofing for apartment communities and associations, planned around residents.",
      },
      {
        title: "Insurance Restoration",
        page: "insurance",
        image: "gov-b",
        body: "Storm damage assessment and documented repairs that hold up to the claim process.",
      },
      {
        title: "Roof Maintenance Programs",
        page: "maintenance",
        image: "t-maint",
        body: "Scheduled inspections and preventive repairs that stop leaks before they start.",
      },
    ] satisfies { title: string; page: PageKey; image: ImageKey; body: string }[],
  },
  government: {
    eyebrow: "Government & Military",
    title: "Ready for federal work.",
    body: "Tile and metal roofing scopes on military and government facilities, from installation to full replacement. Our crews work to EM 385-1-1 with competent-person oversight on site.",
    images: ["gov-a", "gov-b"] satisfies ImageKey[],
    codes: [
      { label: "NAICS", value: "238160" },
      { label: "PSC", value: "Z2JZ" },
      { label: "UEI", value: "[UEI]" },
      { label: "CAGE", value: "[CAGE]" },
    ],
    buttonLabel: "Government Contracting",
  },
  systems: {
    eyebrow: "Roofing Systems & Capabilities",
    title: "The right system for the building.",
    intro:
      "We install, repair, restore, and replace across low-slope and steep-slope systems, so the recommendation fits the roof, not our crew's comfort zone.",
    cards: [
      {
        title: "Single-Ply: TPO, EPDM, PVC",
        image: "sys-tpo",
        body: "Low-slope membranes for commercial and industrial roofs.",
      },
      {
        title: "Metal Roofing",
        image: "sys-metal",
        body: "Standing seam, double-lock, trapezoidal, and R-panel systems, plus retrofits.",
      },
      {
        title: "Modified Bitumen",
        image: "sys-mod",
        body: "Including 2-ply torch-applied systems.",
      },
      {
        title: "Insulation & Cover Board",
        image: "sys-ins",
        body: "Tapered systems, blocking, and deck inspection and replacement.",
      },
    ] satisfies { title: string; image: ImageKey; body: string }[],
    others: [
      "Roof coatings",
      "Waterproofing",
      "Metal roof retrofit",
      "Tile",
      "Slate",
      "Shingles",
      "Tear-off & reroofing",
      "Leak investigation",
    ],
  },
  maintenance: {
    eyebrow: "Roof Maintenance Programs",
    title: "Catch it before it leaks.",
    body: "Scheduled inspections, preventive repairs, and clear reporting for owners and property managers who would rather budget for maintenance than pay for emergencies.",
    list: [
      "Leak investigation and roof inspections",
      "Flashing, curbs, drains, and penetrations",
      "Coatings and waterproofing to extend roof life",
      "Written reports with photos after every visit",
    ],
    buttonLabel: "Set up a maintenance program",
    images: ["mt-a", "mt-b"] satisfies ImageKey[],
  },
} as const;

/** The six "Why Partner" items. Reused on the Why Partner With Us page. */
export const whyPartner = {
  eyebrow: "Why Partner With Us",
  title: "The sub you don't have to babysit.",
  items: [
    {
      title: "21+ years leading crews",
      body: "Two decades of roofing and construction leadership, from estimate to closeout.",
    },
    {
      title: "Nationwide mobilization",
      body: "Crew support, field supervision, and logistics coordination wherever the job is.",
    },
    {
      title: "Multiple roofing systems",
      body: "Repair, restore, or replace. We recommend what the building needs.",
    },
    {
      title: "Safety you can audit",
      body: "EM 385-1-1 trained personnel, competent-person oversight, daily toolbox talks, PPE, and fall protection.",
    },
    {
      title: "Facility access ready",
      body: "Robert Fuentes holds a TWIC card for secure port and maritime facilities.",
    },
    {
      title: "Veteran-owned SDVOSB",
      body: "A service-disabled veteran-owned, minority-owned small business.",
    },
  ],
};

/** The five sectors. Reused on the Why Partner With Us page. */
export const pastPerformance = {
  eyebrow: "Past Performance",
  title: "Where we've worked.",
  note: "Project case studies with photos coming soon.",
  sectors: [
    {
      title: "Military & Government",
      body: "Tile and metal roofing scopes, installation, and replacement.",
    },
    {
      title: "Industrial Facilities",
      body: "Industrial roofing and construction, metal panels, and low-slope systems.",
    },
    {
      title: "Commercial & Retail",
      body: "Roof repairs, coatings, retrofit, and replacement scopes.",
    },
    {
      title: "Schools & Institutional",
      body: "Shingle, low-slope, insulation, and reroofing scopes.",
    },
    {
      title: "Private-Sector & Multifamily",
      body: "Roofing installation, repairs, and maintenance.",
    },
  ],
};

export const floridaBand = {
  eyebrow: "Our Florida Partner",
  title: "Florida projects, covered by a Florida-licensed team.",
  body: "In Florida we team with Epic Roofing Services Inc., a state-licensed commercial roofing contractor (License CCC1326917). One call reaches both teams.",
  buttonLabel: "Meet Epic Roofing",
};

export const ctaBand = {
  title: "Let's build what matters. Together.",
  body: "Tell us about the building and the timeline. We'll come back with a scope and a proposal.",
};
