import Link from 'next/link';
import Image from 'next/image';
import { official } from '@/config/official';
import { IconMail, IconPhone, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { readYamlObject } from '@/lib/yaml';
import { CookiePreferencesLink } from './cookie-consent';

type Contacts = { email?: string; phone?: string; linkedin?: string; github?: string };
export default async function SiteFooter() {
  const contacts = await readYamlObject<Contacts>('contacts.yaml');
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d]">
      {/* Mobile Footer */}
      <div className="block md:hidden">
        <div className="container px-4 py-8 space-y-6">
          {/* Logo and Description */}
          <div className="text-center">
            <Image src={official.logo} alt={official.title} width={110} height={26} loading="lazy" className="mx-auto" />
            <p className="mt-3 text-sm text-white/70 max-w-sm mx-auto">Moderní IT bez starostí. Správa IT, weby, cloud a bezpečnost pro SMB a domácnosti.</p>
          </div>


          {/* Contact Info */}
          <div className="space-y-3 text-sm">
          {contacts?.email && (
              <a href={`mailto:${contacts.email}`} className="flex items-center justify-center gap-2 rounded-md px-3 py-2 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring">
                <IconMail size={16} />
                <span className="text-xs">{contacts.email}</span>
              </a>
            )}
            {contacts?.phone && (
              <a href={`tel:${contacts.phone.replace(/\s+/g,'')}`} className="flex items-center justify-center gap-2 rounded-md px-3 py-2 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring">
                <IconPhone size={16} />
                <span className="text-xs">{contacts.phone}</span>
              </a>
            )}
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-2">
              {contacts?.linkedin && (
                <a aria-label="LinkedIn" href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md p-3 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring">
                  <IconBrandLinkedin size={20} />
                </a>
              )}
              {contacts?.github && (
                <a aria-label="GitHub" href={contacts.github} target="_blank" rel="noopener noreferrer" className="rounded-md p-3 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring">
                  <IconBrandGithub size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Bar */}
        <div className="border-t border-white/10 text-xs text-white/50">
          <div className="container px-4 py-4 space-y-3">
            <p className="text-center">© {new Date().getFullYear()} ThinkHome</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/pravo/ochrana-soukromi" className="hover:underline text-xs">Ochrana soukromí</Link>
              <Link href="/pravo/cookies" className="hover:underline text-xs">Cookies</Link>
              <Link href="/pravo/vop" className="hover:underline text-xs">VOP</Link>
              <CookiePreferencesLink className="text-xs" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="container px-6 py-12 grid gap-10 md:grid-cols-2">
          <div>
            <Image src={official.logo} alt={official.title} width={110} height={26} loading="lazy" />
            <p className="mt-3 text-sm text-white/70 max-w-sm">Moderní IT bez starostí. Správa IT, weby, cloud a bezpečnost pro SMB a domácnosti.</p>
          </div>
          <div className="grid gap-2 text-sm">
            {contacts?.email && <a href={`mailto:${contacts.email}`} className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring"><IconMail size={16} /> {contacts.email}</a>}
            {contacts?.phone && <a href={`tel:${contacts.phone.replace(/\s+/g,'')}`} className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring"><IconPhone size={16} /> {contacts.phone}</a>}
            <div className="flex items-center gap-3 pt-2">
              {contacts?.linkedin && <a aria-label="LinkedIn" href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring"><IconBrandLinkedin size={18} /></a>}
              {contacts?.github && <a aria-label="GitHub" href={contacts.github} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 transition-colors transition-shadow hover:bg-white/5 hover-glow focus-ring"><IconBrandGithub size={18} /></a>}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 text-xs text-white/50">
          <div className="container px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} ThinkHome</p>
            <div className="flex items-center gap-4">
              <Link href="/pravo/ochrana-soukromi" className="hover:underline">Ochrana soukromí</Link>
              <Link href="/pravo/cookies" className="hover:underline">Cookies</Link>
              <Link href="/pravo/vop" className="hover:underline">VOP</Link>
              <CookiePreferencesLink />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


