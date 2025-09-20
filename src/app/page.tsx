import dynamic from "next/dynamic";
import ContactForm from "@/components/contact-form";
import { Icons, Section, Container, Card, CardHeader, CardContent } from "@/components/ui";
const HomeHero = dynamic(() => import("@/components/sections/home-hero").then(m => m.HomeHero), { ssr: true });

export default function Home() {
  return (
    <main className="font-sans">
      <HomeHero />

      {/* Služby – marketingové bloky */}
      <Section>
        <Container className="px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Komplexní IT služby na klíč</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Zbavte se starostí o technologie a zaměřte se na růst. Od správy infrastruktury po moderní weby – vše na jednom místě.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2 text-white/90"><Icons.IconTools size={18} /> Turn‑key IT management</CardHeader>
              <CardContent className="text-sm text-white/70">24/7 dohled, proaktivní správa a minimální výpadky. Váš byznys jede.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2 text-white/90"><Icons.IconDeviceLaptop size={18} /> Repasované notebooky/PC</CardHeader>
              <CardContent className="text-sm text-white/70">Kvalitní technika za zlomek ceny nového. Ekonomicky i ekologicky.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2 text-white/90"><Icons.IconCloud size={18} /> Backup, e‑maily, privátní cloud</CardHeader>
              <CardContent className="text-sm text-white/70">Bezpečné zálohy, firemní pošta a cloudová řešení na míru.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2 text-white/90"><Icons.IconWorldWww size={18} /> Weby na míru</CardHeader>
              <CardContent className="text-sm text-white/70">Moderní weby s důrazem na výkon, bezpečnost a správu obsahu.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2 text-white/90"><Icons.IconShieldCheck size={18} /> Bezpečnost a audity</CardHeader>
              <CardContent className="text-sm text-white/70">Penetrační testy a návrhy opatření pro maximální ochranu.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex items-center gap-2 text-white/90"><Icons.IconBuildingSkyscraper size={18} /> Firemní infrastruktura</CardHeader>
              <CardContent className="text-sm text-white/70">Sítě, Wi‑Fi (Unifi), tiskárny, kamery a NAS – kompletní řešení.</CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Proč ThinkHome */}
      <Section>
        <Container className="px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Proč si vybrat ThinkHome</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-1 flex items-center gap-2 text-white/90"><Icons.IconBolt size={18} /> Rychlá reakce</CardHeader>
              <CardContent className="text-sm text-white/70">Kritické problémy řešíme obratem, podpora k dispozici 24/7.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-1 flex items-center gap-2 text-white/90"><Icons.IconCurrencyDollar size={18} /> Transparentní ceny</CardHeader>
              <CardContent className="text-sm text-white/70">Jasná kalkulace bez skrytých poplatků, férové podmínky.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-1 flex items-center gap-2 text-white/90"><Icons.IconChartBar size={18} /> Zaměření na výsledky</CardHeader>
              <CardContent className="text-sm text-white/70">Technologie nasazujeme tak, aby reálně podpořily růst firmy.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-1 flex items-center gap-2 text-white/90"><Icons.IconShieldLock size={18} /> Maximální bezpečnost</CardHeader>
              <CardContent className="text-sm text-white/70">Moderní standardy, průběžné aktualizace a prevence rizik.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-1 flex items-center gap-2 text-white/90"><Icons.IconArrowsMaximize size={18} /> Škálovatelnost</CardHeader>
              <CardContent className="text-sm text-white/70">Řešení, která rostou s vámi – od startupu po enterprise.</CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-1 flex items-center gap-2 text-white/90"><Icons.IconUserHeart size={18} /> Lidský přístup</CardHeader>
              <CardContent className="text-sm text-white/70">Vysvětlujeme srozumitelně, jednáme rychle a partnersky.</CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-[#0d0d0d] px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Kontaktujte nás</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Máte dotaz nebo chcete nezávaznou konzultaci? Napište nám – ozveme se co nejdřív.</p>
        <ContactForm />
      </section>
    </main>
  );
}

