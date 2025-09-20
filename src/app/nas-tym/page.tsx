export const metadata = { title: 'Náš tým – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

import Image from 'next/image';
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <div key={p.name} className="rounded-lg border border-white/10 bg-muted p-5">
              {p.image ? (
                <Image src={p.image} alt={p.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <div className="h-10 w-10 rounded-full bg-white/10" />
              )}
              <h3 className="mt-4 text-lg font-medium">{p.name}</h3>
              <p className="text-sm text-white/70">{p.role}</p>
              <div className="mt-3 flex items-center gap-3 text-sm">
                {p.email && <a className="hover:underline" href={`mailto:${p.email}`}>{p.email}</a>}
                {p.links?.linkedin && <a className="hover:underline" href={p.links.linkedin}>LinkedIn</a>}
                {p.links?.github && <a className="hover:underline" href={p.links.github}>GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


