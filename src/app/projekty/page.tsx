import { readValidatedArray, projectSchema, type Project } from '@/lib/yaml'
import { Card, CardContent, CardHeader, Container, Section, Button } from '@/components/ui'
import Link from 'next/link'

export const metadata = { title: 'Projekty – ThinkHome' };

export default async function Page() {
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Projekty</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <Card key={`${p.title}-${idx}`}>
              <CardHeader>
                <h2 className="text-lg font-medium">{p.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/80">{p.desc}</p>
                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
                    ))}
                  </div>
                ) : null}
                {p.url ? (
                  <Link href={p.url} className="inline-flex mt-4">
                    <Button variant="secondary" size="sm">Zobrazit</Button>
                  </Link>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}


