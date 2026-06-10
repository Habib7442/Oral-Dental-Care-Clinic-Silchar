import { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { CANONICAL_SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static homepage and secondary page routes
  const staticRoutes = [
    "",
    "/about",
    "/book",
    "/contact",
    "/faq",
    "/gallery",
    "/reviews",
    "/services",
  ];

  // Map static routes to sitemap format
  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${CANONICAL_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Map dynamic services routes to sitemap format
  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${CANONICAL_SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...sitemapEntries, ...serviceEntries];
}
