import type { ImageKey } from "./images";
import type { PageKey } from "./pages";

export type Crumb = { label: string; href?: string };
export type ScopeItem = { title: string; body?: string };
export type NumberedItem = { title: string; body?: string };
export type InfoRow = { label: string; value: string };

/** Shape shared by Government and the five service pages. */
export type InteriorPage = {
  key: PageKey;
  meta: { title: string; description: string };
  hero: {
    image: ImageKey;
    eyebrow?: string;
    /** Crumbs after "Home". The last one is the current page. */
    breadcrumb: Crumb[];
    title: string;
    lead: string;
  };
  deliver: {
    title: string;
    intro: string;
    scope: ScopeItem[];
    side?: { title: string; rows: InfoRow[]; capabilityLink?: boolean };
  };
  split: {
    images: ImageKey[];
    eyebrow?: string;
    title: string;
    body?: string;
    list?: string[];
  };
  steps: { title: string; intro?: string; items: NumberedItem[] };
  related: PageKey[];
  /** Overrides the default CtaBand heading. */
  cta?: { title: string };
};
