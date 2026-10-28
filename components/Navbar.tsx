"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Program", href: "/program" },
    { name: "Cerita Dampak", href: "/cerita-dampak" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fff8f5]/90 backdrop-blur-md border-b border-[#dbc2b0]/30 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-sm border border-amber-200/50 flex items-center justify-center transition-transform group-hover:scale-105 duration-200 overflow-hidden">
            <img
              src="/image/logo_lebah_kreatif.png"
              alt="Logo Yayasan Lebah Kreatif"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-lg sm:text-xl font-bold tracking-tight text-[#8d4b00]">
              Yayasan Lebah Kreatif
            </span>
            <span className="text-[11px] font-semibold text-[#006a61] tracking-wide">
              Creative Bee Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-all duration-150 py-1 relative ${isActive
                    ? "text-[#8d4b00] font-bold"
                    : "text-[#554336] hover:text-[#8d4b00]"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#8d4b00] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Volunteer Link Button */}
          <Link
            href="/program#relawan"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#89f5e7]/40 hover:bg-[#89f5e7]/70 text-[#005049] text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">group</span>
            <span>Relawan</span>
          </Link>

          {/* Donate Now Button */}
          <Link
            href="/donasi"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-xs sm:text-sm font-bold amber-btn-shadow transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-base sm:text-lg">
              volunteer_activism
            </span>
            <span>Donasi Sekarang</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu navigasi"
            className="lg:hidden w-10 h-10 rounded-full bg-[#fcf2eb] hover:bg-[#f6ece6] text-[#8d4b00] flex items-center justify-center transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#dbc2b0]/30 bg-[#fff8f5] px-4 pt-4 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${isActive
                      ? "bg-amber-100/80 text-[#8d4b00] font-bold"
                      : "text-[#554336] hover:bg-[#f6ece6]"
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="material-symbols-outlined text-sm text-[#8d4b00]">
                      check
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#dbc2b0]/30 flex flex-col gap-2">
            <Link
              href="/program#relawan"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#89f5e7]/50 text-[#005049] text-sm font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">group</span>
              <span>Gabung Jadi Relawan</span>
            </Link>
            <Link
              href="/donasi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold amber-btn-shadow flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">
                volunteer_activism
              </span>
              <span>Donasi Sekarang</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
