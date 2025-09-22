import { notFound } from 'next/navigation'
import { readValidatedArray, teamMemberSchema, type TeamMember, projectSchema, type Project, serviceSchema, type Service } from '@/lib/yaml'
import { Container, Section, Card, CardHeader, CardContent } from '@/components/ui'

export default async function TeamTemplate({ params }: { params: { slug: string } }) {
  const team = await readValidatedArray<TeamMember>('team.yaml', teamMemberSchema)
  const person = team.find((p, idx) => p.slug === params.slug || `person-${idx}` === params.slug)
  if (!person) return notFound()
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  const authored = projects.filter(p => p.authors?.includes(person.slug as string))
  const services = await readValidatedArray<Service>('services.yaml', serviceSchema)
  const relatedServices = services.filter(s => (person.services || []).includes((s as unknown as { slug?: string }).slug || ''))
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">{person.name}</h1>
        <p className="mt-2 text-white/70">{person.role}</p>
        {person.bio && <p className="mt-4 text-white/80 max-w-3xl">{person.bio}</p>}
        {person.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {person.tags.map((t, i) => (
              <span key={i} className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
            ))}
          </div>
        ) : null}
        {person.images?.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {person.images.map((src, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-muted aspect-video" aria-label={`Obrázek ${i+1}`}></div>
            ))}
          </div>
        ) : null}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {person.email ? (
            <Card>
              <CardHeader>
                <h3 className="text-lg font-medium">Kontakt</h3>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${person.email}`} className="underline">{person.email}</a>
              </CardContent>
            </Card>
          ) : null}
          {person.links ? (
            <Card>
              <CardHeader>
                <h3 className="text-lg font-medium">Odkazy</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  {person.links.linkedin && <a className="underline" href={person.links.linkedin}>LinkedIn</a>}
                  {person.links.github && <a className="underline" href={person.links.github}>GitHub</a>}
                </div>
              </CardContent>
            </Card>
          ) : null}
        </div>
        {authored.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Projekty</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {authored.map((p, i) => (
                <Card key={i}>
                  <CardHeader>
                    <h3 className="text-base font-medium">{p.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">{p.desc}</p>
                    <a className="inline-flex mt-4 underline" href={`/projekty/${p.slug || `project-${i}`}`}>Detail projektu</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
        {relatedServices.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Související služby</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {relatedServices.map((s, i) => (
                <Card key={i}>
                  <CardHeader>
                    <h3 className="text-base font-medium">{s.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">{s.desc}</p>
                    <a className="inline-flex mt-4 underline" href={`/sluzby/${(s as unknown as { slug?: string }).slug || `service-${i}`}`}>Detail služby</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </Section>
  )
}


