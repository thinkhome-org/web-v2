import Link from 'next/link'
import { Container, AnimatedSection, Card, CardContent, CardHeader, Button, ConsultationCTA, HeroSection } from '@/components/ui'
import { IconRocket, IconHeadset, IconShieldCheck, IconDeviceFloppy, IconLock, IconWorld, IconTrendingUp, IconClock, IconUsers } from '@tabler/icons-react'

export default async function Page() {
  return (
    <>
      {/* Hero Section - Full Height */}
      <HeroSection id="home" className="scroll-mt-20">
        <Container className="px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              {/* Animated Hero Content */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent fade-in">
                  ThinkHome
                </h1>
                <div className="slide-up stagger-1">
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4">
                    Moderní IT bez starostí
                  </p>
                  <p className="text-white/70 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                    IT, které prostě funguje. Zrychlíme práci, snížíme náklady a dáme technologiím jasný řád – přehledně, klidně a bez zbytečných složitostí.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 slide-up stagger-2">
                <Link href="#kontakt" className="inline-flex">
                  <Button className="px-10 py-4 text-xl font-semibold btn-primary">
                    Nezávazná konzultace zdarma
                  </Button>
                </Link>
                <Link href="#proc" className="inline-flex">
                  <Button variant="secondary" className="px-10 py-4 text-xl font-semibold glass-block border-white/20 hover:border-white/30">
                    Proč ThinkHome
                  </Button>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 slide-up stagger-3">
                <Card variant="glass" className="text-center py-8">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mb-4">
                      <IconTrendingUp size={32} className="text-accent" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">99,8%</p>
                    <p className="text-white/70 text-lg">dostupnost systémů</p>
                  </div>
                </Card>
                <Card variant="glass" className="text-center py-8 stagger-1">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mb-4">
                      <IconUsers size={32} className="text-accent" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">200+</p>
                    <p className="text-white/70 text-lg">spokojených klientů</p>
                  </div>
                </Card>
                <Card variant="glass" className="text-center py-8 stagger-2">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mb-4">
                      <IconClock size={32} className="text-accent" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">2h</p>
                    <p className="text-white/70 text-lg">reakce na kritické požadavky</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* About Section */}
      <AnimatedSection className="py-20 md:py-32" animation="slide-up">
        <Container className="px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Jednoduše řečeno
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Potřebujete, aby IT fungovalo a nebrzdilo. My ho nastavíme tak, aby bylo rychlé, bezpečné a srozumitelné. 
              Místo odborných termínů mluvíme jasně a soustředíme se na výsledky, které uvidíte v praxi.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection id="proc" className="scroll-mt-20 py-20 md:py-32" animation="slide-up">
        <Container className="px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Proč si nás firmy vybírají
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card variant="glass" className="slide-up">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10">
                      <IconRocket size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Méně starostí, více výsledků</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Od prvního dne ubíráme agendu. Hlídáme dostupnost, aktualizace i bezpečnost – vy řešíte svůj byznys.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass" className="slide-up stagger-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10">
                      <IconHeadset size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Rychlá a lidská podpora</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Když je potřeba, jsme tady. Kritické požadavky řešíme do 2 hodin a mluvíme srozumitelně.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass" className="slide-up stagger-2">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10">
                      <IconShieldCheck size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Dlouhodobý partner</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    IT stavíme udržitelně a jednoduše. Roste s vámi a drží krok s tím, co opravdu potřebujete.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass" className="slide-up stagger-3">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10">
                      <IconDeviceFloppy size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Zálohy a obnova</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Pravidelné zálohy a testy obnovy, aby vaše data byla v bezpečí.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass" className="slide-up stagger-4">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10">
                      <IconLock size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Bezpečnost</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Audit, prevence incidentů a průběžné aktualizace bez zdržení.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass" className="slide-up stagger-5">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10">
                      <IconWorld size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Weby a automatizace</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Rychlé weby a chytré nástroje, které šetří čas i náklady.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 md:py-32" animation="slide-up">
        <Container className="px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Co o nás říkají
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto mb-16">
              Více než 200 spokojených klientů nám důvěřuje svou IT infrastrukturu
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card variant="glass" className="text-center py-8 slide-up">
                <CardContent>
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full mx-auto flex items-center justify-center mb-6">
                      <span className="text-accent font-bold text-2xl">M</span>
                    </div>
                  </div>
                  <blockquote className="text-white/90 italic mb-8 text-lg leading-relaxed">
                    &ldquo;ThinkHome nám ušetřil desítky hodin měsíčně. IT prostě funguje a my se můžeme soustředit na byznys.&rdquo;
                  </blockquote>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-lg">Martin Novák</p>
                    <p className="text-accent">CEO, TechStart s.r.o.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="glass" className="text-center py-8 slide-up stagger-1">
                <CardContent>
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full mx-auto flex items-center justify-center mb-6">
                      <span className="text-accent font-bold text-2xl">A</span>
                    </div>
                  </div>
                  <blockquote className="text-white/90 italic mb-8 text-lg leading-relaxed">
                    &ldquo;Rychlá reakce, srozumitelná komunikace a řešení, které skutečně funguje. Doporučuji všem.&rdquo;
                  </blockquote>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-lg">Anna Svobodová</p>
                    <p className="text-accent">IT Manager, Inovace a.s.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="glass" className="text-center py-8 slide-up stagger-2">
                <CardContent>
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full mx-auto flex items-center justify-center mb-6">
                      <span className="text-accent font-bold text-2xl">P</span>
                    </div>
                  </div>
                  <blockquote className="text-white/90 italic mb-8 text-lg leading-relaxed">
                    &ldquo;Konečně IT partner, který rozumí našim potřebám a řeší problémy dřív, než se stanou kritickými.&rdquo;
                  </blockquote>
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-lg">Petr Dvořák</p>
                    <p className="text-accent">Ředitel, Moderní firma</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="slide-up stagger-3">
              <Card variant="glass" className="inline-flex items-center gap-8 px-8 py-6">
                <Link href="/o-nas" className="text-lg text-white/70 hover:text-accent transition-colors font-medium">
                  Na čem stavíme
                </Link>
                <div className="flex items-center gap-6 text-white/60">
                  <span className="flex items-center gap-3 text-lg">
                    <IconWorld size={20} className="text-accent" />
                    Web
                  </span>
                  <span className="flex items-center gap-3 text-lg">
                    <IconDeviceFloppy size={20} className="text-accent" />
                    Zálohy
                  </span>
                  <span className="flex items-center gap-3 text-lg">
                    <IconLock size={20} className="text-accent" />
                    Bezpečnost
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection id="kontakt" className="scroll-mt-20 py-20 md:py-32" animation="scale-in">
        <Container className="px-6">
          <ConsultationCTA />
        </Container>
      </AnimatedSection>
    </>
  )
}