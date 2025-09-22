import ContactForm from '@/components/contact-form';
import { Container } from '@/components/ui/container';

export const metadata = { title: 'Kontakt – ThinkHome' };

export default async function Page() {
  return (
    <section className="px-6 py-16 md:py-24 bg-black">
      <Container>
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
        <p className="mt-4 text-white/80 max-w-2xl">Ozvěte se nám – obvykle reagujeme do 24 hodin. Kritické incidenty řešíme obratem.</p>

        <div className="mt-6 flex items-center gap-3 text-white">
          <button onClick={() => navigator.clipboard.writeText('+420 910 129 289')} className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1 text-sm hover:bg-white/5 focus-ring">
            <span className="font-mono">+420 910 129 289</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="1.5"/><rect x="8" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
          </button>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}


