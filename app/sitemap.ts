import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate once per day

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://highlifeshowband.ro",
      lastModified: new Date("2026-09-28"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://highlifeshowband.ro/politica-de-confidentialitate",
      lastModified: new Date("2026-09-28"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
