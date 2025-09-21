'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Icons } from '@/components/ui';
import { NAV_ITEMS } from '@/config/navigation';

const navItems = NAV_ITEMS;

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
          <Image src="/logo.svg" alt="ThinkHome" width={110} height={26} />
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center gap-2 rounded-md px-3 py-2 focus-ring transition-colors transition-shadow ${active ? 'bg-white/10' : 'hover:bg-white/5 hover-glow'}`}
              >
                {Icon && <Icon size={18} className="text-white/80" />}
                <span className="text-sm text-white/90">{label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden rounded-md p-2 hover:bg-white/5 focus-ring"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Icons.IconX size={22} className="text-white" /> : <Icons.IconMenu2 size={22} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div ref={menuRef} id="mobile-menu" className="fixed inset-0 bg-black flex flex-col" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <div className="px-6 h-14 flex items-center justify-between border-b border-white/10">
              <h2 id="mobile-menu-title" className="sr-only">Menu</h2>
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <Image src="/logo.svg" alt="ThinkHome" width={110} height={26} />
              </Link>
              <button aria-label="Zavřít menu" className="rounded-md p-2 hover:bg-white/5 focus-ring" onClick={() => setOpen(false)}>
                <Icons.IconX size={22} className="text-white" />
              </button>
            </div>
            <nav className="px-2 py-2 flex-1 overflow-y-auto">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-md px-4 py-4 focus-ring transition-colors transition-shadow text-white/90 ${isActive(href) ? 'bg-white/10' : 'hover:bg-white/5 hover-glow'}`}
                >
                  {Icon && <Icon size={20} className="text-white/80" />}
                  <span className="text-base">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


