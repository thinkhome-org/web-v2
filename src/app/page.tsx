import Link from "next/link";
import Image from "next/image";
import {
  Container,
  AnimatedSection,
  Card,
  Button,
  HeroSection,
  TypewriterEffect,
  ShimmerButton,
  BackgroundBeams,
  NumberTicker,
  HoverEffect,
  InfiniteMovingCards,
  SparklesCore,
  GradientButton,
} from "@/components/ui";
import {
  IconRocket,
  IconHeadset,
  IconShieldCheck,
  IconDeviceFloppy,
  IconLock,
  IconWorld,
  IconTrendingUp,
  IconClock,
  IconUsers,
} from "@tabler/icons-react";
import { NAV_ITEMS } from "@/config/navigation";

export default async function Page() {
  return (
    <>
      <HeroSection id="home" className="scroll-mt-20 relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <Container className="px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
            <div className="slide-up">
              <Link href="/" className="inline-block group">
                <Image
                  src="/logo/white.svg"
                  alt="ThinkHome"
                  width={420}
                  height={102}
                  className="mx-auto w-96 h-auto md:w-56 lg:w-64"
                  priority
                />
              </Link>
            </div>

            {/* Dynamic Typewriter Tagline */}
            <div className="slide-up stagger-1">
              <TypewriterEffect
                words={[
                  { text: "Moderní" },
                  { text: "IT" },
                  { text: "bez", className: "text-accent" },
                  { text: "starostí", className: "text-accent" },
                ]}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-4 md:mb-6"
                cursorClassName="bg-accent"
              />
              <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
                IT, které prostě funguje. Zrychlíme práci, snížíme náklady a dáme technologiím jasný
                řád – přehledně, klidně a bez zbytečných složitostí.
              </p>
            </div>

            <div className="slide-up stagger-2">
              <nav className="glass-block rounded-sm p-6 md:p-8 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
                  {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="group flex flex-col items-center gap-3 p-4 md:p-6 rounded-sm
                                bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20
                                transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-sm bg-gradient-to-br from-accent/20 to-accent/10
                                      flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20
                                      transition-all duration-300"
                      >
                        {Icon && <Icon size={24} className="text-accent" />}
                      </div>
                      <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white text-center">
                        {label}
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 slide-up stagger-3">
              <Link href="/kontakt" className="w-full sm:w-auto">
                <GradientButton
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white"
                  containerClassName="w-full sm:w-auto"
                >
                  Nezávazná konzultace zdarma
                </GradientButton>
              </Link>
              <Link href="/sluzby" className="w-full sm:w-auto">
                <GradientButton
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white"
                  containerClassName="w-full sm:w-auto"
                >
                  Naše služby
                </GradientButton>
              </Link>
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* Stats Section - Moved from hero */}
      <AnimatedSection className="py-16 md:py-20" animation="slide-up">
        <Container className="px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Důvěřují nám</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Více než 200 spokojených klientů nám svěřuje své IT
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <Link href="/o-nas" className="group">
                <Card
                  variant="glass"
                  className="text-center py-8 md:py-10 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
                      <IconTrendingUp size={32} className="text-accent" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
                      <NumberTicker value={99.8} decimalPlaces={1} />%
                    </p>
                    <p className="text-white/70 text-lg">dostupnost systémů</p>
                  </div>
                </Card>
              </Link>
              <Link href="/nas-tym" className="group">
                <Card
                  variant="glass"
                  className="text-center py-8 md:py-10 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
                      <IconUsers size={32} className="text-accent" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
                      <NumberTicker value={200} />+
                    </p>
                    <p className="text-white/70 text-lg">spokojených klientů</p>
                  </div>
                </Card>
              </Link>
              <Link href="/kontakt" className="group">
                <Card
                  variant="glass"
                  className="text-center py-8 md:py-10 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center">
                      <IconClock size={32} className="text-accent" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
                      <NumberTicker value={2} />h
                    </p>
                    <p className="text-white/70 text-lg">reakce na kritické požadavky</p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="about" className="py-16 md:py-20 lg:py-32" animation="slide-up">
        <Container className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Jednoduše řečeno
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed px-2">
              Potřebujete, aby IT fungovalo a nebrzdilo. My ho nastavíme tak, aby bylo rychlé,
              bezpečné a srozumitelné. Místo odborných termínů mluvíme jasně a soustředíme se na
              výsledky, které uvidíte v praxi.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection
        id="proc"
        className="scroll-mt-20 py-16 md:py-20 lg:py-32"
        animation="slide-up"
      >
        <Container className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text">
              Proč si nás firmy vybírají
            </h2>
            <HoverEffect
              items={[
                {
                  title: "Méně starostí, více výsledků",
                  description:
                    "Od prvního dne ubíráme agendu. Hlídáme dostupnost, aktualizace i bezpečnost – vy řešíte svůj byznys.",
                  link: "/sluzby",
                  icon: <IconRocket size={28} className="text-accent" />,
                },
                {
                  title: "Rychlá a lidská podpora",
                  description:
                    "Když je potřeba, jsme tady. Kritické požadavky řešíme do 2 hodin a mluvíme srozumitelně.",
                  link: "/kontakt",
                  icon: <IconHeadset size={28} className="text-accent" />,
                },
                {
                  title: "Dlouhodobý partner",
                  description:
                    "IT stavíme udržitelně a jednoduše. Roste s vámi a drží krok s tím, co opravdu potřebujete.",
                  link: "/o-nas",
                  icon: <IconShieldCheck size={28} className="text-accent" />,
                },
                {
                  title: "Zálohy a obnova",
                  description: "Pravidelné zálohy a testy obnovy, aby vaše data byla v bezpečí.",
                  link: "/sluzby",
                  icon: <IconDeviceFloppy size={28} className="text-accent" />,
                },
                {
                  title: "Bezpečnost",
                  description: "Audit, prevence incidentů a průběžné aktualizace bez zdržení.",
                  link: "/sluzby",
                  icon: <IconLock size={28} className="text-accent" />,
                },
                {
                  title: "Weby a automatizace",
                  description: "Rychlé weby a chytré nástroje, které šetří čas i náklady.",
                  link: "/sluzby",
                  icon: <IconWorld size={28} className="text-accent" />,
                },
              ]}
              className="gap-6 md:gap-8"
            />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-32" animation="slide-up">
        <Container className="px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Co o nás říkají
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto mb-16">
              Více než 200 spokojených klientů nám důvěřuje svou IT infrastrukturu
            </p>

            <InfiniteMovingCards
              items={[
                {
                  quote:
                    "ThinkHome nám ušetřil desítky hodin měsíčně. IT prostě funguje a my se můžeme soustředit na byznys.",
                  name: "Martin Novák",
                  title: "CEO, TechStart s.r.o.",
                  avatar: "M",
                },
                {
                  quote:
                    "Rychlá reakce, srozumitelná komunikace a řešení, které skutečně funguje. Doporučuji všem.",
                  name: "Anna Svobodová",
                  title: "IT Manager, Inovace a.s.",
                  avatar: "A",
                },
                {
                  quote:
                    "Konečně IT partner, který rozumí našim potřebám a řeší problémy dřív, než se stanou kritickými.",
                  name: "Petr Dvořák",
                  title: "Ředitel, Moderní firma",
                  avatar: "P",
                },
                {
                  quote:
                    "Spolehlivost a profesionalita na nejvyšší úrovni. Naše systémy běží bez problémů už 3 roky.",
                  name: "Jana Nováková",
                  title: "CTO, Digital Solutions",
                  avatar: "J",
                },
                {
                  quote:
                    "Transparentní komunikace a férové ceny. ThinkHome je náš dlouhodobý IT partner.",
                  name: "Tomáš Procházka",
                  title: "Majitel, E-shop Plus",
                  avatar: "T",
                },
              ]}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="mb-16"
            />

            <div className="slide-up stagger-3">
              <Card
                variant="glass"
                className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 sm:px-8 py-6"
              >
                <Link
                  href="/o-nas"
                  className="text-lg text-white/70 hover:text-accent transition-colors font-medium"
                >
                  Na čem stavíme
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/60">
                  <Link
                    href="/sluzby"
                    className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  >
                    <IconWorld size={20} className="text-accent" />
                    Web
                  </Link>
                  <Link
                    href="/sluzby"
                    className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  >
                    <IconDeviceFloppy size={20} className="text-accent" />
                    Zálohy
                  </Link>
                  <Link
                    href="/sluzby"
                    className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  >
                    <IconLock size={20} className="text-accent" />
                    Bezpečnost
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Enhanced CTA Section with SparklesCore */}
      <AnimatedSection
        id="kontakt"
        className="scroll-mt-20 py-20 md:py-32 relative overflow-hidden"
        animation="scale-in"
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0 w-full h-full"
          particleColor="#c1121f"
        />
        <Container className="px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <TypewriterEffect
              words={[
                { text: "Připraveni" },
                { text: "na" },
                { text: "změnu?", className: "text-accent" },
              ]}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              cursorClassName="bg-accent"
            />
            <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Získejte nezávaznou konzultace zdarma a zjistěte, jak můžeme zlepšit vaše IT
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt" className="w-full sm:w-auto">
                <GradientButton
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white"
                  containerClassName="w-full sm:w-auto"
                >
                  Nezávazná konzultace zdarma
                </GradientButton>
              </Link>
              <Link href="/sluzby" className="w-full sm:w-auto">
                <GradientButton
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white"
                  containerClassName="w-full sm:w-auto"
                >
                  Prohlédnout služby
                </GradientButton>
              </Link>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
