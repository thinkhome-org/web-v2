import ContactForm from "@/components/contact-form";
import {
  Container,
  AnimatedSection,
  Card,
  CardHeader,
  CardContent,
  HeroSection,
} from "@/components/ui";
import { IconMail, IconPhone, IconMapPin, IconClock, IconMessageCircle } from "@tabler/icons-react";

export const metadata = { title: "Kontakt – ThinkHome" };

export default async function Page() {
  return (
    <>
      <HeroSection fullHeight={false} className="py-16 md:py-20 lg:py-32">
        <Container className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent fade-in">
              Kontakt
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto slide-up stagger-1 px-2">
              Ozvěte se nám – obvykle reagujeme do 24 hodin. Kritické incidenty řešíme obratem.
            </p>
          </div>
        </Container>
      </HeroSection>

      <AnimatedSection className="py-16 md:py-20 lg:py-32" animation="slide-up">
        <Container className="px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
              <Card variant="glass" className="group slide-up">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-sm bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <IconPhone size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Telefon</h3>
                      <p className="text-sm text-white/70">Přímé spojení</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-lg text-white mb-3">+420 910 129 289</p>
                  <a
                    href="tel:+420910129289"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-accent/20 hover:bg-accent/30 rounded-sm transition-colors border border-accent/30"
                  >
                    <IconPhone size={16} />
                    Zavolat nyní
                  </a>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-sm bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <IconMail size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">E-mail</h3>
                      <p className="text-sm text-white/70">Rychlá odpověď</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-3">info@thinkhome.org</p>
                  <a
                    href="mailto:info@thinkhome.org"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-accent/20 hover:bg-accent/30 rounded-sm transition-colors border border-accent/30"
                  >
                    <IconMail size={16} />
                    Napsat e-mail
                  </a>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-sm bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <IconClock size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Dostupnost</h3>
                      <p className="text-sm text-white/70">Jsme tu pro vás</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span className="text-white/70">Po-Pá:</span>
                      <span className="text-white">8:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-white/70">Víkendy:</span>
                      <span className="text-white">Na zavolání</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-white/70">Kritické:</span>
                      <span className="text-accent font-medium">24/7</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <IconMessageCircle size={24} className="text-accent" />
                    Napište nám
                  </h2>
                  <p className="text-white/80">
                    Vyplňte formulář níže a my se vám ozveme do 24 hodin. U kritických požadavků
                    reagujeme do 2 hodin.
                  </p>
                </div>
                <ContactForm />
              </div>

              <div className="space-y-6">
                <a href="https://www.google.com/maps/place/Ryt%C3%AD%C5%99ova+777%2F3,+143+00+Praha+12-Kam%C3%BDk/@50.0151201,14.4177065,20.26z/data=!4m6!3m5!1s0x470b96b3af8207f9:0xf8831db3abe7e9c!8m2!3d50.0152274!4d14.4175731!16s%2Fg%2F11c2ftv510?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D">
                  <Card className="backdrop-blur-md bg-white/5 border border-white/20">
                    <CardHeader>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <IconMapPin size={20} className="text-accent" />
                        Kde nás najdete
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-white/80">
                          <strong className="text-white">Adresa:</strong>
                          <br />
                          Rytířova 777/3
                          <br />
                          Praha 12, 143 00
                        </p>
                        <p className="text-white/70">
                          Pracujeme převážně vzdáleně a na místě u klientů. Osobní schůzky
                          domlouváme individuálně.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <Card className="backdrop-blur-md bg-white/5 border border-white/20">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Co potřebujeme vědět</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <p className="text-white/80">Jaký máte aktuální problém nebo požadavek</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <p className="text-white/80">Velikost vaší firmy a současné IT řešení</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <p className="text-white/80">Předpokládaný rozpočet nebo časový rámec</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <p className="text-white/80">Urgence (kritické vs. plánované)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-accent/10 border border-accent/30">
                  <CardContent className="pt-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-accent/20">
                        <IconClock size={20} className="text-accent" />
                      </div>
                      <h4 className="font-medium text-white">Rychlá reakce zaručena</h4>
                    </div>
                    <p className="text-sm text-white/80">
                      Kritické situace řešíme do <strong className="text-accent">2 hodin</strong>.
                      Běžné dotazy zodpovídáme do <strong className="text-accent">24 hodin</strong>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
