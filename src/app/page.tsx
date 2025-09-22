import Image from 'next/image'
import Link from 'next/link'
import { Container, Section, Card, CardContent, CardHeader, Button } from '@/components/ui'
import ContactForm from '@/components/contact-form'
import { IconRocket, IconHeadset, IconShieldCheck } from '@tabler/icons-react'

export default function Page() {
  return (
    <>
      <Section className="border-0">
        <Container className="px-6 py-16 md:py-24 grid gap-10 md:gap-12">
          <div className="grid md:grid-cols-[1.1fr,0.9fr] items-center gap-8 md:gap-12">
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
            <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-xl overflow-hidden border border-white/10">
              <Image src="/globe.svg" alt="Moderní technologie ThinkHome" fill priority className="object-contain p-6 opacity-90" />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="px-6 py-6 md:py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
            <span className="text-xs uppercase tracking-wide text-white/60">Technologie, na kterých stavíme</span>
            <div className="flex items-center gap-6">
              <Image src="/next.svg" alt="Next.js" width={72} height={18} className="opacity-70" />
              <Image src="/vercel.svg" alt="Vercel" width={72} height={18} className="opacity-70" />
              <Image src="/globe.svg" alt="Web" width={72} height={18} className="opacity-70" />
              <Image src="/window.svg" alt="Apps" width={72} height={18} className="opacity-70" />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="px-6 py-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Jednoduše řečeno</h2>
            <p className="mt-4 text-white/80">Potřebujete, aby IT fungovalo a nebrzdilo. My ho nastavíme tak, aby bylo rychlé, bezpečné a srozumitelné. Místo odborných termínů mluvíme jasně a soustředíme se na výsledky, které uvidíte v praxi.</p>
          </div>
        </Container>
      </Section>

      <Section id="proc">
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
          </div>
        </Container>
      </Section>

      <Section>
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
        </Container>
      </Section>

      <Section>
        <Container className="px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Co o nás říkají</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Card>
              <CardContent>
                <p className="text-white/90">„Přešli jsme na ThinkHome a hned první měsíc ubyly výpadky. Komunikace rychlá, řešení praktická.“</p>
                <p className="mt-3 text-sm text-white/60">COO, výrobní společnost</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-white/90">„Pomohli nám zjednodušit IT a ušetřit náklady na licence. Všechno vysvětlí bez zbytečného žargonu.“</p>
                <p className="mt-3 text-sm text-white/60">CEO, marketingová agentura</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-white/90">„Na incidenty reagují opravdu rychle a proaktivně hlídají prevenci. IT konečně nebrzdí.“</p>
                <p className="mt-3 text-sm text-white/60">IT lead, e‑commerce</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="kontakt">
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

 

