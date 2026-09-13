'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import { xTwitter, youtube, instagram, linkedin } from '@/lib/icons';

export default function Footer() {
  const quickLinks = [
    { name: 'Stuff for Designers', href: '#' },
    { name: 'Cool Stuff', href: '#' },
    { name: 'Random Feature', href: '#' },
    { name: 'Another One', href: '#' },
    { name: 'Last Time', href: '#' },
  ];

  const companyInfo = [
    { name: 'About Us', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: "User's Guide", href: '#' },
  ];

  const popularSearches = [
    { name: 'Apartment for Rent', href: '#' },
    { name: 'Modern House', href: '#' },
    { name: 'Seaside House', href: '#' },
  ];

  const socialLinks = [
    { name: 'X', icon: xTwitter, href: 'https://x.com' },
    { name: 'YouTube', icon: youtube, href: 'https://youtube.com' },
    { name: 'Instagram', icon: instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="relative w-full min-h-[560px] lg:min-h-[754px] pt-40 sm:pt-48 lg:pt-60 pb-12 overflow-hidden bg-[#00000033] backdrop-blur-[60px] transition-all">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-0">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 sm:gap-8 pb-16 sm:pb-28">
          
          {/* Col 1: Brand & Logo */}
          <div className="col-span-2 md:col-span-4 flex items-start gap-3">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="NovaNest Logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <span className="font-manrope font-semibold text-[26px] leading-[100%] tracking-[0%] text-[#F4FFFB]">
              NovaNest
            </span>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-manrope font-medium text-[21px] leading-[130%] tracking-[0%] text-[#F4FFFB] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-manrope font-normal text-[14px] leading-[160%] tracking-[0%] text-[#9ECABC] hover:text-[#F4FFFB] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Info */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-manrope font-medium text-[21px] leading-[130%] tracking-[0%] text-[#F4FFFB] mb-5">
              Company Info
            </h4>
            <ul className="space-y-3">
              {companyInfo.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-manrope font-normal text-[14px] leading-[160%] tracking-[0%] text-[#9ECABC] hover:text-[#F4FFFB] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Popular Searches */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-manrope font-medium text-[21px] leading-[130%] tracking-[0%] text-[#F4FFFB] mb-5">
              Popular Searches
            </h4>
            <ul className="space-y-3">
              {popularSearches.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-manrope font-normal text-[14px] leading-[160%] tracking-[0%] text-[#9ECABC] hover:text-[#F4FFFB] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Attribution & Social Icons */}
        <div className="pt-8 border-t border-[#1F433C]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-manrope font-normal text-[14px] text-[#9ECABC]">
            Design by Seda Sen
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit NovaNest on ${social.name}`}
                className="text-[#9ECABC] hover:text-[#F4FFFB] hover:scale-110 transition-all p-1"
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
