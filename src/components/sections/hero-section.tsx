import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <Section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <Container className="relative px-4 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Icons.IconSparkles size={16} />
            Moderní IT řešení pro SMB
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            IT bez starostí.
            <span className="block text-accent">Rychle. Spolehlivě.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Komplexní správa IT, moderní weby a cloudová řešení pro malé firmy. 
            Zbavte se technických starostí a zaměřte se na růst byznysu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="#kontakt" className="w-full sm:w-auto">
              <Button size="md" className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 text-base font-semibold" leftIcon={<Icons.IconMail size={20} />}>
                Získat nabídku zdarma
              </Button>
            </Link>
            <Link href="#sluzby" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" className="w-full border-white/20 text-white hover:bg-white/5 px-8 py-4 text-base" leftIcon={<Icons.IconPlayerPlay size={20} />}>
                Zobrazit služby
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-white/60">Podpora</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-white/60">Spokojených klientů</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">99%</div>
              <div className="text-sm text-white/60">Dostupnost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">2h</div>
              <div className="text-sm text-white/60">Reakční doba</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
