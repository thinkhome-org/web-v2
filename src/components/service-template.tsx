import { notFound } from "next/navigation";
import {
  readValidatedArray,
  serviceSchema,
  type Service,
  projectSchema,
  type Project,
} from "@/lib/yaml";
import {
  Container,
  AnimatedSection,
  Card,
  CardHeader,
  CardContent,
  ConsultationCTA,
  HeroSection,
} from "@/components/ui";
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
  IconChevronLeft,
  IconExternalLink,
  IconCircleCheck,
} from "@tabler/icons-react";
import Link from "next/link";

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

export default async function ServiceTemplate({ params }: { params: { slug: string } }) {
  const services = await readValidatedArray<Service>("services.yaml", serviceSchema);
  const service = services.find(
    (s, idx) => s.slug === params.slug || `service-${idx}` === params.slug,
  );
  if (!service) return notFound();

  const projects = await readValidatedArray<Project>("projects.yaml", projectSchema);
  const linked = service.projects?.length
    ? projects.filter((p) => service.projects?.includes(p.title))
    : [];
  const Icon = getServiceIcon(service.slug || "");

  return (
    <>
      {/* Header Section */}
      <HeroSection fullHeight={false} className="py-20 md:py-32">
        <Container className="px-6">
          <div className="max-w-6xl mx-auto">
            {/* Back Navigation */}
            <Link
              href="/sluzby"
              className="inline-flex items-center gap-3 text-white/70 hover:text-accent transition-colors mb-12 group text-lg"
            >
              <IconChevronLeft
                size={24}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Zpět na služby
            </Link>

            {/* Service Header */}
            <div className="text-center space-y-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-sm flex items-center justify-center mb-8">
                <Icon size={48} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text ">
                {service.title}
              </h1>
              <div className="max-w-4xl mx-auto">
                {service.intro ? (
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                    {service.intro}
                  </p>
                ) : (
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                    {service.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* Process Steps */}
      {service.steps?.length ? (
        <AnimatedSection className="py-20 md:py-32" animation="slide-up">
          <Container className="px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text ">
                Jak postupujeme
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {service.steps.map((step, i) => (
                  <Card
                    key={i}
                    variant="glass"
                    className="slide-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                          <span className="text-accent font-bold text-lg">{i + 1}</span>
                        </div>
                        <h3 className="font-semibold text-white text-lg">Krok {i + 1}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 text-lg leading-relaxed">{step}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </AnimatedSection>
      ) : null}

      {/* Image Gallery */}
      {service.images?.length ? (
        <AnimatedSection className="py-20 md:py-32" animation="slide-up">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-center">Ukázky realizací</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {service.images.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-sm border border-white/10 bg-muted aspect-video backdrop-blur-md bg-white/5 flex items-center justify-center"
                    aria-label={`Ukázka ${i + 1}`}
                  >
                    <div className="text-center text-white/40">
                      <IconExternalLink size={24} className="mx-auto mb-2" />
                      <p className="text-sm">Ukázka {i + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </AnimatedSection>
      ) : null}

      {/* Related Projects */}
      {linked.length ? (
        <AnimatedSection className="py-20 md:py-32" animation="slide-up">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Související projekty</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {linked.map((p, idx) => (
                  <Card
                    key={`${p.title}-${idx}`}
                    className="backdrop-blur-md bg-white/5 border border-white/20"
                  >
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{p.desc}</p>
                      {p.url ? (
                        <Link
                          href={p.url}
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                        >
                          <IconExternalLink size={16} />
                          Zobrazit projekt
                        </Link>
                      ) : null}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </AnimatedSection>
      ) : null}

      {/* FAQ Section */}
      {service.faqs?.length ? (
        <AnimatedSection className="py-20 md:py-32" animation="slide-up">
          <Container className="px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text ">
                Často se ptáte
              </h2>
              <div className="space-y-6">
                {service.faqs.map((f, i) => (
                  <Card
                    key={i}
                    variant="glass"
                    className="slide-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-sm bg-gradient-to-br from-accent/30 to-accent/10 mt-1">
                          <IconCircleCheck size={20} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-3 text-lg">{f.q}</h4>
                          <p className="text-white/80 text-lg leading-relaxed">{f.a}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </AnimatedSection>
      ) : null}

      {/* Contact CTA */}
      <AnimatedSection className="py-20 md:py-32" animation="scale-in">
        <Container className="px-6">
          <ConsultationCTA />
        </Container>
      </AnimatedSection>
    </>
  );
}
