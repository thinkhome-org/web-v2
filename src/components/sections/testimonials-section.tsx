import { Icons } from '@/components/ui/icons';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const TESTIMONIALS = [
  {
    name: "Petr Novák",
    company: "TechStart s.r.o.",
    role: "Ředitel",
    content: "ThinkHome nám ušetřil desítky hodin týdně. Jejich proaktivní přístup k IT správě je neocenitelný. Konečně se můžeme soustředit na byznys místo řešení technických problémů.",
    rating: 5
  },
  {
    name: "Marie Svobodová",
    company: "Design Studio",
    role: "Majitelka",
    content: "Profesionální přístup a rychlé řešení problémů. Náš web funguje bezchybně a zákazníci si pochvalují rychlost načítání. Doporučuji všem malým firmám.",
    rating: 5
  },
  {
    name: "Tomáš Dvořák",
    company: "Konzultační firma",
    role: "IT Manager",
    content: "Migrace na cloud proběhla hladce a bez výpadků. ThinkHome nám pomohl optimalizovat náklady a zvýšit bezpečnost. Skvělá komunikace a lidský přístup.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <Container className="px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Co říkají naši klienti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Spokojenost klientů je naší prioritou. 
            Podívejte se, co o nás říkají.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icons.IconStar key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icons.IconUser size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-gray-600">Spokojených klientů</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-gray-600">Dostupnost služeb</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2h</div>
            <div className="text-gray-600">Průměrná reakční doba</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5 let</div>
            <div className="text-gray-600">Zkušeností na trhu</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
