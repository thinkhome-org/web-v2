import fs from 'node:fs/promises';
import path from 'node:path';
import { renderMarkdown } from '@/lib/md';

export const dynamic = 'force-static';

const TITLES: Record<string, string> = {
  'ochrana-soukromi': 'Ochrana soukromí',
  'cookies': 'Zásady používání cookies',
  'vop': 'Všeobecné obchodní podmínky',
};

export async function generateStaticParams() {
  return Object.keys(TITLES).map((slug) => ({ slug }));
}

export async function generateMetadata(ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const pageTitle = TITLES[slug] || 'Právní dokument';
  return { title: `${pageTitle} – ThinkHome` };
}

export default async function Page(ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const file = path.join(process.cwd(), 'src', 'content', 'legal', `${slug}.md`);
  const md = await fs.readFile(file, 'utf8').catch(() => '# Dokument nenalezen');
  const html = renderMarkdown(md);

  return (
    <section className="container px-6 py-16 md:py-24">
      <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}


