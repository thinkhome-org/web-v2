import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/ui';
import { readYamlObject } from '@/lib/yaml';
import { NAV_ITEMS } from '@/config/navigation';

type Contacts = { email?: string; phone?: string; linkedin?: string; github?: string };
export default async function SiteFooter() {
  const contacts = await readYamlObject<Contacts>('contacts.yaml');
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d]">
      <div className="container px-6 py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/logo.svg" alt="ThinkHome" width={110} height={26} loading="lazy" />
          <p className="mt-3 text-sm text-white/70 max-w-sm">Moderní IT bez starostí. Správa IT, weby, cloud a bezpečnost pro SMB a domácnosti.</p>
        </div>
        <nav aria-label="Hlavní odkazy" className="grid gap-2 text-sm md:col-span-4">
          {NAV_ITEMS.filter(i => i.href !== '/').map((i) => (
            <Link key={i.href} href={i.href} className="hover:underline">{i.label}</Link>
          ))}
        </nav>
        <div className="grid gap-2 text-sm md:col-span-3">
          {contacts?.email && <a href={`mailto:${contacts.email}`} className="flex items-center gap-2 hover:underline"><Icons.IconMail size={16} /> {contacts.email}</a>}
          {contacts?.phone && <a href={`tel:${contacts.phone.replace(/\s+/g,'')}`} className="flex items-center gap-2 hover:underline"><Icons.IconPhone size={16} /> {contacts.phone}</a>}
          <div className="flex items-center gap-3 pt-2">
            {contacts?.linkedin && <a aria-label="LinkedIn" href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 hover:bg-white/5"><Icons.IconBrandLinkedin size={18} /></a>}
            {contacts?.github && <a aria-label="GitHub" href={contacts.github} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 hover:bg-white/5"><Icons.IconBrandGithub size={18} /></a>}
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
          </div>
        </div>
      </div>
    </footer>
  );
}


