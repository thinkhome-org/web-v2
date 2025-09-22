import { notFound } from 'next/navigation'
import { readValidatedArray, serviceSchema, type Service, projectSchema, type Project } from '@/lib/yaml'
import { Container, Section, Card, CardHeader, CardContent, Button } from '@/components/ui'
import Link from 'next/link'

export default async function ServiceTemplate({ params }: { params: { slug: string } }) {
  const services = await readValidatedArray<Service>('services.yaml', serviceSchema)
  const service = services.find((s, idx) => s.slug === params.slug || `service-${idx}` === params.slug)
  if (!service) return notFound()
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  const linked = service.projects?.length ? projects.filter(p => service.projects?.includes(p.title)) : []
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">{service.title}</h1>
        {service.intro && <p className="mt-4 text-white/80 max-w-3xl">{service.intro}</p>}
        {service.images?.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.images.map((src, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-muted aspect-video" aria-label={`Obrázek ${i+1}`}></div>
            ))}
          </div>
        ) : null}
        {service.steps?.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.steps.map((step, i) => (
              <Card key={i}>
                <CardHeader>
                  <h3 className="text-lg font-medium">Krok {i + 1}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : null}
        {linked.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Související projekty</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {linked.map((p, idx) => (
                <Card key={`${p.title}-${idx}`}>
                  <CardHeader>
                    <h3 className="text-base font-medium">{p.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">{p.desc}</p>
                    {p.url ? (
                      <Link href={p.url} className="inline-flex mt-4">
                        <Button size="sm" variant="secondary">Detail</Button>
                      </Link>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
        {service.faqs?.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Často se ptáte</h2>
            <div className="mt-4 grid gap-3">
              {service.faqs.map((f, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-muted p-4">
                  <p className="font-medium">{f.q}</p>
                  <p className="mt-1 text-sm text-white/80">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div className="mt-12">
          <Link href="/kontakt" className="inline-flex">
            <Button>Chci nezávaznou konzultaci</Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}


