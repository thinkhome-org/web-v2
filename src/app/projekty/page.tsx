import { readValidatedArray, projectSchema, type Project } from '@/lib/yaml'
import { Section, Container } from '@/components/ui'
import ReferenceGrid from '@/components/reference-grid'

export const metadata = { title: 'Reference – ThinkHome' };

export default async function Page() {
  const projects = await readValidatedArray<Project>('projects.yaml', projectSchema)
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Reference</h1>
        <ReferenceGrid projects={projects} />
      </Container>
    </Section>
  );
}


