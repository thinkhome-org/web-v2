import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thinkhome.org';
  const now = new Date();
  return [
    { url: `${base}/o-nas`, lastModified: now },
    { url: `${base}/nas-tym`, lastModified: now },
    { url: `${base}/sluzby`, lastModified: now },
    { url: `${base}/projekty`, lastModified: now },
    { url: `${base}/kontakt`, lastModified: now },
    { url: `${base}/pravo/ochrana-soukromi`, lastModified: now },
    { url: `${base}/pravo/cookies`, lastModified: now },
    { url: `${base}/pravo/vop`, lastModified: now },
  ];
}


