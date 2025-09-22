'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { IconBriefcase, IconChevronRight } from '@tabler/icons-react'

interface ProjectItem {
  title: string
  desc: string
  slug?: string
  summary?: string
  tags?: string[]
}

export default function ReferenceGrid({ projects }: { projects: ProjectItem[] }) {
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags || []))).sort()
  const tagCounts: Record<string, number> = {}
  for (const t of allTags) tagCounts[t] = projects.filter(p => (p.tags || []).includes(t)).length

  const url = new URL(typeof window !== 'undefined' ? window.location.href : 'https://example.com')
  const activeTag = url.searchParams.get('tag') || ''
  const filtered = activeTag ? projects.filter(p => (p.tags || []).includes(activeTag)) : projects

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Link href="/reference" className={`px-3 py-1 rounded-md border border-white/10 text-sm hover:bg-white/5 ${activeTag ? '' : 'bg-white/10'}`}>Vše ({projects.length})</Link>
        {allTags.map((t) => (
          <Link key={t} href={`/reference?tag=${encodeURIComponent(t)}`} className={`px-3 py-1 rounded-md border border-white/10 text-sm hover:bg-white/5 ${activeTag === t ? 'bg-white/10' : ''}`}>{t} ({tagCounts[t] || 0})</Link>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => {
          const slug = p.slug || `project-${idx}`
          return (
            <Link key={slug} href={`/reference/${slug}`} className="block">
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
            </Link>
          )
        })}
      </div>
    </>
  )
}


