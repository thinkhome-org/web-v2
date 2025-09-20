export const metadata = { title: 'Služby – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

type Service = { title: string; desc: string };
async function getServices(): Promise<Service[]> {
  const { readValidatedArray, serviceSchema } = await import('@/lib/yaml');
  return readValidatedArray<Service>('services.yaml', serviceSchema);
}

export default async function Page() {
  const SERVICES = await getServices();
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">Služby</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-lg border border-white/10 bg-muted p-5">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


