import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const SERVICES = [
  { title: 'Turn‑key IT management', desc: '24/7 dohled, správa zařízení a síťové infrastruktury' },
  { title: 'Repasované PC', desc: 'Výkup, repas a instalace spolehlivé techniky' },
  { title: 'Webové systémy', desc: 'Next.js a WordPress – od návrhu po provoz' },
  { title: 'Backup & e‑maily', desc: 'Bezpečné zálohy, firemní e‑mail, privátní cloud' },
  { title: 'Google/M365/Zoho', desc: 'Nasazení, správa, migrace a školení' },
  { title: 'Infrastruktura', desc: 'WiFi (UniFi), kamery, tiskárny, NAS' },
  { title: 'Licence & poradenství', desc: 'Optimalizace licencí a nákladů' },
  { title: 'Školení', desc: 'Efektivita práce a kyberbezpečnost pro uživatele' },
  { title: 'Bezpečnostní audit', desc: 'Audit a penetrační testy s návrhem opatření' },
];

export function HomeServices() {
  return (
    <Section id="sluzby" className="bg-[#0d0d0d]">
      <Container className="px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Služby</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((card) => (
            <div key={card.title} className="rounded-lg border border-white/10 bg-muted p-5 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-medium">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}


