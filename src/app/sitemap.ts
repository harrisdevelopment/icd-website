import type { MetadataRoute } from "next";
import { pages } from "@content/pages";
import { site } from "@content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return Object.values(pages).map((page) => ({
    url: `${site.url}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : page.path === "/contact" ? 0.9 : 0.7,
  }));
}
