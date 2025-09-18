export const metadata = { title: 'Služby – ThinkHome' };

const SERVICES = [
  { title: 'Turn‑key IT management', desc: '24/7 dohled, správa zařízení a sítí' },
  { title: 'Repasované PC', desc: 'Výkup, repas a instalace spolehlivé techniky' },
  { title: 'Webové systémy', desc: 'Next.js a WordPress – návrh, vývoj, provoz' },
  { title: 'Backup & e‑maily', desc: 'Bezpečné zálohy, firemní e‑mail, privátní cloud' },
  { title: 'Google/M365/Zoho', desc: 'Nasazení, správa, migrace a školení' },
  { title: 'Infrastruktura', desc: 'WiFi (UniFi), kamery, tiskárny, NAS' },
  { title: 'Licence & poradenství', desc: 'Optimalizace licencí/nákladů' },
  { title: 'Školení', desc: 'Efektivita práce a kyberbezpečnost' },
  { title: 'Bezpečnostní audit', desc: 'Audit a penetrační testy' },
];

export default function Page() {
  return (
    <section className="container px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold">Služby</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.title} className="rounded-lg border border-white/10 bg-muted p-5">
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


