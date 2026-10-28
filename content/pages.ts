import type { ImageKey } from "./images";

export type PageKey =
  | "home"
  | "government"
  | "gc"
  | "commercial"
  | "multifamily"
  | "insurance"
  | "maintenance"
  | "systems"
  | "why"
  | "florida"
  | "contact"
  | "privacy";

export type PageRef = {
  path: string;
  /** Full page name, used in titles and nav. */
  name: string;
  /** Short label for "Other ways we work" cards. */
  shortLabel: string;
  /** Thumbnail for cards that link to this page. */
  thumb: ImageKey;
};

export const pages: Record<PageKey, PageRef> = {
  home: { path: "/", name: "Home", shortLabel: "Home", thumb: "hero" },
  government: {
    path: "/government-contracting",
    name: "Government Contracting",
    shortLabel: "Government Contracting",
    thumb: "t-gov",
  },
  gc: {
    path: "/general-contractor-partnerships",
    name: "General Contractor Partnerships",
    shortLabel: "GC Partnerships",
    thumb: "t-gc",
  },
  commercial: {
    path: "/commercial-private-sector",
    name: "Commercial & Private-Sector Projects",
    shortLabel: "Commercial & Private",
    thumb: "t-com",
  },
  multifamily: {
    path: "/multifamily-hoa",
    name: "Multifamily & HOA Communities",
    shortLabel: "Multifamily & HOA",
    thumb: "t-mf",
  },
  insurance: {
    path: "/insurance-restoration",
    name: "Insurance Restoration",
    shortLabel: "Insurance Restoration",
    thumb: "gov-b",
  },
  maintenance: {
    path: "/roof-maintenance-programs",
    name: "Roof Maintenance Programs",
    shortLabel: "Maintenance Programs",
    thumb: "t-maint",
  },
  systems: {
    path: "/roofing-systems",
    name: "Roofing Systems & Capabilities",
    shortLabel: "Roofing Systems",
    thumb: "sys-tpo",
  },
  why: {
    path: "/why-partner-with-us",
    name: "Why Partner With Us",
    shortLabel: "Why Partner With Us",
    thumb: "hero",
  },
  florida: {
    path: "/florida-partner",
    name: "Florida Partner: Epic Roofing",
    shortLabel: "Florida Partner",
    thumb: "sys-metal",
  },
  contact: {
    path: "/contact",
    name: "Request a Proposal",
    shortLabel: "Contact",
    thumb: "hero",
  },
  privacy: {
    path: "/privacy",
    name: "Privacy Policy",
    shortLabel: "Privacy",
    thumb: "hero",
  },
};

/** The five pages in the "Who We Serve" dropdown, in order. */
export const whoWeServe: { key: PageKey; navLabel: string }[] = [
  { key: "government", navLabel: "Government Contracting" },
  { key: "gc", navLabel: "GC Partnerships" },
  { key: "commercial", navLabel: "Commercial & Private-Sector" },
  { key: "multifamily", navLabel: "Multifamily & HOA" },
  { key: "insurance", navLabel: "Insurance Restoration" },
];

export const mainNav: { key: PageKey; label: string }[] = [
  { key: "systems", label: "Roofing Systems" },
  { key: "maintenance", label: "Maintenance Programs" },
  { key: "why", label: "Why Partner With Us" },
  { key: "florida", label: "Florida" },
];

export const footerColumns: {
  title: string;
  links: { key: PageKey; label: string }[];
}[] = [
  {
    title: "Who We Serve",
    links: [
      { key: "government", label: "Government Contracting" },
      { key: "gc", label: "General Contractor Partnerships" },
      { key: "commercial", label: "Commercial & Private-Sector" },
      { key: "multifamily", label: "Multifamily & HOA" },
      { key: "insurance", label: "Insurance Restoration" },
    ],
  },
  {
    title: "Company",
    links: [
      { key: "maintenance", label: "Roof Maintenance Programs" },
      { key: "systems", label: "Roofing Systems" },
      { key: "why", label: "Why Partner With Us" },
      { key: "florida", label: "Florida Partner" },
      { key: "contact", label: "Contact" },
    ],
  },
];
