import ContactForm from '@/components/contact-form';
import Image from 'next/image'
import Link from 'next/link'
import { Container, AnimatedSection, Card, CardHeader, CardContent, HeroSection } from '@/components/ui';
import { IconMail, IconPhone, IconMapPin, IconClock, IconMessageCircle } from '@tabler/icons-react';
import { NAV_ITEMS } from '@/config/navigation'
import { readValidatedObject, officialSchema, type Official } from '@/lib/yaml'

export const metadata = { title: 'Kontakt – ThinkHome' };

export default async function Page() {
  const official = await readValidatedObject<Official>('official.yaml', officialSchema)
  return (
    <>
      <HeroSection fullHeight={false} className="py-16 md:py-20 lg:py-32">
        <Container className="px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="slide-up">
              <Image
                src={official?.logo ?? '/logo.svg'}
                alt={official?.title ?? 'ThinkHome'}
                width={220}
                height={52}
                className="mx-auto w-40 h-auto md:w-48 lg:w-56"
                priority
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto slide-up stagger-1 px-2">
              Ozvěte se nám – obvykle reagujeme do 24 hodin. Kritické incidenty řešíme obratem.
            </p>
            <nav className="slide-up stagger-2 glass-block rounded-2xl p-4 md:p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                      {Icon && <Icon size={20} className="text-accent" />}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white text-center">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
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
                    <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
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
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-accent/20 hover:bg-accent/30 rounded-lg transition-colors border border-accent/30"
                  >
                    <IconPhone size={16} />
                    Zavolat nyní
                  </a>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
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
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-accent/20 hover:bg-accent/30 rounded-lg transition-colors border border-accent/30"
                  >
                    <IconMail size={16} />
                    Napsat e-mail
                  </a>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
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
                    Vyplňte formulář níže a my se vám ozveme do 24 hodin. 
                    U kritických požadavků reagujeme do 2 hodin.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
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
                        <strong className="text-white">Adresa:</strong><br />
                        Rytířova 777/3<br />
                        Praha 12, 143 00
                      </p>
                      <p className="text-white/70">
                        Pracujeme převážně vzdáleně a na místě u klientů. 
                        Osobní schůzky domlouváme individuálně.
                      </p>
                    </div>
                  </CardContent>
                </Card>

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