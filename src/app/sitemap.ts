import type { MetadataRoute } from "next";
import { getAllSlugs, products } from "@/data/products";

export const dynamic = "force-static";

const SITE_URL = "https://caloring.kr";
const BUILD_DATE = "2026-03-10";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/calc/bmi/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/calc/bmr/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/calc/calorie/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/calc/body-fat/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/calc/ideal-weight/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/calc/water/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/products/`,
      lastModified: BUILD_DATE,
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Diet guides
    {
      url: `${SITE_URL}/diet/`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/diet/intermittent-fasting/`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/diet/1200kcal/`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/diet/high-protein/`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Product pages with actual updatedAt dates
  const productPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => {
    const product = products.find((p) => p.slug === slug);
    return {
      url: `${SITE_URL}/products/${slug}/`,
      lastModified: product?.updatedAt ?? BUILD_DATE,
      changeFrequency: "daily" as const,
      priority: 0.6,
    };
  });

  return [...staticPages, ...productPages];
}
