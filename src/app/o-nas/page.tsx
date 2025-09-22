export const metadata = { title: 'O nás – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;
import { readYamlObject } from '@/lib/yaml';

type Contacts = { email?: string; phone?: string; address?: { name?: string; ico?: string; street?: string; city?: string; zip?: string } };

export default async function Page() {
  const contacts = await readYamlObject<Contacts>('contacts.yaml');
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">O nás</h1>
        <p className="mt-4 text-white/80 max-w-3xl">Jsme ThinkHome. Dodáváme moderní IT bez starostí – od správy infrastruktury, přes weby až po bezpečnost. Mluvíme jasně, jednáme rychle a díváme se na věci lidsky.</p>
        <div className="mt-8 rounded-lg border border-white/10 bg-muted p-5">
          <h2 className="text-lg font-medium">Fakturační údaje</h2>
          <dl className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
            {contacts?.address?.name && (
              <div>
                <dt className="text-white/60">Oficiální název</dt>
                <dd>{contacts.address.name}</dd>
              </div>
            )}
            {contacts?.address?.ico && (
              <div>
                <dt className="text-white/60">IČO</dt>
                <dd>{contacts.address.ico}</dd>
              </div>
            )}
            {contacts?.email && (
              <div>
                <dt className="text-white/60">E‑mail</dt>
                <dd>{contacts.email}</dd>
              </div>
            )}
            {contacts?.phone && (
              <div>
                <dt className="text-white/60">Telefon</dt>
                <dd>{contacts.phone}</dd>
              </div>
            )}
            {contacts?.address?.street && (
              <div>
                <dt className="text-white/60">Adresa</dt>
                <dd>{contacts.address.street}</dd>
              </div>
            )}
            {(contacts?.address?.city || contacts?.address?.zip) && (
              <div>
                <dt className="text-white/60">Město/PSČ</dt>
                <dd>{[contacts.address?.city, contacts.address?.zip].filter(Boolean).join(' ')}</dd>
              </div>
            )}
          </dl>
          <p className="mt-3 text-xs text-white/50">Údaje dle veřejných rejstříků. Pro doplnění DIČ / adresy nás kontaktujte.</p>
          <div className="mt-4">
            <a href="#kontakt" className="text-sm text-white/80 underline">Chci nezávaznou konzultaci</a>
          </div>
        </div>
      </div>
    </section>
  );
}


