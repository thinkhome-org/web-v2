'use client';

import Link from 'next/link';

type Item = { href: string; label: string; icon?: React.ComponentType<{ size?: number; className?: string }>; };

export const SiteMobileMenu = ({ items, isOpen, onClose, isActive }: {
  items: Item[];
  isOpen: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) => (
  <div
    className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
    <div
      className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-8'}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex sm:hidden max-h-[calc(100vh-96px)] overflow-y-auto px-6 w-full">
        <div className="mx-auto flex flex-col items-stretch gap-4 py-8 w-full max-w-sm">
          {items.map(({ href, label, icon: Icon }, index) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={`flex items-center justify-between gap-3 p-4 rounded-lg focus-ring transition-all duration-200 ${
                isActive(href) ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-base font-medium">{label}</span>
              {Icon && <Icon size={22} className="text-white/70" />}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
        {items.map(({ href, label, icon: Icon }, index) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(href) ? 'page' : undefined}
            className={`flex flex-col items-center gap-2 p-3 rounded-lg focus-ring transition-all duration-200 ${
              isActive(href) ? 'text-white bg-white/10 scale-105' : 'text-white/80 hover:text-white hover:bg-white/5 hover:scale-105'
            }`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {Icon && <Icon size={24} className={`transition-colors ${isActive(href) ? 'text-white' : 'text-white/80'}`} />}
            <span className="text-sm font-medium whitespace-nowrap">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);


