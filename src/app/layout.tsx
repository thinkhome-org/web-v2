import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { ToastProvider } from "@/components/ui/toast-provider";
import { readYamlObject } from "@/lib/yaml";

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
  metadataBase: new URL('https://thinkhome.org'),
  title: {
    default: 'ThinkHome – Moderní IT bez starostí',
    template: '%s – ThinkHome',
  },
  description:
    'Komplexní IT služby pro SMB a domácnosti: správa IT, weby, cloud a bezpečnost.',
  openGraph: {
    title: 'ThinkHome – Moderní IT bez starostí',
    description: 'Komplexní IT služby pro SMB a domácnosti: správa IT, weby, cloud a bezpečnost.',
    url: 'https://thinkhome.org',
    siteName: 'ThinkHome',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThinkHome – Moderní IT bez starostí',
    description: 'Komplexní IT služby pro SMB a domácnosti: správa IT, weby, cloud a bezpečnost.',
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
    name: 'ThinkHome',
    url: 'https://thinkhome.org',
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
        </ToastProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
