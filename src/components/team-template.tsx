import { notFound } from 'next/navigation'
import Link from 'next/link'
import { readValidatedArray, teamMemberSchema, type TeamMember, projectSchema, type Project, serviceSchema, type Service } from '@/lib/yaml'
import { Container, Card, AnimatedSection } from '@/components/ui'
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconArrowLeft, IconUser, IconBriefcase, IconCode } from '@tabler/icons-react'

export default async function TeamTemplate({ params }: { params: { slug: string } }) {
  const team = await readValidatedArray<TeamMember>('team.yaml', teamMemberSchema)
  const person = team.find((p, idx) => p.slug === params.slug || `person-${idx}` === params.slug)
  if (!person) return notFound()
  
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  const authored = projects.filter(p => p.authors?.includes(person.slug as string))
  
  const services = await readValidatedArray<Service>('services.yaml', serviceSchema)
  const relatedServices = services.filter(s => (person.services || []).includes((s as unknown as { slug?: string }).slug || ''))

  return (
    <>
      {/* Back Navigation */}
      <AnimatedSection className="px-6 py-8" animation="slide-in-left">
        <Container>
          <Link 
            href="/nas-tym"
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors font-medium group"
          >
            <IconArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Zpět na tým
          </Link>
        </Container>
      </AnimatedSection>

      {/* Profile Section */}
      <AnimatedSection className="px-6 py-12" animation="fade-in">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <Card variant="glass" className="p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 via-accent/20 to-accent/10 
                                  flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                    <span className="text-accent font-bold text-5xl tracking-wide">
                      {person.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {person.name}
                  </h1>
                  <p className="text-xl text-accent font-semibold">{person.role}</p>
                  
                  {person.bio && (
                    <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                      {person.bio}
                    </p>
                  )}

                  {/* Social Links */}
                  <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 
                                   border border-accent/40 rounded-lg transition-all duration-200 text-accent font-medium"
                      >
                        <IconMail size={18} />
                        <span className="hidden sm:inline">Email</span>
                      </a>
                    )}
                    {person.links?.linkedin && (
                      <a
                        href={person.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 
                                   border border-white/20 rounded-lg transition-all duration-200 text-white hover:text-accent"
                      >
                        <IconBrandLinkedin size={18} />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </a>
                    )}
                    {person.links?.github && (
                      <a
                        href={person.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 
                                   border border-white/20 rounded-lg transition-all duration-200 text-white hover:text-accent"
                      >
                        <IconBrandGithub size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            {/* Skills & Tags */}
            {person.tags?.length ? (
              <AnimatedSection animation="slide-up" className="mb-8">
                <Card variant="glass" className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <IconCode size={24} className="text-accent" />
                    <h2 className="text-xl font-semibold text-white">Expertiza</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {person.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ) : null}

            {/* Additional Content Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Projects */}
              {authored.length ? (
                <AnimatedSection animation="slide-up" className="stagger-1">
                  <Card variant="glass" className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <IconBriefcase size={24} className="text-accent" />
                      <h2 className="text-xl font-semibold text-white">Projekty</h2>
                    </div>
                    <div className="space-y-4">
                      {authored.map((project, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                          <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                          <p className="text-sm text-white/70 mb-3">{project.desc}</p>
                          <Link 
                            href={`/projekty/${project.slug || `project-${i}`}`}
                            className="inline-flex text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                          >
                            Více informací →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ) : null}

              {/* Services */}
              {relatedServices.length ? (
                <AnimatedSection animation="slide-up" className="stagger-2">
                  <Card variant="glass" className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <IconUser size={24} className="text-accent" />
                      <h2 className="text-xl font-semibold text-white">Služby</h2>
                    </div>
                    <div className="space-y-4">
                      {relatedServices.map((service, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                          <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                          <p className="text-sm text-white/70 mb-3">{service.desc}</p>
                          <Link 
                            href={`/sluzby/${(service as unknown as { slug?: string }).slug || `service-${i}`}`}
                            className="inline-flex text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                          >
                            Více informací →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ) : null}

              {/* Contact Card - if no projects or services */}
              {!authored.length && !relatedServices.length && (
                <AnimatedSection animation="scale-in" className="md:col-span-2">
                  <Card variant="glass" className="p-8 text-center">
                    <IconMail size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">Kontakt</h3>
                    <p className="text-white/70 mb-6">
                      Máte dotazy nebo byste chtěli spolupracovat? Neváhejte se ozvat!
                    </p>
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-white font-medium rounded-lg transition-colors"
                      >
                        <IconMail size={18} />
                        Napsat email
                      </a>
                    )}
                  </Card>
                </AnimatedSection>
              )}
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}


