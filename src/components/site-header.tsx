'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/config/navigation';
import { IconX, IconMenu2 } from '@tabler/icons-react';

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
              <IconX size={24} className="text-white" />
            ) : (
              <IconMenu2 size={24} className="text-white" />
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
        
        {/* Close Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-ring"
          aria-label="Zavřít menu"
        >
          <IconX size={24} className="text-white" />
        </button>
        
        {/* Menu Content - Responsive Layout */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            isMobileMenuOpen 
              ? 'translate-y-0' 
              : 'translate-y-8'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Vertical Layout for Small Screens with scroll */}
          <div className="flex sm:hidden max-h-[calc(100vh-96px)] overflow-y-auto px-6">
            <div className="mx-auto flex flex-col items-stretch gap-4 py-8 w-full max-w-sm">
            {NAV_ITEMS.map(({ href, label, icon: Icon }, index) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between gap-3 p-4 rounded-lg focus-ring transition-all duration-200 ${
                    active 
                      ? 'text-white bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                    <span className="text-base font-medium">{label}</span>
                    {Icon && <Icon size={22} className="text-white/70" />}
                </Link>
              );
            })}
            </div>
          </div>

          {/* Horizontal Layout for Larger Mobile Screens (iPad mini landscape, etc.) */}
          <div className="hidden sm:flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            {NAV_ITEMS.map(({ href, label, icon: Icon }, index) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg focus-ring transition-all duration-200 ${
                    active 
                      ? 'text-white bg-white/10 scale-105' 
                      : 'text-white/80 hover:text-white hover:bg-white/5 hover:scale-105'
                  }`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {Icon && (
                    <Icon 
                      size={24} 
                      className={`transition-colors ${
                        active ? 'text-white' : 'text-white/80'
                      }`} 
                    />
                  )}
                  <span className="text-sm font-medium whitespace-nowrap">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


