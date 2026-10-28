import type { Metadata } from "next";
import { site } from "@content/site";

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name}, commercial roofing specialists`,
};

/**
 * Per-page metadata. Titles follow "{Page} | Innovation Construction
 * Development" (the suffix comes from the template in app/layout.tsx).
 * Pass `absoluteTitle` to skip the template (Home).
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title: fullTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
