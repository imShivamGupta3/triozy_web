import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search'], // Search pages should not be indexed
    },
    sitemap: 'https://triozy.com/sitemap.xml',
  };
}