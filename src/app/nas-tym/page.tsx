export const metadata = { title: "Náš tým – ThinkHome" };
export const dynamic = "force-static";
export const revalidate = false;

import fs from "node:fs/promises";
import { join } from "node:path";
import { Container, Section, Card, CardContent } from "@/components/ui";
import { IconMail, IconUsers } from "@tabler/icons-react";
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
      <Section className="px-6 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
              Náš tým
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Seznamte se s lidmi, kteří se starají o vaše IT. Každý člen našeho týmu přináší
              unikátní expertizu a společně tvoříme silný tým.
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
            {TEAM.map((p, idx) => (
              <TeamCard key={p.name} person={p} slug={p.slug || `person-${idx}`} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto backdrop-blur-md bg-accent/10 border border-accent/30">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Máte dotaz k našemu týmu?</h3>
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
