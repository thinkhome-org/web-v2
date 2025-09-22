import dynamic from "next/dynamic";
import ContactForm from "@/components/contact-form";
import { Section, Container } from "@/components/ui";

// Dynamic imports for better performance
const HeroSection = dynamic(() => import("@/components/sections/hero-section").then(m => m.HeroSection), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/sections/features-section").then(m => m.FeaturesSection), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(m => m.ServicesSection), { ssr: true });
const ProcessSection = dynamic(() => import("@/components/sections/process-section").then(m => m.ProcessSection), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section").then(m => m.TestimonialsSection), { ssr: true });
const CtaSection = dynamic(() => import("@/components/sections/cta-section").then(m => m.CtaSection), { ssr: true });

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Section */}
      <section id="kontakt" className="bg-[#0d0d0d] px-4 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kontaktujte nás
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Máte dotaz nebo chcete nezávaznou konzultaci? 
              Napište nám – ozveme se co nejdřív.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}

