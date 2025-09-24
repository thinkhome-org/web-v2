export const metadata = { title: 'Náš tým – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

import Image from 'next/image';
import fs from 'node:fs/promises';
import { join } from 'node:path';
import { Container, Section, Card, CardHeader, CardContent } from '@/components/ui';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconUsers } from '@tabler/icons-react';

type Person = { 
  name: string; 
  role: string; 
  email?: string; 
  image?: string; 
  slug?: string; 
  links?: { linkedin?: string; github?: string } 
};

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
    <>
      <Section className="px-6 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
              Náš tým
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Seznamte se s lidmi, kteří se starají o vaše IT. Každý člen našeho týmu přináší unikátní expertizu a společně tvoříme silný tým.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/5 border border-white/20 rounded-full">
              <IconUsers size={20} className="text-accent" />
              <span className="text-sm text-white/80">Vyberte konkrétního člena pro detail</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="px-6 pb-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {TEAM.map((p, idx) => {
              const slug = p.slug || `person-${idx}`
              return (
                <Card 
                  key={p.name} 
                  className="group backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-300 overflow-hidden"
                >
                  <a href={`/nas-tym/${slug}`} className="block p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      
                      {/* Avatar */}
                      <div className="relative">
                        {p.image ? (
                          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-accent/30 transition-all duration-300">
                            <Image 
                              src={p.image} 
                              alt={p.name} 
                              width={80} 
                              height={80} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 ring-2 ring-white/10 group-hover:ring-accent/30 transition-all duration-300 flex items-center justify-center">
                            <span className="text-accent font-bold text-xl">
                              {p.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors"></div>
                      </div>

                      {/* Name & Role */}
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-sm text-white/70 font-medium">
                          {p.role}
                        </p>
                      </div>

                      {/* Contact Links */}
                      <div className="flex items-center gap-3 pt-2">
                        {p.email && (
                          <a 
                            href={`mailto:${p.email}`}
                            className="p-2 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 transition-all duration-200 group/btn"
                          >
                            <IconMail size={16} className="text-white/70 group-hover/btn:text-accent" />
                          </a>
                        )}
                        {p.links?.linkedin && (
                          <a 
                            href={p.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 transition-all duration-200 group/btn"
                          >
                            <IconBrandLinkedin size={16} className="text-white/70 group-hover/btn:text-accent" />
                          </a>
                        )}
                        {p.links?.github && (
                          <a 
                            href={p.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 transition-all duration-200 group/btn"
                          >
                            <IconBrandGithub size={16} className="text-white/70 group-hover/btn:text-accent" />
                          </a>
                        )}
                      </div>
                    </div>
                  </a>
                </Card>
              )
            })}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto backdrop-blur-md bg-accent/10 border border-accent/30">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Máte dotaz k našemu týmu?
                </h3>
                <p className="text-white/80 mb-4">
                  Rádi vám představíme naše kolegy a jejich expertizu detailněji.
                </p>
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-white font-medium rounded-lg transition-colors"
                >
                  <IconMail size={18} />
                  Kontaktovat tým
                </a>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}


