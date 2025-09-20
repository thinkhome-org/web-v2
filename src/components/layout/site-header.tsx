'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Icons } from '@/components/ui';
import { NAV_ITEMS } from '@/config/navigation';

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
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return Boolean(pathname && pathname.startsWith(href));
  }

  return (
    <header className={`sticky-header sticky top-0 z-50 border-b border-white/10 blurred-bg ${scrolled ? '' : ''}`}>
      <div className="container px-6 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="ThinkHome" width={110} height={26} priority={pathname === '/'} />
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
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

      {open && (
        <div className="md:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div ref={menuRef} id="mobile-menu" className="absolute inset-x-0 top-14 border-t border-white/10 bg-black" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <div className="container px-3 py-2 grid max-h-[70vh] overflow-y-auto">
              {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className={`flex items-center gap-2 rounded-md px-3 py-3 focus-ring transition-colors transition-shadow ${isActive(href) ? 'bg-white/10' : 'hover:bg-white/5 hover-glow'}`}>
                  {Icon && <Icon size={18} className="text-white/80" />}
                  <span className="text-sm text-white/90">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


