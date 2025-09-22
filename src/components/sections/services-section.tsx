import { Icons } from '@/components/ui/icons';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const SERVICES = [
  {
    icon: Icons.IconTools,
    title: "IT Management",
    description: "Kompletní správa IT infrastruktury, monitoring a preventivní údržba.",
    features: ["24/7 monitoring", "Proaktivní údržba", "Helpdesk podpora"],
    price: "Od 2 500 Kč/měsíc"
  },
  {
    icon: Icons.IconWorldWww,
    title: "Webové řešení",
    description: "Moderní weby na Next.js a WordPress s důrazem na výkon a bezpečnost.",
    features: ["Responsive design", "SEO optimalizace", "Rychlé načítání"],
    price: "Od 15 000 Kč"
  },
  {
    icon: Icons.IconCloud,
    title: "Cloud & Backup",
    description: "Bezpečné zálohy, firemní e-maily a cloudová řešení na míru.",
    features: ["Automatické zálohy", "Firemní e-mail", "Privátní cloud"],
    price: "Od 1 500 Kč/měsíc"
  },
  {
    icon: Icons.IconShieldLock,
    title: "Bezpečnost",
    description: "Penetrační testy, bezpečnostní audity a implementace ochranných opatření.",
    features: ["Bezpečnostní audit", "Penetrační testy", "Školení uživatelů"],
    price: "Od 5 000 Kč"
  },
  {
    icon: Icons.IconDeviceLaptop,
    title: "Hardware",
    description: "Repasované PC a notebooky, sítě, WiFi a kompletní infrastruktura.",
    features: ["Repasované PC", "UniFi sítě", "NAS řešení"],
    price: "Na dotaz"
  },
  {
    icon: Icons.IconSchool,
    title: "Školení",
    description: "Efektivita práce, kyberbezpečnost a školení na nové technologie.",
    features: ["Kyberbezpečnost", "Efektivita práce", "Nové technologie"],
    price: "Od 2 000 Kč/den"
  }
];

export function ServicesSection() {
  return (
    <Section id="sluzby" className="bg-gray-50">
      <Container className="px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naše služby
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komplexní IT řešení pro malé a střední firmy. 
            Od správy infrastruktury po moderní weby.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-lg font-semibold text-accent mt-1">
                      {service.price}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icons.IconCheck size={16} className="text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Potřebujete něco specifického? Rádi vám připravíme nabídku na míru.
          </p>
          <a 
            href="#kontakt" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Icons.IconMail size={20} />
            Získat nabídku zdarma
          </a>
        </div>
      </Container>
    </Section>
  );
}
