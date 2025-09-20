import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/ui';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function HomeHero() {
  return (
    <Section className="bg-black">
      <Container className="px-6 py-20 md:py-28">
        <Image src="/logo.svg" alt="ThinkHome" width={120} height={28} priority />
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">Moderní IT bez starostí</h1>
        <p className="mt-6 max-w-2xl text-white/80">Komplexní správa IT, weby, cloud a bezpečnost pro malé firmy a domácnosti. Rychle, srozumitelně a spolehlivě.</p>
        <div className="mt-8 flex gap-3">
          <Link href="#kontakt" className="focus-ring hover-glow transition-shadow rounded-md bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-[#a50f19] transition-colors inline-flex items-center gap-2">
            <Icons.IconMail size={16} />
            Kontaktovat
          </Link>
          <Link href="#sluzby" className="focus-ring hover-glow transition-shadow rounded-md border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/5 transition-colors inline-flex items-center gap-2">
            <Icons.IconTools size={16} />
            Naše služby
          </Link>
        </div>
      </Container>
    </Section>
  );
}


