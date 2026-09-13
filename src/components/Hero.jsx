'use client';

import Image from 'next/image';

export default function Hero({ onExploreClick, onContactClick }) {
  return (
    <section className="relative w-full pt-8 sm:pt-14 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 mb-3 overflow-hidden">
      
      {/* Decorative concentric shape cluster on the left (matches Figma) */}
      <div 
        className="pointer-events-none absolute -left-25 top-[35%] w-[320px] h-[640px] opacity-40 select-none z-999 hidden xl:block"
        aria-hidden="true"
      >
        <Image
          src="/images/shape-cluster.png"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col z-10">
            <h1 className="font-manrope font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-[130%] tracking-[0%] text-[#F4FFFB]">
              Discover your nest in the nova of luxury living.
            </h1>
            
            <p className="mt-5 sm:mt-6 font-manrope font-normal text-[15px] sm:text-[18px] leading-[160%] tracking-[0%] text-[#9ECABC] max-w-[560px]">
              Our exquisite properties blend timeless elegance with modern comfort, offering an oasis of serenity amidst the bustling world outside. Come, embark on a journey of discovery, and let NovaNest Estates be the canvas upon which you paint the masterpiece of your life.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                type="button"
                className="h-[52px] px-8 bg-[#BEDFD4] hover:bg-[#cff0e5] text-[#21433D] font-manrope font-semibold text-[16px] leading-[100%] tracking-[0%] rounded-[10px] transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center cursor-pointer"
              >
                Explore Properties
              </button>
              <button
                onClick={onContactClick}
                type="button"
                className="h-[52px] px-8 bg-transparent hover:bg-[#9ECABC]/10 border border-[#9ECABC] text-[#9ECABC] hover:text-[#F4FFFB] font-manrope font-semibold text-[16px] leading-[100%] tracking-[0%] rounded-[10px] transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column: 3D Visual & Geometric Accents */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-4">
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[540px] aspect-square flex items-center justify-center">
              
              {/* Ellipse 3 (Thick Dark Ring) - Positioned accurately behind the house */}
                          <div
                            className="absolute z-0 pointer-events-none rounded-full"
                            style={{
                              width: '390px',
                              height: '390px',
                              border: '65px solid rgba(0, 0, 0, 0.15)',
                              left: '200px',
                              top: '45%',
                              transform: 'translateY(-50%)',
                            }}
                          />
            
                          {/* Yellow Accent Circle (Amber Sun) - Aligned with Ellipse 3 top */}
                          <div
                            className="absolute z-0 pointer-events-none rounded-full"
                            style={{
                              width: '84px',
                              height: '84px',
                              backgroundColor: '#FFCC49',
                              left: '330px',
                              bottom: '415px',
                              boxShadow: '0 0 40px rgba(255, 204, 73, 0.25)',
                            }}
                          />
            
                          {/* Ellipse 4 (Thin Mint Circular Stroke) */}
                          <div
                            className="absolute z-0 pointer-events-none rounded-full"
                            style={{
                              width: '210px',
                              height: '210px',
                              border: '1px solid rgba(158, 202, 188, 0.45)',
                              left: '210px',
                              bottom: '40px',
                            }}
                          />

              {/* Modern 3D Luxury House Graphic */}
              <div className="relative w-[95%] h-[95%] z-10 drop-shadow-2xl">
                <Image
                  src="/images/hero-house.png"
                  alt="Modern Luxury Residence Architecture"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 440px, 540px"
                  className="object-contain transform hover:scale-[1.03] transition-transform duration-500"
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
