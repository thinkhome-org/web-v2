import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="font-sans">
      <Section className="bg-black">
        <Container className="px-6 py-20 md:py-28">
          <Image src="/logo.svg" alt="ThinkHome" width={120} height={28} priority />
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">Moderní IT bez starostí</h1>
          <p className="mt-6 max-w-2xl text-white/80">Komplexní správa IT, weby, cloud a bezpečnost pro malé firmy a domácnosti. Rychle, srozumitelně a spolehlivě.</p>
          <div className="mt-8 flex gap-3">
            <Link href="#kontakt" className="focus-ring rounded-md bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-[#a50f19] transition-colors">Kontaktovat</Link>
            <Link href="#sluzby" className="focus-ring rounded-md border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/5 transition-colors">Naše služby</Link>
          </div>
        </Container>
      </Section>

      <Section id="sluzby" className="bg-[#0d0d0d]">
        <Container className="px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Služby</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Turn‑key IT management",
                desc: "24/7 dohled, správa zařízení a síťové infrastruktury",
              },
              { title: "Repasované PC", desc: "Výkup, repas a instalace spolehlivé techniky" },
              { title: "Webové systémy", desc: "Next.js a WordPress – od návrhu po provoz" },
              { title: "Backup & e‑maily", desc: "Bezpečné zálohy, firemní e‑mail, privátní cloud" },
              { title: "Google/M365/Zoho", desc: "Nasazení, správa, migrace a školení" },
              { title: "Infrastruktura", desc: "WiFi (UniFi), kamery, tiskárny, NAS" },
              { title: "Licence & poradenství", desc: "Optimalizace licencí a nákladů" },
              { title: "Školení", desc: "Efektivita práce a kyberbezpečnost pro uživatele" },
              { title: "Bezpečnostní audit", desc: "Audit a penetrační testy s návrhem opatření" },
            ].map((card) => (
              <div key={card.title} className="rounded-lg border border-white/10 bg-muted p-5 hover:border-white/20 transition-colors">
                <h3 className="text-lg font-medium">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="proces" className="bg-black">
        <Container className="px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Postup spolupráce</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3 text-white/80">
            {[
              "Úvodní konzultace zdarma",
              "Detailní audit a návrh řešení",
              "Implementace, školení a dlouhodobá podpora",
            ].map((step, idx) => (
              <li key={idx} className="rounded-md border border-white/10 bg-muted p-5">
                <span className="text-accent font-mono">{String(idx + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="kontakt" className="bg-[#0d0d0d]">
        <Container className="px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Kontaktujte nás</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Máte dotaz nebo potřebujete konzultaci? Vyplňte formulář – zpráva se otevře ve vašem e‑mailovém klientu.</p>
          <ContactForm />
        </Container>
      </Section>
    </main>
  );
}

