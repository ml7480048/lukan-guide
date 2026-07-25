import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/content';
import { LOCALES, SECTIONS } from '@/lib/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: locale === 'ua' ? 1 : 0.9,
    });
    for (const section of SECTIONS) {
      entries.push({
        url: `${SITE_URL}/${locale}/${section}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
