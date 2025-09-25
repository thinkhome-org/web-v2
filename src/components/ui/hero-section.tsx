'use client';

import { HTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/config/navigation';
import { IconChevronDown } from '@tabler/icons-react';

interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  fullHeight?: boolean;
  gradient?: boolean;
  showNavigation?: boolean;
}

export function HeroSection({ 
  className = '', 
  children,
  fullHeight = true,
  gradient = true,
  showNavigation = true,
  ...props 
}: HeroSectionProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const heightClass = fullHeight ? 'min-h-screen flex items-center justify-center' : '';
  const gradientClass = gradient ? 'hero-gradient' : '';

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return Boolean(pathname && pathname.startsWith(href));
  }
  
  return (
    <section 
      className={`relative ${heightClass} ${gradientClass} ${className}`} 
      {...props}
    >
      {/* Hero Navigation - only show on homepage */}
      {showNavigation && isHome && (
        <>
          {/* Desktop Hero Navigation */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
            <nav className="glass-block rounded-full px-6 py-3">
              <div className="flex items-center gap-1">
                {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 ${
                        active 
                          ? 'bg-accent text-white shadow-lg' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {Icon && <Icon size={16} />}
                      <span className="text-sm font-medium">{label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Mobile Hero Navigation */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
            <nav className="glass-block rounded-full px-4 py-2">
              <div className="flex items-center gap-1 overflow-x-auto">
                {NAV_ITEMS.slice(0, 4).map(({ href, label, icon: Icon }) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-1 rounded-full px-3 py-1.5 whitespace-nowrap transition-all duration-200 ${
                        active 
                          ? 'bg-accent text-white shadow-lg' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {Icon && <Icon size={14} />}
                      <span className="text-xs font-medium">{label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <Link 
              href="#about"
              className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-xs font-medium">Přejít níže</span>
              <IconChevronDown size={20} />
            </Link>
          </div>
        </>
      )}
      
      {children}
    </section>
  );
}