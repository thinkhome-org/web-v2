import { readValidatedArray, projectSchema, type Project } from '@/lib/yaml'
import { Section, Container, Card, CardHeader, CardContent } from '@/components/ui'

export const metadata = { title: 'Projekty – ThinkHome' };

export default async function Page() {
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Projekty</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => {
            const slug = p.slug || `project-${idx}`
            return (
              <a key={slug} href={`/projekty/${slug}`} className="block">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">{p.summary || p.desc}</p>
                    {p.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </Container>
    </Section>
  );
}


