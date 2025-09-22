import { readValidatedArray, projectSchema, type Project } from '@/lib/yaml'
import { Section, Container, Card, CardHeader, CardContent } from '@/components/ui'
import { IconBriefcase, IconChevronRight } from '@tabler/icons-react'

export const metadata = { title: 'Reference – ThinkHome' };

export default async function Page({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  const { tag } = await searchParams
  const activeTag = tag || ''
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags || []))).sort()
  const totalCount = projects.length
  const tagCounts: Record<string, number> = {}
  for (const t of allTags) {
    tagCounts[t] = projects.filter(p => (p.tags || []).includes(t)).length
  }
  const filtered = activeTag ? projects.filter(p => (p.tags || []).includes(activeTag)) : projects
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Reference</h1>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <a href="/reference" className={`px-3 py-1 rounded-md border border-white/10 text-sm hover:bg-white/5 ${activeTag ? '' : 'bg-white/10'}`}>Vše ({totalCount})</a>
          {allTags.map((t) => (
            <a key={t} href={`/reference?tag=${encodeURIComponent(t)}`} className={`px-3 py-1 rounded-md border border-white/10 text-sm hover:bg-white/5 ${activeTag === t ? 'bg-white/10' : ''}`}>{t} ({tagCounts[t] || 0})</a>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => {
            const slug = p.slug || `project-${idx}`
            return (
              <a key={slug} href={`/projekty/${slug}`} className="block">
                <Card className="p-5 hover:bg-white/5 transition-colors hover-glow border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                      <IconBriefcase size={16} className="text-white/80" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium truncate">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/70 line-clamp-2">{p.summary || p.desc}</p>
                      {p.tags?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-3 inline-flex items-center gap-2 text-xs text-white/70">
                        <IconChevronRight size={14} /> Detail reference
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>
      </Container>
    </Section>
  );
}


