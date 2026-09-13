'use client';

import Image from 'next/image';

export default function CtaBanner({ onGetStarted }) {
  return (
    <section className="relative z-20 w-full pt-16 sm:pt-24 pb-0 -mb-28 sm:-mb-36 lg:-mb-44">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-0">
        
        {/* Mint/Light Container Card with rounded-[12px] */}
        <div className="relative bg-[#F4FFFB] rounded-[12px] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[360px] lg:min-h-[400px]">
            
            {/* Left Column: Header, Description & Button */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 z-10">
              <h2 className="font-manrope font-semibold text-[26px] sm:text-[32px] leading-[130%] tracking-[0%] text-[#163331] max-w-[500px]">
                Begin your property listing or purchasing journey with NovaNest.
              </h2>

              <p className="mt-4 sm:mt-5 font-manrope font-medium text-[15px] sm:text-[18px] leading-[160%] tracking-[0%] text-[#163331]/80 max-w-[490px]">
                Embark on your real estate journey by leveraging the expertise and resources of NovaNest. Whether you're listing your property for sale or searching for your dream home, our dedicated team is here to guide you every step of the way. With NovaNest, your real estate goals are within reach.
              </p>

              <div className="mt-7 sm:mt-8">
                <button
                  onClick={onGetStarted}
                  type="button"
                  className="h-[52px] px-8 bg-[linear-gradient(180deg,#BEDFD4_0%,#6DA090_100%)] hover:brightness-105 text-[#163331] font-manrope font-semibold text-[16px] leading-[100%] tracking-[0%] rounded-[10px] transition-all shadow-md active:scale-95 flex items-center justify-center cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Column: Modern A-Frame Cabin Visual Overflows the Top of Card */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[380px] lg:h-full flex items-end justify-center lg:justify-end">
              <div className="relative lg:absolute lg:-top-20 lg:bottom-0 lg:right-0 w-full max-w-[380px] lg:max-w-[520px] h-[360px] sm:h-[440px] lg:h-[500px] pointer-events-none">
                <Image
                  src="/images/cta-house.png"
                  alt="Modern Luxury A-Frame Villa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain object-bottom-right drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
