import { readValidatedArray, teamMemberSchema } from '@/lib/yaml'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const team = await readValidatedArray('team.yaml', teamMemberSchema)
  return team.map((member) => ({
    slug: member.slug || member.name.toLowerCase().replace(/\s+/g, '-')
  }))
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const team = await readValidatedArray('team.yaml', teamMemberSchema)
  const member = team.find((m) => (m.slug || m.name.toLowerCase().replace(/\s+/g, '-')) === slug)
  
  if (!member) {
    notFound()
  }
  
  return (
    <div className="px-6 py-16 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold">{member.name}</h1>
        <p className="mt-2 text-white/70 text-lg">{member.role}</p>
        {member.bio && <p className="mt-6 text-white/80">{member.bio}</p>}
      </div>
    </div>
  )
}