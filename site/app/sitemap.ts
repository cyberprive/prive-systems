import type { MetadataRoute } from "next";

const SITE_URL = "https://www.cyberprive.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    en: `${SITE_URL}/en`,
    es: `${SITE_URL}/es`,
    "x-default": `${SITE_URL}/en`,
  };
  return [
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/es`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
  ];
}
