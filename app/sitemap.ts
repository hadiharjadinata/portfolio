import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/projects";
import { getArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const routes = ["", "/about", "/projects", "/writing", "/resume", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = getArticles().map((a) => ({
    url: `${base}/writing/${a.slug}`,
    lastModified: new Date(a.date || Date.now()),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...articleRoutes];
}
