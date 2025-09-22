import TeamTemplate from '@/components/team-template'
import { readValidatedArray, teamMemberSchema, type TeamMember } from '@/lib/yaml'

export async function generateStaticParams() {
  const team = await readValidatedArray<TeamMember>('team.yaml', teamMemberSchema)
  return team.map((p, idx) => ({ slug: (p as unknown as { slug?: string }).slug || `person-${idx}` }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <TeamTemplate params={{ slug }} />
}


