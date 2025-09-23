import ProjectTemplate from '@/components/project-template'
import { readValidatedArray, projectSchema, type Project } from '@/lib/yaml'

export async function generateStaticParams() {
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  return projects.map((p, idx) => ({ slug: p.slug || `project-${idx}` }))
}

export const dynamicParams = false

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProjectTemplate params={{ slug }} />
}


