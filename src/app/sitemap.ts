import type { MetadataRoute } from "next";
import { FOOTER_NAV } from "@/lib/site";

const SITE_URL = "https://dychtechnologies.com";

const PAGE_META: Record<string, { changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>; priority: number }> = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/product": { changeFrequency: "weekly", priority: 0.9 },
  "/how-it-works": { changeFrequency: "monthly", priority: 0.8 },
  "/schools": { changeFrequency: "monthly", priority: 0.8 },
  "/businesses": { changeFrequency: "monthly", priority: 0.7 },
  "/churches": { changeFrequency: "monthly", priority: 0.7 },
  "/pricing": { changeFrequency: "monthly", priority: 0.7 },
  "/contact": { changeFrequency: "monthly", priority: 0.6 },
  "/security-and-trust": { changeFrequency: "yearly", priority: 0.5 },
  "/about": { changeFrequency: "yearly", priority: 0.4 },
};

/** Every real page once: footer links with their #anchors stripped. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Array.from(new Set(["/", ...FOOTER_NAV.flatMap((g) => g.links.map((l) => l.href.split("#")[0]))]));
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: PAGE_META[path]?.changeFrequency ?? "monthly",
    priority: PAGE_META[path]?.priority ?? 0.5,
  }));
}
