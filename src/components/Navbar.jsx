'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { menu, x } from '@/lib/icons';

export default function Navbar({ onExploreClick, onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Categories', href: '#categories' },
    { name: 'Exclusive Offers', href: '#exclusive-offers' },
    { name: 'Popular Ads', href: '#popular-ads' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full  h-[80px] sm:h-[95px] lg:h-[107px] bg-[#00000033] backdrop-blur-[60px] transition-all">
      <div className="w-full h-full px-4 sm:px-8 lg:px-[36px] flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="NovaNest Logo"
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-manrope font-semibold text-[22px] sm:text-[26px] leading-[100%] tracking-[0%] text-[#F4FFFB] select-none">
            NovaNest
          </span>
        </a>

        {/* DESKTOP NAV ITEMS (font-family: Manrope, weight: 500 Medium, size: 18px, line-height: 100%, color: #9ECABC) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-manrope font-medium text-[18px] leading-[100%] tracking-[0%] text-[#9ECABC] hover:text-[#F4FFFB] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTION BUTTONS (font-family: Manrope, weight: 600 SemiBold, size: 16px, line-height: 100%) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <button
            onClick={onExploreClick}
            type="button"
            className="h-[48px] px-6 bg-[#BEDFD4] hover:bg-[#cff0e5] text-[#21433D] font-manrope font-semibold text-[16px] leading-[100%] tracking-[0%] rounded-[10px] transition-all duration-200 active:scale-95 shadow-sm flex items-center justify-center cursor-pointer"
          >
            Explore Properties
          </button>
          <button
            onClick={onContactClick}
            type="button"
            className="h-[48px] px-6 bg-transparent hover:bg-[#9ECABC]/10 border border-[#9ECABC] text-[#9ECABC] hover:text-[#F4FFFB] font-manrope font-semibold text-[16px] leading-[100%] tracking-[0%] rounded-[10px] transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-[#F4FFFB] hover:text-[#BEDFD4] transition-colors focus:outline-none cursor-pointer flex items-center justify-center flex-shrink-0"
        >
          <Icon
            icon={mobileMenuOpen ? x : menu}
            className="w-7 h-7 text-[#F4FFFB]"
          />
        </button>
      </div>

      {/* MOBILE / TABLET MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] sm:top-[95px] bg-[#163331]/95 backdrop-blur-[60px] border-b border-[#21433D] px-6 py-6 shadow-2xl transition-all z-50">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-manrope font-medium text-[18px] leading-[100%] text-[#9ECABC] hover:text-[#F4FFFB] py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#21433D] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreClick && onExploreClick();
                }}
                className="w-full h-[48px] bg-[#BEDFD4] hover:bg-[#cff0e5] text-[#21433D] font-manrope font-semibold text-[16px] leading-[100%] rounded-[10px] text-center flex items-center justify-center cursor-pointer"
              >
                Explore Properties
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick && onContactClick();
                }}
                className="w-full h-[48px] bg-transparent border border-[#9ECABC] text-[#9ECABC] hover:text-[#F4FFFB] font-manrope font-semibold text-[16px] leading-[100%] rounded-[10px] text-center flex items-center justify-center cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
