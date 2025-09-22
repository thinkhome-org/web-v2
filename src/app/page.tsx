import Link from 'next/link'
import { Container, Section, Card, CardContent, CardHeader, Button } from '@/components/ui'
import ContactForm from '@/components/contact-form'
import { IconRocket, IconHeadset, IconShieldCheck, IconDeviceFloppy, IconLock, IconWorld } from '@tabler/icons-react'
import { readValidatedArray, projectSchema, type Project } from '@/lib/yaml'

export default async function Page() {
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  const featured = projects.slice(0, 3)
  return (
    <>
      <Section className="border-0 scroll-mt-20" id="home">
        <Container className="px-6 py-16 md:py-24 grid gap-10 md:gap-12">
          <div className="grid items-center gap-8 md:gap-12">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">ThinkHome – moderní IT bez starostí</h1>
              <p className="text-white/80 text-base md:text-lg max-w-prose">IT, které prostě funguje. Zrychlíme práci, snížíme náklady a dáme technologiím jasný řád – přehledně, klidně a bez zbytečných složitostí.</p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="#kontakt" className="inline-flex">
                  <Button>Nezávazná konzultace zdarma</Button>
                </Link>
                <Link href="#proc" className="inline-flex">
                  <Button variant="secondary">Proč ThinkHome</Button>
                </Link>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-white/70">
                <li>• Reakce na kritické požadavky do 2 hodin</li>
                <li>• 24/7 dohled a dlouhodobá podpora</li>
                <li>• 200+ spokojených klientů</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="scroll-mt-20">
        <Container className="px-6 py-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Jednoduše řečeno</h2>
            <p className="mt-4 text-white/80">Potřebujete, aby IT fungovalo a nebrzdilo. My ho nastavíme tak, aby bylo rychlé, bezpečné a srozumitelné. Místo odborných termínů mluvíme jasně a soustředíme se na výsledky, které uvidíte v praxi.</p>
          </div>
        </Container>
      </Section>

      <Section id="proc" className="scroll-mt-20">
        <Container className="px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Proč si nás firmy vybírají</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconRocket size={20} className="text-white" />
                  <h3 className="text-lg font-medium">Méně starostí, více výsledků</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Od prvního dne ubíráme agendu. Hlídáme dostupnost, aktualizace i bezpečnost – vy řešíte svůj byznys.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconHeadset size={20} className="text-white" />
                  <h3 className="text-lg font-medium">Rychlá a lidská podpora</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Když je potřeba, jsme tady. Kritické požadavky řešíme do 2 hodin a mluvíme srozumitelně.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconShieldCheck size={20} className="text-white" />
                  <h3 className="text-lg font-medium">Dlouhodobý partner</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">IT stavíme udržitelně a jednoduše. Roste s vámi a drží krok s tím, co opravdu potřebujete.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconDeviceFloppy size={20} className="text-white" />
                  <h3 className="text-lg font-medium">Zálohy a obnova</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Pravidelné zálohy a testy obnovy, aby vaše data byla v bezpečí.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconLock size={20} className="text-white" />
                  <h3 className="text-lg font-medium">Bezpečnost</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Audit, prevence incidentů a průběžné aktualizace bez zdržení.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconWorld size={20} className="text-white" />
                  <h3 className="text-lg font-medium">Weby a automatizace</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Rychlé weby a chytré nástroje, které šetří čas i náklady.</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="scroll-mt-20">
        <Container className="px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-4xl font-semibold">99,8%</p>
              <p className="text-white/70">dostupnost spravovaných systémů</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-semibold">200+</p>
              <p className="text-white/70">dlouhodobých zákazníků</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-semibold">2 h</p>
              <p className="text-white/70">průměrná reakce na kritické požadavky</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-4 opacity-80">
              <Link href="/o-nas" className="text-xs uppercase tracking-wide text-white/60 hover:underline">Na čem stavíme</Link>
              <span className="inline-flex items-center gap-2 text-sm text-white/70"><IconWorld size={16} /> Web</span>
              <span className="inline-flex items-center gap-2 text-sm text-white/70"><IconDeviceFloppy size={16} /> Zálohy</span>
              <span className="inline-flex items-center gap-2 text-sm text-white/70"><IconLock size={16} /> Bezpečnost</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="scroll-mt-20">
        <Container className="px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Co o nás říkají</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {featured.map((p, idx) => (
              <Card key={`${p.title}-${idx}`}>
                <CardContent>
                  <p className="text-white/90">{p.title}</p>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="kontakt" className="scroll-mt-20">
        <Container className="px-6 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Připraveni začít?</h2>
            <p className="mt-3 text-white/80">Napište pár slov o tom, co řešíte. Ozveme se do 24 hodin a navrhneme jasné kroky.</p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  )
}

 

