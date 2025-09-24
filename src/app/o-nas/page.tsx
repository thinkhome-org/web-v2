export const metadata = { title: 'O nás – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

import { readYamlObject } from '@/lib/yaml';
import { Container, Section, Card, CardHeader, CardContent } from '@/components/ui';
import { IconUsers, IconClock, IconShieldCheck, IconTrendingUp, IconCode, IconCloud } from '@tabler/icons-react';

type Contacts = { 
  email?: string; 
  phone?: string; 
  address?: { 
    name?: string; 
    ico?: string; 
    street?: string; 
    city?: string; 
    zip?: string 
  } 
};

export default async function Page() {
  const contacts = await readYamlObject<Contacts>('contacts.yaml');
  
  return (
    <>
      <Section className="px-6 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
              O nás
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mb-12">
              Jsme ThinkHome – váš spolehlivý partner pro moderní IT bez starostí. 
              Dodáváme komplexní řešení od správy infrastruktury až po bezpečnost. 
              Mluvíme jasně, jednáme rychle a díváme se na věci lidsky.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="px-6 py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Proč jsme tu pro vás</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <IconUsers size={24} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-medium">Zkušený tým</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Náš tým má více než 10 let zkušeností s IT řešeními pro firmy všech velikostí. 
                    Kombinujeme technickou expertizu s praktickým přístupem.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <IconClock size={24} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-medium">24/7 dostupnost</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Kritické situace řešíme do 2 hodin. Máme 99,8% dostupnost systémů 
                    a zajišťujeme, aby vaše IT nikdy nebrzdilo váš byznys.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <IconShieldCheck size={24} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-medium">Bezpečnost první</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Pravidelné audity, aktualizace a zálohy. Vaše data jsou v bezpečí 
                    a máte jistotu, že splňujeme všechny bezpečnostní standardy.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <IconTrendingUp size={20} className="text-accent" />
                  Naše hodnoty
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Transparentnost</h4>
                      <p className="text-sm text-white/70">Vysvětlujeme vše srozumitelně, bez technického žargonu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Proaktivita</h4>
                      <p className="text-sm text-white/70">Problémy řešíme dřív, než se stanou kritickými</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Růst s vámi</h4>
                      <p className="text-sm text-white/70">Naše řešení rostou s vašimi potřebami</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <IconCode size={20} className="text-accent" />
                  Technologie
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Moderní stack</h4>
                      <p className="text-sm text-white/70">React, Next.js, Node.js, Python, Docker</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">Cloud native</h4>
                      <p className="text-sm text-white/70">AWS, Google Cloud, Azure, Kubernetes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <h4 className="font-medium text-white">DevOps</h4>
                      <p className="text-sm text-white/70">CI/CD, Infrastructure as Code, Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information Card */}
            <Card className="backdrop-blur-md bg-white/5 border border-white/20">
              <CardHeader>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <IconCloud size={20} className="text-accent" />
                  Fakturační údaje
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {contacts?.address?.name && (
                    <div>
                      <dt className="text-sm text-white/60 mb-1">Oficiální název</dt>
                      <dd className="font-medium text-white">{contacts.address.name}</dd>
                    </div>
                  )}
                  {contacts?.address?.ico && (
                    <div>
                      <dt className="text-sm text-white/60 mb-1">IČO</dt>
                      <dd className="font-medium text-white">{contacts.address.ico}</dd>
                    </div>
                  )}
                  {contacts?.email && (
                    <div>
                      <dt className="text-sm text-white/60 mb-1">E‑mail</dt>
                      <dd className="font-medium text-white">{contacts.email}</dd>
                    </div>
                  )}
                  {contacts?.phone && (
                    <div>
                      <dt className="text-sm text-white/60 mb-1">Telefon</dt>
                      <dd className="font-medium text-white">{contacts.phone}</dd>
                    </div>
                  )}
                  {contacts?.address?.street && (
                    <div>
                      <dt className="text-sm text-white/60 mb-1">Adresa</dt>
                      <dd className="font-medium text-white">{contacts.address.street}</dd>
                    </div>
                  )}
                  {(contacts?.address?.city || contacts?.address?.zip) && (
                    <div>
                      <dt className="text-sm text-white/60 mb-1">Město/PSČ</dt>
                      <dd className="font-medium text-white">
                        {[contacts.address?.city, contacts.address?.zip].filter(Boolean).join(' ')}
                      </dd>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}