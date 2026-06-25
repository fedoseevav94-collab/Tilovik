import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { articles } from "@/data/articles";
import { professions } from "@/data/professions";
import { regions } from "@/data/regions";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/professions", "/regions", "/articles", "/faq", "/privacy-policy", "/personal-data-consent", "/cookie-policy", "/disclaimer"];
  const routes = [
    ...staticRoutes,
    ...professions.map((item) => `/professions/${item.slug}`),
    ...regions.map((item) => `/regions/${item.slug}`),
    ...articles.map((item) => `/articles/${item.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date()
  }));
}
