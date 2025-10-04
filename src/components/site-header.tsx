"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteMobileMenu } from "@/components/site-mobile-menu";
import { NAV_ITEMS } from "@/config/navigation";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import { GradientButton } from "./ui";

export default function SiteHeader() {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setShowHeader(true);
      return;
    }
    const onScroll = () => {
      const scrollY = window.scrollY;
      setShowHeader(scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Zavřít menu při změně stránky
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Zablokovat scroll když je menu otevřené
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return Boolean(pathname && pathname.startsWith(href));
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`sticky-header fixed top-0 w-full z-50 transition-all duration-300 ${
          showHeader
            ? "translate-y-0 opacity-100 border-b border-white/10 blurred-bg"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container px-6 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo/white.svg" alt="ThinkHome" width={110} height={26} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 ml-auto">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`p-2 rounded-sm bg-white/10 hover:bg-accent/20 border border-white/20
                    hover:border-accent/40 transition-all duration-200 inline-flex items-center gap-2
                    justify-center hover:scale-110 hover:shadow-lg`}
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
            className="md:hidden p-2 rounded-sm focus-ring transition-colors hover:bg-white/5"
            aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
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
