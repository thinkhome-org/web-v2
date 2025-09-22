'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/config/navigation';
import { Icons } from '@/components/ui';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
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
              <Icons.IconX size={24} className="text-white" />
            ) : (
              <Icons.IconMenu2 size={24} className="text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        onClick={toggleMobileMenu}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        
        {/* Menu Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
            isMobileMenuOpen 
              ? 'translate-y-0' 
              : 'translate-y-8'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_ITEMS.map(({ href, label, icon: Icon }, index) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-col items-center gap-3 p-4 rounded-lg focus-ring transition-all duration-200 ${
                  active 
                    ? 'text-white bg-white/10 scale-105' 
                    : 'text-white/80 hover:text-white hover:bg-white/5 hover:scale-105'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {Icon && (
                  <Icon 
                    size={32} 
                    className={`transition-colors ${
                      active ? 'text-white' : 'text-white/80'
                    }`} 
                  />
                )}
                <span className="text-lg font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}


