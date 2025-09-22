'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/config/navigation';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      </div>
    </header>
  );
}


