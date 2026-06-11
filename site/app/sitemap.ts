import type { MetadataRoute } from "next";

const SITE_URL = "https://www.cyberprive.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          es: SITE_URL,
        },
      },
    },
  ];
}
