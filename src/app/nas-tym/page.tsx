export const metadata = { title: 'Náš tým – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

import Image from 'next/image';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react'
import fs from 'node:fs/promises';
import { join } from 'node:path';
type Person = { name: string; role: string; email?: string; image?: string; links?: { linkedin?: string; github?: string } };
async function getTeam(): Promise<Person[]> {
  const { readValidatedArray, teamMemberSchema } = await import('@/lib/yaml');
  const items = await readValidatedArray<Person>('team.yaml', teamMemberSchema);
  const withExistingImages: Person[] = [];
  for (const p of items) {
    if (p.image && p.image.startsWith('/')) {
      const filePath = join(process.cwd(), 'public', p.image.replace(/^\//, ''));
      try {
        await fs.access(filePath);
        withExistingImages.push(p);
      } catch {
        withExistingImages.push({ ...p, image: undefined });
      }
    } else {
      withExistingImages.push({ ...p, image: undefined });
    }
  }
  return withExistingImages;
}

export default async function Page() {
  const TEAM = await getTeam();
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">Náš tým</h1>
        <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <div key={p.name} className="rounded-lg border border-white/10 bg-muted p-5">
              <div className="flex items-center gap-4">
                {p.image ? (
                  <Image src={p.image} alt={p.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-white/10" />
                )}
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-medium truncate">{p.name}</h3>
                  <p className="text-xs md:text-sm text-white/70 truncate">{p.role}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 md:gap-3 text-sm">
                {p.email && (
                  <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${p.email}`}>
                    <IconMail size={16} className="text-white/80" />
                    <span className="truncate max-w-[12rem] md:max-w-none">{p.email}</span>
                  </a>
                )}
                {p.links?.linkedin && (
                  <a className="inline-flex items-center gap-1 hover:underline" href={p.links.linkedin}>
                    <IconBrandLinkedin size={16} className="text-white/80" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {p.links?.github && (
                  <a className="inline-flex items-center gap-1 hover:underline" href={p.links.github}>
                    <IconBrandGithub size={16} className="text-white/80" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


