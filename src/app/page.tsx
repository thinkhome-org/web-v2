import dynamic from "next/dynamic";
import ContactForm from "@/components/contact-form";
const HomeHero = dynamic(() => import("@/components/sections/home-hero").then(m => m.HomeHero), { ssr: true });
const HomeServices = dynamic(() => import("@/components/sections/home-services").then(m => m.HomeServices), { ssr: true });
const HomeProcess = dynamic(() => import("@/components/sections/home-process").then(m => m.HomeProcess), { ssr: true });

export default function Home() {
  return (
    <main className="font-sans">
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <section id="kontakt" className="bg-[#0d0d0d] px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Kontaktujte nás</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Máte dotaz nebo potřebujete konzultaci? Vyplňte formulář – doručíme ho na náš kanál a ozveme se co nejdřív.</p>
        <ContactForm />
      </section>
    </main>
  );
}

