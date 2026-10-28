import type { ImageKey } from "./images";

export const floridaPage = {
  meta: {
    title: "Florida Partner: Epic Roofing",
    description:
      "Innovation Construction Development partners with Epic Roofing Services Inc. on commercial roofing projects across Florida.",
  },
  hero: {
    eyebrow: "Our Florida Partner",
    title: "Florida work, handled by a Florida-licensed team.",
    lead: "Innovation Construction Development partners with Epic Roofing Services Inc. on commercial roofing projects across Florida. You get our project leadership and Epic's state-licensed local crews.",
  },
  glance: [
    { value: "CCC1326917", label: "Florida certified roofing contractor license" },
    { value: "Licensed & Insured", label: "Commercial roofing in Florida" },
    { value: "Commercial Experts", label: "Commercial roofing solutions" },
    { value: "[SERVICE AREA]", label: "Florida regions covered" },
  ],
  how: {
    eyebrow: "How the Partnership Works",
    title: "Two companies. One point of contact.",
    body: "For Florida projects, Innovation Construction Development and Epic Roofing Services team up. Start with a proposal request, and we'll bring the right team to the job.",
    steps: [
      {
        title: "Request a proposal",
        body: "Tell us the building, the location, and the timeline.",
      },
      {
        title: "Joint site review",
        body: "Our teams inspect and scope the work together.",
      },
      {
        title: "Licensed local crews",
        body: "Work performed under Epic's Florida license.",
      },
      {
        title: "One accountable lead",
        body: "A single contact from proposal to closeout.",
      },
    ],
  },
  services: {
    title: "Epic's commercial services",
    tag: "[Confirm list with Epic]",
    cards: [
      { title: "Roof replacement", image: "sys-tpo" },
      { title: "Repairs & leak response", image: "mt-a" },
      { title: "Maintenance programs", image: "mt-b" },
      { title: "Metal & single-ply", image: "sys-metal" },
    ] satisfies { title: string; image: ImageKey }[],
  },
  cta: {
    title: "Have a Florida project?",
    body: "Request a proposal and mention Florida. We'll loop in Epic from the start.",
  },
  epic: {
    name: "Epic Roofing Services Inc.",
    lines: [
      "[EPIC CONTACT NAME, TITLE]",
      "[EPIC PHONE]",
      "[EPIC EMAIL]",
      "[EPIC ADDRESS]",
      "[EPIC WEBSITE]",
    ],
  },
};
