'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SiteMobileMenu } from '@/components/site-mobile-menu';
import { NAV_ITEMS } from '@/config/navigation';
import { IconX, IconMenu2 } from '@tabler/icons-react';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      // Show header after scrolling past 80% of viewport height (hero section)
      setShowHeader(scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Zavřít menu při změně stránky
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Zablokovat scroll když je menu otevřené
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return Boolean(pathname && pathname.startsWith(href));
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`sticky-header sticky top-0 z-50 border-b border-white/10 blurred-bg ${scrolled ? '' : ''}`}>
        <div className="container px-6 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="ThinkHome" width={110} height={26} />
          </Link>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md focus-ring transition-colors hover:bg-white/5"
            aria-label={isMobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <IconX size={24} className="text-white" />
            ) : (
              <IconMenu2 size={24} className="text-white" />
            )}
          </button>
        </div>
      </header>

      <SiteMobileMenu
        items={NAV_ITEMS}
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        isActive={isActive}
      />
    </>
  );
}


