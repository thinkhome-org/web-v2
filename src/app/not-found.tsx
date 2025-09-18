import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container px-6 py-24 text-center">
      <h1 className="text-5xl font-semibold">404</h1>
      <p className="mt-3 text-white/70">Stránka nebyla nalezena.</p>
      <div className="mt-6">
        <Link href="/" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-[#a50f19]">Zpět na úvod</Link>
      </div>
    </section>
  );
}


