'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { IconMenu2, IconX, IconHome2, IconInfoCircle, IconUsersGroup, IconTools, IconMail, IconStar } from '@tabler/icons-react';

const navItems = [
  { href: '/', label: 'Home', icon: IconHome2 },
  { href: '/o-nas', label: 'O nás', icon: IconInfoCircle },
  { href: '/nas-tym', label: 'Náš tým', icon: IconUsersGroup },
  { href: '/sluzby', label: 'Služby', icon: IconTools },
  { href: '/reference', label: 'Reference', icon: IconStar },
  { href: '/kontakt', label: 'Kontakt', icon: IconMail },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
      // initial focus
      setTimeout(() => {
        const firstLink = menuRef.current?.querySelector('a') as HTMLAnchorElement | undefined;
        firstLink?.focus?.();
      }, 0);
      const onKey = (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') setOpen(false);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        window.removeEventListener('keydown', onKey);
        document.documentElement.style.overflow = '';
      };
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {};
  }, [open]);

  useEffect(() => {
    setOpen(false); // close menu on route change
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return Boolean(pathname && pathname.startsWith(href));
  }

  return (
    <header className={`sticky-header sticky top-0 z-50 border-b border-white/10 blurred-bg ${scrolled ? '' : ''}`}>
      <div className="container px-6 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="ThinkHome" width={110} height={26} />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm focus-ring transition-colors ${active ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/kontakt" className="hidden md:inline-flex focus-ring rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-[#a50f19] transition-colors">Kontakt</Link>
          <button
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden rounded-md p-2 hover:bg-white/5 focus-ring"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={22} className="text-white" /> : <IconMenu2 size={22} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div ref={menuRef} id="mobile-menu" className="absolute inset-x-0 top-14 border-t border-white/10 bg-black" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <div className="container px-3 py-2 grid max-h-[70vh] overflow-y-auto">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className={`flex items-center gap-2 rounded-md px-3 py-3 focus-ring transition-colors ${isActive(href) ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                  <Icon size={18} className="text-white/80" />
                  <span className="text-sm text-white/90">{label}</span>
                </Link>
              ))}
              <Link href="/kontakt" className="mt-1 mb-2 rounded-md bg-accent px-3 py-3 text-sm font-medium text-white hover:bg-[#a50f19] focus-ring">Kontakt</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


