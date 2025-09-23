import { readValidatedData } from '@/lib/yaml'
import { teamDataSchema } from '@/lib/yaml'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const teamData = await readValidatedData('team.yaml', teamDataSchema)
  return teamData.team.map((member: any) => ({
    slug: member.id
  }))
}

export default async function TeamMemberPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const teamData = await readValidatedData('team.yaml', teamDataSchema)
  const member = teamData.team.find((m: any) => m.id === slug)
  
  if (!member) {
    notFound()
  }
  
  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
      <p>{member.bio}</p>
    </div>
  )
}