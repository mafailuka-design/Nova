'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { maximize, bed, bath, layers } from '@/lib/icons';

const defaultOffers = [
  {
    id: 'elegant-apartment',
    title: 'Elegant Apartment',
    price: '$600,000',
    oldPrice: '$625,000',
    location: 'Downtown Metropolitan Area',
    size: '120m²',
    beds: '2 Bedrooms',
    baths: '2 Bathrooms',
    images: [
      '/images/offer-apartment-main.png',
      '/images/apartment-card-2.png',
      '/images/apartment-card-3.png',
    ],
  },
  {
    id: 'oceanfront-paradise',
    title: 'Oceanfront Paradise',
    price: '$1,900,000',
    oldPrice: '$2,000,000',
    location: 'Beachfront Property, Coastal Area',
    size: '90m²',
    beds: '1 Bedroom',
    baths: '1 Bathroom',
    images: [
      '/images/oceanfront-card-1.png',
      '/images/oceanfront-card-2.png',
      '/images/oceanfront-card-3.png',
    ],
  },
];

export default function ExclusiveOffers({ onPropertyClick }) {
  const [offers, setOffers] = useState(defaultOffers);
  const [apartmentImageIdx, setApartmentImageIdx] = useState(0);
  const [oceanfrontImageIdx, setOceanfrontImageIdx] = useState(0);

  useEffect(() => {
    fetch('/api/property')
      .then(res => res.json())
      .then(res => {
        if (res?.data?.property) {
          const p = res.data.property;
          setOffers(prev => [
            {
              ...prev[0],
              title: p.prop_type ? `${p.prop_type.charAt(0) + p.prop_type.slice(1).toLowerCase()} Residence` : prev[0].title,
              price: p.formatted_price || prev[0].price,
              oldPrice: p.old_price || prev[0].oldPrice,
              location: p.address?.full_address || `${p.address?.line || ''}, ${p.address?.city || ''}, ${p.address?.state_code || ''}`,
              size: p.building_size?.size ? `${p.building_size.size} sqft` : prev[0].size,
              beds: p.beds ? `${p.beds} Bedrooms` : prev[0].beds,
              baths: p.baths ? `${p.baths} Bathrooms` : prev[0].baths,
              images: p.photos && p.photos.length > 0 ? p.photos : prev[0].images,
            },
            prev[1],
          ]);
        }
      })
      .catch(() => {
        // Retain default static Figma values
      });
  }, []);

  const offer1 = offers[0] || defaultOffers[0];
  const offer2 = offers[1] || defaultOffers[1];

  return (
    <section id="exclusive-offers" className="relative w-full py-16 sm:py-24 overflow-hidden">
      
      {/* SHAPE CLUSTER & ACCENT GRADIENT BETWEEN THE CARDS (Matches Figma) */}
      <div 
        className="pointer-events-none absolute right-0 top-[48%] -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[320px] h-[480px] sm:h-[560px] opacity-40 select-none z-0 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/images/shape-cluster.png"
          alt=""
          fill
          className="object-contain object-right rotate-180"
        />
      </div>

      {/* Radiant Yellow Circle Accent */}
      <div 
        className="pointer-events-none absolute right-8 sm:right-16 lg:right-28 top-[48%] -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#FFC436] shadow-xl shadow-[#FFC436]/25 z-0 hidden md:block"
        aria-hidden="true"
      />

      {/* Atmospheric Mid-Section Glow Gradient */}
      <div 
        className="pointer-events-none absolute right-0 top-[40%] w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_90%_50%,rgba(33,67,61,0.45)_0%,transparent_70%)] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-0 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-[620px] mx-auto mb-16 sm:mb-24">
          <h2 className="font-manrope font-semibold text-[28px] sm:text-[32px] leading-[130%] tracking-[0%] text-center text-[#F4FFFB]">
            Exclusive Offers
          </h2>
          <p className="mt-3.5 font-manrope font-normal text-[15px] sm:text-[18px] leading-[160%] tracking-[0%] text-center text-[#9ECABC]">
            Explore our handpicked selection of discounted properties at NovaNest Estates. Don't miss out on these exclusive deals offering exceptional value for your dream home.
          </p>
        </div>

        {/* Offer 1: Elegant Apartment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          
          {/* Left: Stacked Image Gallery */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div 
              onClick={() => setApartmentImageIdx((prev) => (prev + 1) % offer1.images.length)}
              className="relative w-[300px] sm:w-[380px] lg:w-[410px] aspect-[4/5] cursor-pointer group select-none"
              title="Click to cycle gallery photos"
            >
              {/* Back Card (layer 3) */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden card-image-shadow border border-[#21433D]/15 transition-all duration-500 origin-bottom-left"
                style={{
                  transform: 'translate(-38px, 0px) scale(0.88) rotate(-1deg)',
                  zIndex: 10,
                  opacity: 0.75,
                }}
              >
                <Image
                  src={offer1.images[(apartmentImageIdx + 2) % offer1.images.length]}
                  alt="Apartment Interior Detail"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* Middle Card (layer 2) */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden card-image-shadow border border-[#21433D]/15 transition-all duration-500 origin-bottom-left"
                style={{
                  transform: 'translate(-18px, 0px) scale(0.94) rotate(-0.5deg)',
                  zIndex: 20,
                  opacity: 0.9,
                }}
              >
                <Image
                  src={offer1.images[(apartmentImageIdx + 1) % offer1.images.length]}
                  alt="Apartment Living Area"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* Front Card (layer 1) */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden card-image-shadow border border-[#21433D]/15 transition-all duration-500 group-hover:scale-[1.01]"
                style={{
                  zIndex: 30,
                }}
              >
                <Image
                  src={offer1.images[apartmentImageIdx]}
                  alt="Primary View"
                  fill
                  sizes="(max-width: 768px) 300px, 410px"
                  className="object-cover"
                  priority
                />
                
                {/* Gallery indicator hint */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-white/80 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon={layers} className="w-3.5 h-3.5" />
                  <span>{apartmentImageIdx + 1}/{offer1.images.length} Photos</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Property Details */}
          <div 
            onClick={() => onPropertyClick && onPropertyClick({
              title: offer1.title,
              price: offer1.price,
              oldPrice: offer1.oldPrice,
              location: offer1.location,
              size: offer1.size,
              beds: offer1.beds,
              baths: offer1.baths,
              image: offer1.images[0],
            })}
            className="lg:col-span-6 flex flex-col justify-center cursor-pointer group"
          >
            <h3 className="font-manrope font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-[130%] tracking-[0%] text-[#F4FFFB] group-hover:text-[#BEDFD4] transition-colors">
              {offer1.title}
            </h3>

            <div className="mt-4 flex flex-col">
              <span className="font-manrope font-normal text-[16px] sm:text-[18px] text-[#8BAFA6] line-through">
                {offer1.oldPrice}
              </span>
              <span className="font-manrope font-semibold text-[32px] sm:text-[40px] leading-[120%] tracking-tight text-[#F4FFFB] mt-0.5">
                {offer1.price}
              </span>
            </div>

            <p className="mt-3 font-manrope font-normal text-[16px] sm:text-[18px] text-[#9ECABC]">
              {offer1.location}
            </p>

            {/* Spec Features with Icons */}
            <div className="mt-6 flex flex-col gap-3.5">
              <div className="flex items-center gap-3 text-[#9ECABC] font-manrope font-medium text-[15px] sm:text-[16px]">
                <Icon icon={maximize} className="w-5 h-5 text-[#8BAFA6]" />
                <span>{offer1.size}</span>
              </div>
              <div className="flex items-center gap-3 text-[#9ECABC] font-manrope font-medium text-[15px] sm:text-[16px]">
                <Icon icon={bed} className="w-5 h-5 text-[#8BAFA6]" />
                <span>{offer1.beds}</span>
              </div>
              <div className="flex items-center gap-3 text-[#9ECABC] font-manrope font-medium text-[15px] sm:text-[16px]">
                <Icon icon={bath} className="w-5 h-5 text-[#8BAFA6]" />
                <span>{offer1.baths}</span>
              </div>
            </div>

          </div>

        </div>


        {/* Offer 2: Oceanfront Paradise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Property Details */}
          <div 
            onClick={() => onPropertyClick && onPropertyClick({
              title: offer2.title,
              price: offer2.price,
              oldPrice: offer2.oldPrice,
              location: offer2.location,
              size: offer2.size,
              beds: offer2.beds,
              baths: offer2.baths,
              image: offer2.images[0],
            })}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 cursor-pointer group"
          >
            <h3 className="font-manrope font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-[130%] tracking-[0%] text-[#F4FFFB] group-hover:text-[#BEDFD4] transition-colors">
              {offer2.title}
            </h3>

            <div className="mt-4 flex flex-col">
              <span className="font-manrope font-normal text-[16px] sm:text-[18px] text-[#8BAFA6] line-through">
                {offer2.oldPrice}
              </span>
              <span className="font-manrope font-semibold text-[32px] sm:text-[40px] leading-[120%] tracking-tight text-[#F4FFFB] mt-0.5">
                {offer2.price}
              </span>
            </div>

            <p className="mt-3 font-manrope font-normal text-[16px] sm:text-[18px] text-[#9ECABC]">
              {offer2.location}
            </p>

            {/* Spec Features with Icons */}
            <div className="mt-6 flex flex-col gap-3.5">
              <div className="flex items-center gap-3 text-[#9ECABC] font-manrope font-medium text-[15px] sm:text-[16px]">
                <Icon icon={maximize} className="w-5 h-5 text-[#8BAFA6]" />
                <span>{offer2.size}</span>
              </div>
              <div className="flex items-center gap-3 text-[#9ECABC] font-manrope font-medium text-[15px] sm:text-[16px]">
                <Icon icon={bed} className="w-5 h-5 text-[#8BAFA6]" />
                <span>{offer2.beds}</span>
              </div>
              <div className="flex items-center gap-3 text-[#9ECABC] font-manrope font-medium text-[15px] sm:text-[16px]">
                <Icon icon={bath} className="w-5 h-5 text-[#8BAFA6]" />
                <span>{offer2.baths}</span>
              </div>
            </div>

          </div>

          {/* Right: Stacked Image Gallery */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
            <div 
              onClick={() => setOceanfrontImageIdx((prev) => (prev + 1) % offer2.images.length)}
              className="relative w-[300px] sm:w-[380px] lg:w-[410px] aspect-[4/5] cursor-pointer group select-none"
              title="Click to cycle gallery photos"
            >
              {/* Back Card (layer 3) */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden card-image-shadow border border-[#21433D]/15 transition-all duration-500 origin-bottom-right"
                style={{
                  transform: 'translate(38px, 0px) scale(0.88) rotate(1deg)',
                  zIndex: 10,
                  opacity: 0.75,
                }}
              >
                <Image
                  src={offer2.images[(oceanfrontImageIdx + 2) % offer2.images.length]}
                  alt="Oceanfront Villa Shoreline"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* Middle Card (layer 2) */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden card-image-shadow border border-[#21433D]/15 transition-all duration-500 origin-bottom-right"
                style={{
                  transform: 'translate(18px, 0px) scale(0.94) rotate(0.5deg)',
                  zIndex: 20,
                  opacity: 0.9,
                }}
              >
                <Image
                  src={offer2.images[(oceanfrontImageIdx + 1) % offer2.images.length]}
                  alt="Oceanfront Patio"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* Front Card (layer 1) */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden card-image-shadow border border-[#21433D]/15 transition-all duration-500 group-hover:scale-[1.01]"
                style={{
                  zIndex: 30,
                }}
              >
                <Image
                  src={offer2.images[oceanfrontImageIdx]}
                  alt="Oceanfront Paradise Primary View"
                  fill
                  sizes="(max-width: 768px) 300px, 410px"
                  className="object-cover"
                  priority
                />
                
                {/* Gallery indicator hint */}
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-white/80 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon={layers} className="w-3.5 h-3.5" />
                  <span>{oceanfrontImageIdx + 1}/{offer2.images.length} Photos</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
