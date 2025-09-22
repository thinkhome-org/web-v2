import * as Icons from '@tabler/icons-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <Section className="bg-gradient-to-r from-accent to-accent/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <Container className="relative px-4 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Připraveni zbavit se IT starostí?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Získejte nezávaznou konzultaci zdarma a zjistěte, jak můžeme pomoci 
            vašemu byznysu růst bez technických překážek.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#kontakt" className="w-full sm:w-auto">
              <Button size="md" className="w-full bg-white text-accent hover:bg-white/90 px-8 py-4 text-base font-semibold" leftIcon={<Icons.IconMail size={20} />}>
                Získat konzultaci zdarma
              </Button>
            </a>
            <a href="tel:+420123456789" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" className="w-full border-white/30 text-white hover:bg-white/10 px-8 py-4 text-base" leftIcon={<Icons.IconPhone size={20} />}>
                Zavolat hned
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Icons.IconCheck size={20} className="text-white" />
              <span className="text-sm">Konzultace zdarma</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Icons.IconShieldCheck size={20} className="text-white" />
              <span className="text-sm">Bez závazků</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Icons.IconClock size={20} className="text-white" />
              <span className="text-sm">Odpověď do 24h</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
