import { notFound } from 'next/navigation'
import { readValidatedArray, projectSchema, type Project } from '@/lib/yaml'
import { Container, Section, Button } from '@/components/ui'
import Link from 'next/link'

export default async function ProjectTemplate({ params }: { params: { slug: string } }) {
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  const project = projects.find((p, idx) => p.slug === params.slug || `project-${idx}` === params.slug)
  if (!project) return notFound()
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
        {project.summary && <p className="mt-4 text-white/80 max-w-3xl">{project.summary}</p>}
        <div className="mt-8 rounded-lg border border-white/10 bg-muted p-5">
          <p className="text-sm text-white/80">{project.desc}</p>
          {project.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
              ))}
            </div>
          ) : null}
          {project.url ? (
            <Link href={project.url} className="inline-flex mt-4">
              <Button variant="secondary" size="sm">Zobrazit web</Button>
            </Link>
          ) : null}
        </div>
        {project.images?.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.images.map((src, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-muted aspect-video" aria-label={`Obrázek ${i+1}`}></div>
            ))}
          </div>
        ) : null}
        {project.faqs?.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Často se ptáte</h2>
            <div className="mt-4 grid gap-3">
              {project.faqs.map((f, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-muted p-4">
                  <p className="font-medium">{f.q}</p>
                  <p className="mt-1 text-sm text-white/80">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </Section>
  )
}


