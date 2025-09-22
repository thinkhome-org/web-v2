export const metadata = { title: 'Služby – ThinkHome' };
export const dynamic = 'force-static';
export const revalidate = false;

// intentionally empty: detail služby se otevírají z jiných stránek

export default async function Page() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">Služby</h1>
        <p className="mt-6 text-white/70 max-w-2xl">Vyberte konkrétní službu z menu nebo z odkazů na jiných stránkách. Tento přehled je záměrně prázdný a slouží jako rozcestník.</p>
      </div>
    </section>
  );
}


