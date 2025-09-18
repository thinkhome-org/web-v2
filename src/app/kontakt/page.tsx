import ContactForm from '@/components/contact-form';

export const metadata = { title: 'Kontakt – ThinkHome' };

export default function Page() {
  return (
    <section className="container px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="mt-4 text-white/80 max-w-2xl">Ozvěte se nám – zpráva se odešle bezpečně na náš interní kanál, obvykle reagujeme do 24 hodin.</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <ContactForm />
        </div>
        <div className="grid gap-4">
          <div className="rounded-lg border border-white/10 bg-muted p-5">
            <h2 className="text-lg font-medium">Rychlý kontakt</h2>
            <div className="mt-3 grid text-sm text-white/80">
              <a className="hover:underline" href="mailto:info@thinkhome.org">info@thinkhome.org</a>
              <a className="hover:underline" href="tel:+420910129289">+420 910 129 289</a>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-muted p-5">
            <h2 className="text-lg font-medium">Fakturační údaje</h2>
            <dl className="mt-3 grid gap-2 text-sm text-white/80">
              <div>
                <dt className="text-white/60">Oficiální název</dt>
                <dd>Ing. Štefan Paluba</dd>
              </div>
              <div>
                <dt className="text-white/60">IČO</dt>
                <dd>10727078</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-lg border border-white/10 bg-muted p-5">
            <h2 className="text-lg font-medium">Dostupnost podpory</h2>
            <p className="mt-2 text-sm text-white/80">Po–Pá 9:00–17:00 (kritické incidenty dle SLA).</p>
          </div>
        </div>
      </div>
    </section>
  );
}


