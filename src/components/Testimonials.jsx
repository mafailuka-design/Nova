'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { arrowLeft, arrowRight, quote, maximize, bed, bath } from '@/lib/icons';

const testimonialsData = [
  {
    id: 'serene-haven',
    propertyTitle: 'Serene Haven',
    community: 'Suburban Bliss Community',
    size: '200m²',
    beds: '3 Bedrooms',
    baths: '2 Bathrooms',
    image: '/images/testimonial-suburban.png',
    clientName: 'Emily Johnson',
    clientAvatar: '/images/avatar-emily.png',
    testimonialQuote:
      'NovaNest Estates helped me find the perfect suburban retreat for my family. The process was smooth, and their team was incredibly helpful every step of the way. Thank you for making our dream home a reality!',
  },
  {
    id: 'coastal-breeze',
    propertyTitle: 'Tropical Oasis',
    community: 'Oceanview Palms Community',
    size: '240m²',
    beds: '4 Bedrooms',
    baths: '3 Bathrooms',
    image: '/images/testimonial-peek.png',
    clientName: 'Marcus & Sophia Vance',
    clientAvatar: '/images/avatar-emily.png',
    testimonialQuote:
      'Finding our dream beachfront property was an effortless and delightful experience thanks to NovaNest. Their deep market insight and personalized guidance made all the difference.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];
  const nextItem = testimonialsData[(currentIndex + 1) % testimonialsData.length];

  return (
    <section id="testimonials" className="relative w-full py-16 sm:py-24 overflow-hidden">
      
      {/* SHAPE CLUSTER TRANSITION ON LEFT */}
      <div 
        className="pointer-events-none absolute -left-20 top-0 w-[240px] h-[480px] opacity-35 select-none z-0 hidden lg:block"
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
        
        {/* Header (Matching Categories Typography & Colors) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-baseline gap-6 lg:gap-14">
            <h2 className="font-manrope font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[130%] tracking-[0%] text-[#F4FFFB] whitespace-nowrap">
              What Our<br className="hidden sm:inline" /> Clients Say
            </h2>
            <p className="font-manrope font-normal text-[15px] sm:text-[18px] leading-[160%] tracking-[0%] text-[#9ECABC] max-w-[500px]">
              Discover what our satisfied clients have to say about their experience with NovaNest Estates. From finding their dream homes to experiencing exceptional service, our clients' testimonials speak volumes about the quality and dedication we bring to every real estate transaction.
            </p>
          </div>

          {/* Prev/Next Buttons (Matching Categories Style: #BEDFD4 with #21433D icon) */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#BEDFD4] hover:bg-[#cff0e5] text-[#21433D] transition-all cursor-pointer shadow-md"
            >
              <Icon icon={arrowLeft} className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              aria-label="Next testimonial"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#BEDFD4] hover:bg-[#cff0e5] text-[#21433D] transition-all cursor-pointer shadow-md"
            >
              <Icon icon={arrowRight} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Display with Peeking Next Card */}
        <div className="relative flex items-center gap-6 overflow-hidden">
          
          {/* Main Active Testimonial Card */}
          <div className="w-full lg:max-w-[980px] flex-shrink-0 bg-[#F4FFFB] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[380px] sm:min-h-[440px]">
              
              {/* Left: Property Image */}
              <div className="md:col-span-6 relative min-h-[260px] md:min-h-full">
                <Image
                  src={current.image}
                  alt={current.propertyTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right: Review Details */}
              <div className="md:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative bg-[#F4FFFB]">
                
                {/* Large Decorative Double Quote Icon */}
                <div className="absolute top-6 right-8 pointer-events-none opacity-80" aria-hidden="true">
                  <Icon icon={quote} className="w-12 h-12 text-[#21433D]" />
                </div>

                <div>
                  <h3 className="font-manrope font-semibold text-[22px] sm:text-[26px] leading-[130%] text-[#163331]">
                    {current.propertyTitle}
                  </h3>
                  <p className="font-manrope font-normal text-[14px] sm:text-[15px] text-[#5E7E77] mt-1">
                    {current.community}
                  </p>

                  {/* Specs */}
                  <div className="mt-4 flex items-center gap-4 sm:gap-6 text-[#5E7E77] font-manrope text-xs sm:text-sm font-medium">
                    <div className="flex items-center gap-1.5">
                      <Icon icon={maximize} className="w-3.5 h-3.5" />
                      <span>{current.size}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon icon={bed} className="w-4 h-4" />
                      <span>{current.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon icon={bath} className="w-4 h-4" />
                      <span>{current.baths}</span>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-[#D5E6E0]">
                      <Image
                        src={current.clientAvatar}
                        alt={current.clientName}
                        fill
                        sizes="44px"
                        className="object-cover"
                        priority={true}
                      />
                    </div>
                    <span className="font-manrope font-semibold text-[#163331] text-[16px] sm:text-[17px]">
                      {current.clientName}
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="mt-5 font-manrope font-normal text-[#4A6962] text-[14px] sm:text-[15px] leading-[160%]">
                  {current.testimonialQuote}
                </p>

              </div>

            </div>
          </div>

          {/* Peeking Next Card on Right (desktop peek) */}
          <div 
            onClick={handleNext}
            className="hidden lg:block w-[200px] xl:w-[240px] flex-shrink-0 h-[440px] rounded-3xl overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 relative shadow-xl"
            title="Next Testimonial"
          >
            <Image
              src={nextItem.image}
              alt="Next property testimonial preview"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
