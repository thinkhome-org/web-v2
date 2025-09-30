export const metadata = { title: "Služby – ThinkHome" };
export const dynamic = "force-static";
export const revalidate = false;

import { readValidatedArray, serviceSchema, type Service } from "@/lib/yaml";
import { Section, Container, Card, CardHeader, CardContent } from "@/components/ui";
import {
  IconTools,
  IconServer,
  IconDeviceDesktop,
  IconWorld,
  IconCloud,
  IconDatabase,
  IconDevices,
  IconCertificate,
  IconSchool,
  IconSearch,
  IconChevronRight,
} from "@tabler/icons-react";

// Icon mapping for different service types
type IconComponent = typeof IconTools;
const getServiceIcon = (slug: string) => {
  const iconMap: Record<string, IconComponent> = {
    "turn-key-it-management": IconServer,
    "repasovane-pc": IconDeviceDesktop,
    "webove-systemy": IconWorld,
    "backup-emaily": IconDatabase,
    "workspace-platformy": IconCloud,
    infrastruktura: IconDevices,
    "licence-poradenstvi": IconCertificate,
    skoleni: IconSchool,
    "bezpecnostni-audit": IconSearch,
  };
  return iconMap[slug] || IconTools;
};

export default async function Page() {
  const services = await readValidatedArray<Service>("services.yaml", serviceSchema);

  // Group services into categories for better organization
  const coreServices = services.slice(0, 4);
  const specializedServices = services.slice(4);

  return (
    <>
      <Section className="px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-4 md:mb-6">
              Naše služby
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
              Komplexní IT řešení šitá na míru vašim potřebám. Od správy infrastruktury až po vývoj
              webových aplikací – vše pod jednou střechou.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-4 py-2 backdrop-blur-md bg-white/5 border border-white/20 rounded-sm text-sm text-white/80">
                ✓ 24/7 podpora
              </div>
              <div className="px-4 py-2 backdrop-blur-md bg-white/5 border border-white/20 rounded-sm text-sm text-white/80">
                ✓ Pevné ceny
              </div>
              <div className="px-4 py-2 backdrop-blur-md bg-white/5 border border-white/20 rounded-sm text-sm text-white/80">
                ✓ Bez závazků
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Services */}
      <Section className="px-6 pb-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Základní služby</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-16">
              {coreServices.map((service, idx) => {
                const slug = service.slug || `service-${idx}`;
                const Icon = getServiceIcon(slug);
                return (
                  <Card
                    key={slug}
                    className="group backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-300 overflow-hidden"
                  >
                    <a href={`/sluzby/${slug}`} className="block">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-sm bg-accent/20 group-hover:bg-accent/30 transition-colors">
                            <Icon size={28} className="text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                              {service.title}
                            </h3>
                          </div>
                          <IconChevronRight
                            size={20}
                            className="text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-white/80 mb-4 leading-relaxed">{service.desc}</p>
                        {service.intro && (
                          <p className="text-sm text-white/60 line-clamp-2">{service.intro}</p>
                        )}
                      </CardContent>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Specialized Services */}
      <Section className="px-6 pb-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Specializované služby
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {specializedServices.map((service, idx) => {
                const slug = service.slug || `service-${idx + coreServices.length}`;
                const Icon = getServiceIcon(slug);
                return (
                  <Card
                    key={slug}
                    className="group backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
                  >
                    <a href={`/sluzby/${slug}`} className="block p-5">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-sm bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Icon size={20} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white group-hover:text-accent transition-colors mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-white/70 line-clamp-2">{service.desc}</p>
                        </div>
                        <IconChevronRight
                          size={16}
                          className="text-white/40 group-hover:text-accent transition-colors mt-1"
                        />
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="px-6 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Card className="backdrop-blur-md bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Nevíte, kterou službu potřebujete?
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Rádi s vámi projdeme vaše potřeby a navrhneme optimální řešení. Konzultace je
                  zdarma a bez závazků.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors"
                  >
                    Nezávazná konzultace
                  </a>
                  <a
                    href="tel:+420910129289"
                    className="inline-flex items-center gap-2 px-8 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium rounded-lg transition-all"
                  >
                    Zavolat: +420 910 129 289
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
