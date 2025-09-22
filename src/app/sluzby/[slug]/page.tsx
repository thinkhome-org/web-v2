import ServiceTemplate from '@/components/service-template'
import { readValidatedArray, serviceSchema, type Service } from '@/lib/yaml'

export async function generateStaticParams() {
  const services = await readValidatedArray<Service>('services.yaml', serviceSchema)
  return services.map((s, idx) => ({ slug: (s as unknown as { slug?: string }).slug || `service-${idx}` }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ServiceTemplate params={{ slug }} />
}


