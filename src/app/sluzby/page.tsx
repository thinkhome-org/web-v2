export const metadata = { title: 'Služby – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

// intentionally empty: detail služby se otevírají z jiných stránek

import { readValidatedArray, serviceSchema, type Service } from '@/lib/yaml'
import { Section, Container, Card, CardHeader, CardContent } from '@/components/ui'

export default async function Page() {
  const services = await readValidatedArray<Service>('services.yaml', serviceSchema)
  return (
    <Section>
      <Container className="px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Služby</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const slug = (s as unknown as { slug?: string }).slug || `service-${idx}`
            return (
              <a key={slug} href={`/sluzby/${slug}`} className="block">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-medium">{s.title}</h3>
                  </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/80">{s.desc}</p>
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


