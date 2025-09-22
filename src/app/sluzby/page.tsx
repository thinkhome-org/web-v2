export const metadata = { title: 'Služby – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

// intentionally empty: detail služby se otevírají z jiných stránek

import { readValidatedArray, serviceSchema, type Service } from '@/lib/yaml'
import { Section, Container, Card } from '@/components/ui'
import { IconChevronRight, IconTools } from '@tabler/icons-react'

export default async function Page() {
  const services = await readValidatedArray<Service>('services.yaml', serviceSchema)
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Služby</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const slug = (s as unknown as { slug?: string }).slug || `service-${idx}`
            return (
              <a key={slug} href={`/sluzby/${slug}`} className="block">
                <Card className="p-5 hover:bg-white/5 transition-colors hover-glow border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                      <IconTools size={16} className="text-white/80" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium truncate">{s.title}</h3>
                      <p className="mt-1 text-sm text-white/70 line-clamp-2">{s.desc}</p>
                      <div className="mt-3 inline-flex items-center gap-2 text-xs text-white/70">
                        <IconChevronRight size={14} /> Detail služby
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


