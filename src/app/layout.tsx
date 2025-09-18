import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

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
  metadataBase: new URL('http://localhost:3003'),
  title: "ThinkHome – Moderní IT bez starostí",
  description:
    "Komplexní IT služby pro SMB a domácnosti: správa IT, weby, cloud a bezpečnost.",
  openGraph: {
    title: 'ThinkHome – Moderní IT bez starostí',
    description: 'Komplexní IT služby pro SMB a domácnosti: správa IT, weby, cloud a bezpečnost.',
    url: 'http://localhost:3003',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThinkHome – Moderní IT bez starostí',
    description: 'Komplexní IT služby pro SMB a domácnosti: správa IT, weby, cloud a bezpečnost.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${plexSans.variable} ${plexMono.variable} antialiased bg-background text-foreground`}>
        <a href="#main" className="skip-link">Přeskočit na obsah</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
