import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Container, Section, Card, CardContent, CardHeader, Button, ConsultationCTA } from '@/components/ui'
import { IconRocket, IconHeadset, IconShieldCheck, IconDeviceFloppy, IconLock, IconWorld } from '@tabler/icons-react'

const ContactForm = dynamic(() => import('@/components/contact-form'), {
  loading: () => (
    <div className="mt-8 max-w-2xl mx-auto p-8 text-center">
      <div className="animate-pulse">
        <div className="h-4 bg-white/20 rounded mb-4"></div>
        <div className="h-4 bg-white/20 rounded mb-4"></div>
        <div className="h-4 bg-white/20 rounded mb-4"></div>
      </div>
    </div>
  )
})

export default async function Page() {
  return (
    <>
      <Section className="border-0 scroll-mt-20" id="home">
        <Container className="px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                ThinkHome – moderní IT bez starostí
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                IT, které prostě funguje. Zrychlíme práci, snížíme náklady a dáme technologiím jasný řád – přehledně, klidně a bez zbytečných složitostí.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#kontakt" className="inline-flex">
                  <Button className="px-8 py-3 text-lg">
                    Nezávazná konzultace zdarma
                  </Button>
                </Link>
                <Link href="#proc" className="inline-flex">
                  <Button variant="secondary" className="px-8 py-3 text-lg">
                    Proč ThinkHome
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-accent">99,8%</p>
                <p className="text-white/70 text-sm">dostupnost systémů</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-accent">200+</p>
                <p className="text-white/70 text-sm">spokojených klientů</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-accent">2h</p>
                <p className="text-white/70 text-sm">reakce na kritické požadavky</p>
              </div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-4">
              Co o nás říkají
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Více než 200 spokojených klientů nám důvěřuje svou IT infrastrukturu
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-accent font-bold text-xl">M</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full"></div>
                </div>
                <blockquote className="text-white/90 italic mb-6 text-lg leading-relaxed">
                  &ldquo;ThinkHome nám ušetřil desítky hodin měsíčně. IT prostě funguje a my se můžeme soustředit na byznys.&rdquo;
                </blockquote>
                <div className="space-y-1">
                  <p className="text-white font-medium">Martin Novák</p>
                  <p className="text-sm text-accent">CEO, TechStart s.r.o.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-accent font-bold text-xl">A</span>
                  </div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent/30 rounded-full"></div>
                </div>
                <blockquote className="text-white/90 italic mb-6 text-lg leading-relaxed">
                  &ldquo;Rychlá reakce, srozumitelná komunikace a řešení, které skutečně funguje. Doporučuji všem.&rdquo;
                </blockquote>
                <div className="space-y-1">
                  <p className="text-white font-medium">Anna Svobodová</p>
                  <p className="text-sm text-accent">IT Manager, Inovace a.s.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-300 group">
              <CardContent className="pt-8 pb-6">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-accent font-bold text-xl">P</span>
                  </div>
                  <div className="absolute -bottom-1 -right-3 w-5 h-5 bg-accent/25 rounded-full"></div>
                </div>
                <blockquote className="text-white/90 italic mb-6 text-lg leading-relaxed">
                  &ldquo;Konečně IT partner, který rozumí našim potřebám a řeší problémy dřív, než se stanou kritickými.&rdquo;
                </blockquote>
                <div className="space-y-1">
                  <p className="text-white font-medium">Petr Dvořák</p>
                  <p className="text-sm text-accent">Ředitel, Moderní firma</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-6 px-8 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl">
              <Link href="/o-nas" className="text-sm text-white/70 hover:text-accent transition-colors font-medium">
                Na čem stavíme
              </Link>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <IconWorld size={16} className="text-accent" />
                  Web
                </span>
                <span className="flex items-center gap-2">
                  <IconDeviceFloppy size={16} className="text-accent" />
                  Zálohy
                </span>
                <span className="flex items-center gap-2">
                  <IconLock size={16} className="text-accent" />
                  Bezpečnost
                </span>
              </div>
            </div>
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

 

