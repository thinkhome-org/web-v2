export const metadata = { title: 'Náš tým – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

import Image from 'next/image';
import fs from 'node:fs/promises';
import { join } from 'node:path';
type Person = { name: string; role: string; email?: string; image?: string; slug?: string; links?: { linkedin?: string; github?: string } };
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
        <p className="mt-6 text-white/70 max-w-2xl">Vyberte konkrétního člena týmu pro detail. Tento rozcestník je záměrně stručný.</p>
        <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p, idx) => {
            const slug = p.slug || `person-${idx}`
            return (
              <a key={p.name} href={`/nas-tym/${slug}`} className="rounded-lg border border-white/10 p-5 block hover:bg-white/5 transition-colors backdrop-blur-sm bg-white/5">
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
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
}


