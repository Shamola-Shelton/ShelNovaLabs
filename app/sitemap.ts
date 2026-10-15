import { MetadataRoute } from "next";
import { projectsData, servicesData } from "@/data/projectsData";
import { insightsArticles } from "@/data/insightsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shelnovalabs.com";
  // Bump when page content changes; new Date() would mark every page as changed on each deploy.
  const siteUpdated = new Date("2026-10-15");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/projects`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/insights`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/shamolah`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Store-linked policy pages. Keep these paths stable.
  const legalPages: MetadataRoute.Sitemap = [
    "/privacy/biblewise",
    "/sancta/privacy",
    "/sancta/terms",
    "/sancta/delete-account",
    "/wordnova/privacy",
    "/wordnova/terms",
    "/wash-rush/privacy",
    "/wash-rush/terms",
    "/pupgrid/privacy",
    "/pupgrid/terms",
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: siteUpdated, changeFrequency: "yearly" as const, priority: 0.4 }));

  const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightPages: MetadataRoute.Sitemap = insightsArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...legalPages, ...servicePages, ...projectPages, ...insightPages];
}