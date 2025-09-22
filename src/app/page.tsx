import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Button, Container, Section, Card, CardHeader, CardContent } from "@/components/ui";
import { IconMail, IconPlayerPlay, IconBolt, IconShieldCheck, IconChartBar, IconTools, IconWorldWww, IconCloud, IconShieldLock, IconDeviceLaptop, IconSchool, IconCheck } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <Section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <Container className="relative px-4 py-16 md:py-24 lg:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">ThinkHome</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">Moderní IT bez starostí</h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80">
            Správa IT, weby a cloud pro SMB. Rychle, spolehlivě, srozumitelně.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#kontakt" className="w-full sm:w-auto">
              <Button size="md" className="w-full bg-accent hover:bg-[#a50f19] text-white px-6 py-3" leftIcon={<IconMail size={18} />}>Kontaktovat</Button>
            </Link>
            <Link href="#sluzby" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" className="w-full border-white/20 text-white hover:bg-white/5 px-6 py-3" leftIcon={<IconPlayerPlay size={18} />}>Naše služby</Button>
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <Stat num="24/7" label="Podpora" />
            <Stat num="50+" label="Klientů" />
            <Stat num="99%" label="Dostupnost" />
            <Stat num="2h" label="Reakce" />
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container className="px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Proč ThinkHome</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature icon={<IconBolt size={22} />} title="Rychlá reakce" desc="Incidenty řešíme obratem, dostupnost podpory dle dohody." />
            <Feature icon={<IconShieldCheck size={22} />} title="Bezpečnost" desc="Zálohy, audit a prevence rizik jsou standard." />
            <Feature icon={<IconChartBar size={22} />} title="Výsledky" desc="Technologie nasazujeme s ohledem na obchodní cíle." />
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section id="sluzby" className="bg-[#0d0d0d]">
        <Container className="px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Služby</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Service icon={<IconTools size={24} />} title="IT management" desc="Proaktivní správa a monitoring, helpdesk a SLA." />
            <Service icon={<IconWorldWww size={24} />} title="Weby na míru" desc="Next.js/WordPress, výkon, bezpečnost, SEO." />
            <Service icon={<IconCloud size={24} />} title="Cloud & Backup" desc="Zálohy, firemní e‑mail, privátní cloud." />
            <Service icon={<IconShieldLock size={24} />} title="Bezpečnost" desc="Audit, pentest a implementace opatření." />
            <Service icon={<IconDeviceLaptop size={24} />} title="Hardware" desc="Repasované PC, sítě, Wi‑Fi, NAS." />
            <Service icon={<IconSchool size={24} />} title="Školení" desc="Efektivita práce a kyberbezpečnost." />
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container className="px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Jak probíhá spolupráce</h2>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-white/80">
            <Step num="01" title="Konzultace" desc="Krátké seznámení s potřebami a cíli." />
            <Step num="02" title="Audit" desc="Analýza stavu, návrh řešení a rozpočet." />
            <Step num="03" title="Implementace" desc="Bezpečné zavedení a školení týmu." />
            <Step num="04" title="Podpora" desc="Dlouhodobý dohled, údržba a rozvoj." />
          </ol>
        </Container>
      </Section>

      {/* Testimonials (simple) */}
      <Section className="bg-white">
        <Container className="px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Co o nás říkají</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Quote text="Spolehliví, rychlí, féroví." author="Petr N." />
            <Quote text="Nasazení cloudu bez výpadků." author="Tomáš D." />
            <Quote text="Weby běží rychle a bezpečně." author="Marie S." />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-accent to-accent/90">
        <Container className="px-4 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Připraveni zbavit se IT starostí?</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">Domluvte si nezávaznou konzultaci zdarma a získejte konkrétní návrh řešení.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#kontakt" className="w-full sm:w-auto">
              <Button size="md" className="w-full bg-white text-accent hover:bg-white/90 px-6 py-3" leftIcon={<IconMail size={18} />}>Získat konzultaci zdarma</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <section id="kontakt" className="bg-[#0d0d0d] px-4 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kontaktujte nás</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Máte dotaz nebo chcete návrh na míru? Ozvěte se, rádi pomůžeme.</p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{num}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card>
      <CardHeader className="pb-2 flex items-center gap-3 text-white/90">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">{icon}</span>
        {title}
      </CardHeader>
      <CardContent className="text-sm text-white/70">{desc}</CardContent>
    </Card>
  );
}

function Service({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-muted p-5 hover:border-white/20 transition-colors">
      <div className="flex items-center gap-3 text-white/90">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">{icon}</span>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
        <IconCheck size={16} /> Součástí SLA
      </div>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <li className="rounded-md border border-white/10 bg-muted p-5">
      <span className="text-accent font-mono">{num}</span>
      <p className="mt-1 font-medium text-white/90">{title}</p>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </li>
  );
}

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6">
        <blockquote className="text-gray-700 leading-relaxed">{text}</blockquote>
        <div className="mt-4 text-sm font-medium text-accent">{author}</div>
      </CardContent>
    </Card>
  );
}

