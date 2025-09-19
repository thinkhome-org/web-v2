export const metadata = { title: 'O nás – ThinkHome' };

export default function Page() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">O nás</h1>
        <p className="mt-4 text-white/80 max-w-3xl">Jsme ThinkHome. Dodáváme moderní IT bez starostí – od správy infrastruktury, přes weby až po bezpečnost. Zaměřujeme se na SMB a domácnosti s důrazem na rychlost, srozumitelnost a bezpečnost.</p>
        <div className="mt-8 rounded-lg border border-white/10 bg-muted p-5">
          <h2 className="text-lg font-medium">Fakturační údaje</h2>
          <dl className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
            <div>
              <dt className="text-white/60">Oficiální název</dt>
              <dd>Ing. Štefan Paluba</dd>
            </div>
            <div>
              <dt className="text-white/60">IČO</dt>
              <dd>10727078</dd>
            </div>
            <div>
              <dt className="text-white/60">E‑mail</dt>
              <dd>info@thinkhome.org</dd>
            </div>
            <div>
              <dt className="text-white/60">Telefon</dt>
              <dd>+420 910 129 289</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-white/50">Údaje dle veřejných rejstříků. Pro doplnění DIČ / adresy nás kontaktujte.</p>
        </div>
      </div>
    </section>
  );
}


