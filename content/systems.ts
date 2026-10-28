import type { ImageKey } from "./images";
import type { PageKey } from "./pages";

export const systemsPage = {
  meta: {
    title: "Roofing Systems & Capabilities",
    description:
      "We install, repair, restore, and replace across low-slope and steep-slope roofing systems.",
  },
  hero: {
    image: "sys-tpo" as ImageKey,
    breadcrumb: [{ label: "Roofing Systems & Capabilities" }],
    title: "The right system for the building.",
    lead: "We install, repair, restore, and replace across low-slope and steep-slope systems.",
  },
  systems: {
    eyebrow: "Systems",
    title: "What we install, repair, and restore.",
    cards: [
      {
        title: "Single-ply: TPO, EPDM, PVC",
        image: "sys-tpo",
        body: "Low-slope membranes for commercial and industrial roofs.",
      },
      {
        title: "Metal",
        image: "sys-metal",
        body: "Standing seam, double-lock, trapezoidal panels, R-panel, and metal retrofit systems.",
      },
      {
        title: "Modified bitumen",
        image: "sys-mod",
        body: "Including 2-ply torch-applied systems.",
      },
      {
        title: "Insulation and cover board",
        image: "sys-ins",
        body: "Tapered systems, blocking, cover boards, and deck inspection and replacement.",
      },
      {
        title: "Coatings and restoration",
        body: "Roof coatings and waterproofing to extend roof life.",
      },
      {
        title: "Tile, slate, and shingle",
        body: "Steep-slope systems for institutional, government, and multifamily buildings.",
      },
    ] satisfies { title: string; image?: ImageKey; body: string }[],
  },
  // Drafted for the client to review. The brief asked for three columns on when
  // each option makes sense but did not supply the wording.
  options: {
    title: "Repair. Restore. Replace.",
    intro:
      "We inspect first, then recommend the option that fits the building and the budget.",
    items: [
      {
        title: "Repair",
        body: "Makes sense when the roof is sound overall and the problem is local, such as a split seam, loose flashing, a clogged drain, or a leaking penetration.",
      },
      {
        title: "Restore",
        body: "Makes sense when the roof still has life left. Coatings, waterproofing, and metal retrofits extend the life of the roof you already have.",
      },
      {
        title: "Replace",
        body: "Makes sense when the roof has reached the end of its service life or the damage is widespread. Tear-off or reroofing, with deck inspection and insulation, gives you a new system built for the building.",
      },
    ],
  },
  certifications: {
    title: "Manufacturer certifications",
    value: "[MANUFACTURER CERTIFICATIONS]",
  },
  related: ["government", "commercial", "maintenance"] satisfies PageKey[],
};
