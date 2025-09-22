import ContactForm from '@/components/contact-form';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import * as Icons from '@tabler/icons-react';
import { readYamlObject } from '@/lib/yaml';

export const metadata = { title: 'Kontakt – ThinkHome' };

type Contacts = { email?: string; phone?: string; address?: { name?: string; ico?: string } };
export default async function Page() {
  const contacts = await readYamlObject<Contacts>('contacts.yaml');
  return (
    <section className="px-6 py-16 md:py-24">
      <Container>
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="mt-4 text-white/80 max-w-2xl">Ozvěte se nám – obvykle reagujeme do 24 hodin. Kritické incidenty řešíme obratem.</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <ContactForm />
        </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-medium flex items-center gap-2"><Icons.IconPhone size={18} /> Rychlý kontakt</h2>
              </CardHeader>
              <CardContent>
                <div className="grid text-sm text-white/80">
                  {contacts?.email && <a className="rounded-md px-2 py-1 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring inline-flex items-center gap-2" href={`mailto:${contacts.email}`}><Icons.IconMail size={16} /> {contacts.email}</a>}
                  {contacts?.phone && <a className="rounded-md px-2 py-1 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring inline-flex items-center gap-2" href={`tel:${contacts.phone.replace(/\s+/g,'')}`}><Icons.IconPhone size={16} /> {contacts.phone}</a>}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-lg font-medium flex items-center gap-2"><Icons.IconFileDescription size={18} /> Fakturační údaje</h2>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-2 text-sm text-white/80">
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
                </dl>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-lg font-medium flex items-center gap-2"><Icons.IconClock size={18} /> Dostupnost podpory</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/80">Po–Pá 9:00–17:00 (kritické incidenty dle SLA).</p>
              </CardContent>
            </Card>
        </div>
      </div>
      </Container>
    </section>
  );
}


