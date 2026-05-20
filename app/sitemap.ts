import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/content/blog';
import { allCities } from '@/content/city';
import { allLocalities } from '@/content/locality';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://triozy.com';
  const currentDate = new Date();

  const blogPages = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : post.publishedAt ? new Date(post.publishedAt) : currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityPages = allCities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const localityPages = allLocalities.map((locality) => ({
    url: `${baseUrl}/${locality.city}/${locality.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...cityPages,
    ...blogPages,
    ...localityPages,
  ];
}
