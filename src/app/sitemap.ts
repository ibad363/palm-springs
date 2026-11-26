import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/palm-springs-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-11-26",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: "2026-11-26",
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
