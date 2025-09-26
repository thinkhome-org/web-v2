import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { ToastProvider } from "@/components/ui/toast-provider";
import CookieConsent from "@/components/cookie-consent";
import AnalyticsLoader from "@/components/analytics-loader";
import { readYamlObject } from "@/lib/yaml";
import { SITE_CONFIG } from "@/config/site";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: '%s – ThinkHome',
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  manifest: '/manifest.webmanifest',
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await readYamlObject<{ email?: string; phone?: string }>("contacts.yaml");
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    contactPoint: contacts?.email || contacts?.phone ? [{
      '@type': 'ContactPoint',
      email: contacts?.email,
      telephone: contacts?.phone,
      contactType: 'customer support',
      availableLanguage: ['cs'],
    }] : undefined,
  };
  return (
    <html lang="cs">
      <body className={`${plexSans.variable} ${plexMono.variable} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <a href="#main" className="skip-link">Přeskočit na obsah</a>
        <ToastProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <CookieConsent />
          <AnalyticsLoader />
        </ToastProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
