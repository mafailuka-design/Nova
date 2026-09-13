'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { apple, googleplay, checkCircle } from '@/lib/icons';

export default function MobileApp() {
  const [downloadToast, setDownloadToast] = useState('');

  const triggerDownload = (store) => {
    setDownloadToast(`Redirecting to ${store}...`);
    setTimeout(() => setDownloadToast(''), 3500);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      
      {/* SHAPE CLUSTER BETWEEN TESTIMONIALS AND MOBILE APP (Matches Figma crop) */}
      <div 
        className="pointer-events-none absolute -left-16 sm:-left-24 bottom-[-80px] sm:bottom-[-120px] w-[220px] sm:w-[280px] h-[460px] sm:h-[540px] opacity-40 select-none z-0 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/images/shape-cluster.png"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Devices Image from ./resources/devices.png */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start relative">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[383/445] drop-shadow-2xl">
              <Image
                src="/images/devices.png"
                alt="NovaNest Mobile Application on Devices"
                fill
                sizes="(max-width: 768px) 320px, 400px"
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column: Header, Description & Linear Gradient Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-manrope font-semibold text-[28px] sm:text-[32px] leading-[130%] tracking-[0%] text-[#F4FFFB]">
              Mobile Application
            </h2>

            <p className="mt-5 font-manrope font-normal text-[15px] sm:text-[18px] leading-[160%] tracking-[0%] text-[#9ECABC] max-w-[540px]">
              Achieve seamless access to the world of real estate with the NovaNest Estates mobile app, available for download on both Google Play and the App Store. Whether you're searching for your dream home, exploring property listings, or staying updated with the latest market trends, our user-friendly app puts the power of real estate in the palm of your hand. Download now and experience the convenience of finding your perfect property anytime, anywhere.
            </p>

            {/* Store Download Buttons: linear gradient #2F2F2F, #000000 with 1px border gradient #484848, #0B0B0B */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              
              {/* Apple Store Button */}
              <div className="p-[1px] rounded-xl bg-gradient-to-b from-[#484848] to-[#0B0B0B] shadow-lg">
                <button
                  onClick={() => triggerDownload('Apple App Store')}
                  type="button"
                  className="bg-gradient-to-b from-[#2F2F2F] to-[#000000] hover:brightness-110 px-6 py-3 rounded-[11px] flex items-center gap-3 transition-all active:scale-95 group cursor-pointer"
                >
                  <Icon icon={apple} className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span className="font-manrope font-semibold text-white text-[15px]">Download</span>
                </button>
              </div>

              {/* Google Play Button */}
              <div className="p-[1px] rounded-xl bg-gradient-to-b from-[#484848] to-[#0B0B0B] shadow-lg">
                <button
                  onClick={() => triggerDownload('Google Play Store')}
                  type="button"
                  className="bg-gradient-to-b from-[#2F2F2F] to-[#000000] hover:brightness-110 px-6 py-3 rounded-[11px] flex items-center gap-3 transition-all active:scale-95 group cursor-pointer"
                >
                  <Icon icon={googleplay} className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="font-manrope font-semibold text-white text-[15px]">Download</span>
                </button>
              </div>

            </div>

            {downloadToast && (
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#BEDFD4] bg-[#163331] border border-[#2B574D] px-4 py-2 rounded-lg">
                <Icon icon={checkCircle} className="w-4 h-4" />
                <span>{downloadToast}</span>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
