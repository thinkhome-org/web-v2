export const metadata = { title: 'Reference – ThinkHome' };

export default function Page() {
  return (
    <section className="container px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold">Reference</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[1,2,3,4].map((i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-muted p-5">
            <p className="text-sm text-white/70">„Skvělá spolupráce, rychlá reakce a profi přístup. Doporučujeme.“</p>
            <p className="mt-3 text-xs text-white/50">Klient {i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


