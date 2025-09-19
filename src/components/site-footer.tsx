import Link from 'next/link';
import { IconBrandLinkedin, IconMail, IconPhone, IconBrandGithub } from '@tabler/icons-react';
import { NAV_ITEMS } from '@/config/navigation';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d]">
      <div className="container px-6 py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/logo.svg" alt="ThinkHome" width={110} height={26} loading="lazy" decoding="async" />
          <p className="mt-3 text-sm text-white/70 max-w-sm">Moderní IT bez starostí. Správa IT, weby, cloud a bezpečnost pro SMB a domácnosti.</p>
        </div>
        <nav aria-label="Hlavní odkazy" className="grid gap-2 text-sm md:col-span-4">
          {NAV_ITEMS.filter(i => i.href !== '/').map((i) => (
            <Link key={i.href} href={i.href} className="hover:underline">{i.label}</Link>
          ))}
        </nav>
        <div className="grid gap-2 text-sm md:col-span-3">
          <a href="mailto:info@thinkhome.org" className="flex items-center gap-2 hover:underline"><IconMail size={16} /> info@thinkhome.org</a>
          <a href="tel:+420910129289" className="flex items-center gap-2 hover:underline"><IconPhone size={16} /> +420 910 129 289</a>
          <div className="flex items-center gap-3 pt-2">
            <a aria-label="LinkedIn" href="#" className="rounded-md p-2 hover:bg-white/5"><IconBrandLinkedin size={18} /></a>
            <a aria-label="GitHub" href="#" className="rounded-md p-2 hover:bg-white/5"><IconBrandGithub size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-white/50">
        <div className="container px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} ThinkHome</p>
          <div className="flex items-center gap-4">
            <a href="/pravo/ochrana-soukromi" className="hover:underline">Ochrana soukromí</a>
            <a href="/pravo/cookies" className="hover:underline">Cookies</a>
            <a href="/pravo/vop" className="hover:underline">VOP</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


