import { Icons } from '@/components/ui';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const FEATURES = [
  {
    icon: Icons.IconShieldCheck,
    title: "Bezpečnost na prvním místě",
    description: "Moderní zabezpečení, pravidelné zálohy a monitoring 24/7. Vaše data jsou v bezpečí.",
    highlight: "99.9% dostupnost"
  },
  {
    icon: Icons.IconBolt,
    title: "Rychlá reakce",
    description: "Kritické problémy řešíme do 2 hodin. Preventivní údržba minimalizuje výpadky.",
    highlight: "Do 2 hodin"
  },
  {
    icon: Icons.IconCurrencyDollar,
    title: "Transparentní ceny",
    description: "Žádné skryté poplatky. Jasná kalkulace s možností flexibilních balíčků.",
    highlight: "Od 2 500 Kč/měsíc"
  },
  {
    icon: Icons.IconChartBar,
    title: "Měřitelné výsledky",
    description: "Pravidelné reporty o výkonu a úsporách. Technologie, které skutečně pomáhají.",
    highlight: "Měsíční reporty"
  },
  {
    icon: Icons.IconArrowsMaximize,
    title: "Škálovatelnost",
    description: "Řešení, která rostou s vámi. Od startupu po střední firmu bez přerušení služeb.",
    highlight: "Bez omezení"
  },
  {
    icon: Icons.IconUserHeart,
    title: "Lidský přístup",
    description: "Srozumitelné vysvětlení, rychlé jednání a partnerský vztah. Jsme tu pro vás.",
    highlight: "Dedikovaný tým"
  }
];

export function FeaturesSection() {
  return (
    <Section className="bg-white">
      <Container className="px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proč si vybrat ThinkHome?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kombinujeme technickou expertizu s lidským přístupem. 
            Vaše IT starosti se stávají naší prioritou.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <feature.icon size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <div className="text-sm font-medium text-accent mt-1">
                      {feature.highlight}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
