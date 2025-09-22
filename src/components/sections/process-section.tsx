import { Icons } from '@/components/ui';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

const STEPS = [
  {
    number: "01",
    title: "Konzultace zdarma",
    description: "Probereme vaše potřeby a současný stav IT infrastruktury. Zjistíme, kde jsou příležitosti k vylepšení.",
    icon: Icons.IconMessageCircle,
    color: "bg-blue-500"
  },
  {
    number: "02", 
    title: "Audit a návrh",
    description: "Provedeme detailní audit a připravíme návrh řešení na míru s jasnou kalkulací nákladů.",
    icon: Icons.IconSearch,
    color: "bg-green-500"
  },
  {
    number: "03",
    title: "Implementace",
    description: "Postupně implementujeme řešení s minimálním dopadem na vaše operace. Školíme váš tým.",
    icon: Icons.IconSettings,
    color: "bg-purple-500"
  },
  {
    number: "04",
    title: "Dlouhodobá podpora",
    description: "Poskytujeme kontinuální podporu, monitoring a pravidelné aktualizace pro optimální výkon.",
    icon: Icons.IconHeartHandshake,
    color: "bg-accent"
  }
];

export function ProcessSection() {
  return (
    <Section className="bg-gray-50">
      <Container className="px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jak spolupráce probíhá
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jednoduchý proces od první konzultace po dlouhodobou spolupráci. 
            Všechno máme připravené tak, aby to pro vás bylo co nejjednodušší.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center group">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} className="text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl font-bold text-gray-300 mb-2 group-hover:text-accent transition-colors">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Máte otázky k procesu nebo chcete začít hned teď?
          </p>
          <a 
            href="#kontakt" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Icons.IconMessageCircle size={20} />
            Začít konzultací zdarma
          </a>
        </div>
      </Container>
    </Section>
  );
}
