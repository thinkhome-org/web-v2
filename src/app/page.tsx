import ContactForm from "@/components/contact-form";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeServices } from "@/components/sections/home-services";
import { HomeProcess } from "@/components/sections/home-process";

export default function Home() {
  return (
    <main className="font-sans">
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <section id="kontakt" className="bg-[#0d0d0d] px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold">Kontaktujte nás</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Máte dotaz nebo potřebujete konzultaci? Vyplňte formulář – zpráva se otevře ve vašem e‑mailovém klientu.</p>
        <ContactForm />
      </section>
    </main>
  );
}

