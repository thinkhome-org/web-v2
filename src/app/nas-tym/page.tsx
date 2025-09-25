export const metadata = { title: "Náš tým – ThinkHome" };
export const dynamic = "force-static";
export const revalidate = false;

import fs from "node:fs/promises";
import { join } from "node:path";
import { Container, Section, Card, CardContent, AnimatedSection } from "@/components/ui";
import { IconMail, IconUsers, IconStar, IconCode, IconShield } from "@tabler/icons-react";
import TeamCard from "@/components/ui/team-card";

type Person = {
  name: string;
  role: string;
  email?: string;
  image?: string;
  slug?: string;
  links?: { linkedin?: string; github?: string };
};

async function getTeam(): Promise<Person[]> {
  const { readValidatedArray, teamMemberSchema } = await import("@/lib/yaml");
  const items = await readValidatedArray<Person>("team.yaml", teamMemberSchema);

  const withExistingImages: Person[] = [];
  for (const p of items) {
    if (p.image && p.image.startsWith("/")) {
      const filePath = join(process.cwd(), "public", p.image.replace(/^\//, ""));
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
      {/* Hero Section */}
      <AnimatedSection className="px-6 py-20 md:py-32" animation="fade-in">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent mb-8">
              Náš tým
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Seznamte se s lidmi, kteří se starají o vaše IT. Každý člen našeho týmu přináší
              unikátní expertizu a společně tvoříme silný tým.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <Card variant="glass" className="text-center py-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
                    <IconUsers size={24} className="text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent">{TEAM.length}</p>
                  <p className="text-white/70 text-sm">Expertů v týmu</p>
                </div>
              </Card>
              <Card variant="glass" className="text-center py-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
                    <IconCode size={24} className="text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent">10+</p>
                  <p className="text-white/70 text-sm">Letí zkušeností</p>
                </div>
              </Card>
              <Card variant="glass" className="text-center py-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
                    <IconStar size={24} className="text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent">24/7</p>
                  <p className="text-white/70 text-sm">Dostupnost</p>
                </div>
              </Card>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-md bg-white/5 border border-white/20 rounded-full">
              <IconUsers size={20} className="text-accent" />
              <span className="text-sm text-white/80">Klikněte na člena týmu pro detail</span>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Team Grid */}
      <AnimatedSection className="px-6 pb-20" animation="slide-up">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {TEAM.map((p, idx) => (
              <div key={p.name} className="slide-up" style={{animationDelay: `${idx * 100}ms`}}>
                <TeamCard person={p} slug={p.slug || `person-${idx}`} />
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <Card className="max-w-3xl mx-auto backdrop-blur-md bg-accent/10 border border-accent/30 hover:bg-accent/15 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
                    <IconMail size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Máte dotaz k našemu týmu?</h3>
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  Rádi vám představíme naše kolegy a jejich expertizu detailněji. Nebo se rovnou zeptejte na konkrétní projekt.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/80 text-white font-medium rounded-lg transition-colors text-lg"
                  >
                    <IconMail size={20} />
                    Kontaktovat tým
                  </a>
                  <a
                    href="/sluzby"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-colors text-lg hover:bg-white/5"
                  >
                    <IconShield size={20} />
                    Naše služby
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
