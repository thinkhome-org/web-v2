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
          <span className="font-mono">+420 910 129 289</span>
          <a 
            href="tel:+420910129289"
            className="ml-2 px-3 py-1 text-sm bg-white/10 hover:bg-white/20 rounded transition-colors"
          >
            Zavolat
          </a>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}


