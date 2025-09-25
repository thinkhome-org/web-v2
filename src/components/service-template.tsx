import { notFound } from 'next/navigation'
import { readValidatedArray, serviceSchema, type Service, projectSchema, type Project } from '@/lib/yaml'
import { Container, Section, Card, CardHeader, CardContent, ConsultationCTA } from '@/components/ui'
import {
  IconTools, IconServer, IconDeviceDesktop, IconWorld,
  IconCloud, IconDatabase, IconDevices, IconCertificate,
  IconSchool, IconSearch, IconChevronLeft, IconExternalLink,
  IconCircleCheck, IconPhone, IconMail
} from '@tabler/icons-react'
import Link from 'next/link'

// Icon mapping for different service types
type IconComponent = typeof IconTools
const getServiceIcon = (slug: string) => {
  const iconMap: Record<string, IconComponent> = {
    'turn-key-it-management': IconServer,
    'repasovane-pc': IconDeviceDesktop,
    'webove-systemy': IconWorld,
    'backup-emaily': IconDatabase,
    'workspace-platformy': IconCloud,
    'infrastruktura': IconDevices,
    'licence-poradenstvi': IconCertificate,
    'skoleni': IconSchool,
    'bezpecnostni-audit': IconSearch,
  }
  return iconMap[slug] || IconTools
}

export default async function ServiceTemplate({ params }: { params: { slug: string } }) {
  const services = await readValidatedArray<Service>('services.yaml', serviceSchema)
  const service = services.find((s, idx) => s.slug === params.slug || `service-${idx}` === params.slug)
  if (!service) return notFound()
  
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  const linked = service.projects?.length ? projects.filter(p => service.projects?.includes(p.title)) : []
  const Icon = getServiceIcon(service.slug || '')
  
  return (
    <>
      {/* Header Section */}
      <Section className="px-6 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link 
              href="/sluzby" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors mb-8 group"
            >
              <IconChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Zpět na služby
            </Link>
            
            {/* Service Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-accent/20 border border-accent/30">
                <Icon size={40} className="text-accent" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-4">
                  {service.title}
                </h1>
                {service.intro ? (
                  <p className="text-xl text-white/80 leading-relaxed">
                    {service.intro}
                  </p>
                ) : (
                  <p className="text-xl text-white/80 leading-relaxed">
                    {service.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Steps */}
      {service.steps?.length ? (
        <Section className="px-6 pb-12">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                Jak postupujeme
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.steps.map((step, i) => (
                  <Card 
                    key={i} 
                    className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/8 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-accent font-bold text-sm">{i + 1}</span>
                        </div>
                        <h3 className="font-semibold text-white">Krok {i + 1}</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-white/80">{step}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Image Gallery */}
      {service.images?.length ? (
        <Section className="px-6 pb-12">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-center">Ukázky realizací</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {service.images.map((src, i) => (
                  <div 
                    key={i} 
                    className="rounded-xl border border-white/10 bg-muted aspect-video backdrop-blur-md bg-white/5 flex items-center justify-center"
                    aria-label={`Ukázka ${i+1}`}
                  >
                    <div className="text-center text-white/40">
                      <IconExternalLink size={24} className="mx-auto mb-2" />
                      <p className="text-sm">Ukázka {i+1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Related Projects */}
      {linked.length ? (
        <Section className="px-6 pb-12">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Související projekty</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {linked.map((p, idx) => (
                  <Card key={`${p.title}-${idx}`} className="backdrop-blur-md bg-white/5 border border-white/20">
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{p.desc}</p>
                      {p.url ? (
                        <Link href={p.url} className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
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
        </Section>
      ) : null}

      {/* FAQ Section */}
      {service.faqs?.length ? (
        <Section className="px-6 pb-12">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8 text-center">Často se ptáte</h2>
              <div className="space-y-4">
                {service.faqs.map((f, i) => (
                  <Card key={i} className="backdrop-blur-md bg-white/5 border border-white/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-accent/20 mt-1">
                          <IconCircleCheck size={16} className="text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{f.q}</h4>
                          <p className="text-white/80">{f.a}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Contact CTA */}
      <Section className="px-6 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="backdrop-blur-md bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Máte zájem o tuto službu?
                </h3>
                <p className="text-white/80 mb-6">
                  Spojte se s námi pro nezávaznou konzultaci a cenovou nabídku.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors"
                  >
                    <IconMail size={18} />
                    Nezávazná poptávka
                  </Link>
                  <a 
                    href="tel:+420910129289"
                    className="inline-flex items-center gap-2 px-8 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium rounded-lg transition-all"
                  >
                    <IconPhone size={18} />
                    +420 910 129 289
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}