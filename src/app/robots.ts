import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const base = 'https://thinkhome.org';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: [`${base}/sitemap.xml`],
  };
}


