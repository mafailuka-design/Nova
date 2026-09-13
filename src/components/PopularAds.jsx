'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { maximize, bed, bath, check } from '@/lib/icons';

const defaultProperties = [
  {
    id: 'urban-oasis',
    title: 'Urban Oasis',
    price: '$500,000',
    location: 'Downtown Metropolitan Area',
    size: '120m²',
    beds: '2 Bedrooms',
    baths: '2 Bathrooms',
    image: '/images/ad-urban-oasis.png',
  },
  {
    id: 'coastal-serenity',
    title: 'Coastal Serenity',
    price: '$1,200,000',
    location: 'Beachfront Property, Coastal Area',
    size: '250m²',
    beds: '4 Bedrooms',
    baths: '3 Bathrooms',
    image: '/images/ad-coastal-serenity.png',
  },
  {
    id: 'contemporary-haven',
    title: 'Contemporary Haven',
    price: '$2,000,000',
    location: 'Suburban Luxury Community',
    size: '400m²',
    beds: '5 Bedrooms',
    baths: '4 Bathrooms',
    image: '/images/ad-contemporary-haven.png',
  },
  {
    id: 'tranquil-farmstead',
    title: 'Tranquil Farmstead',
    price: '$800,000',
    location: 'Rural Countryside, Farming District',
    size: '800m²',
    beds: '3 Bedrooms',
    baths: '2 Bathrooms',
    image: '/images/ad-tranquil-farmstead.png',
  },
];

export default function PopularAds({ onPropertyClick }) {
  const [properties, setProperties] = useState(defaultProperties);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    fetch('/api/property')
      .then(res => res.json())
      .then(res => {
        if (res?.data?.property) {
          const p = res.data.property;
          setProperties(prev => [
            {
              ...prev[0],
              title: p.prop_type ? `${p.prop_type} Sanctuary` : prev[0].title,
              price: p.formatted_price || prev[0].price,
              location: p.address?.city ? `${p.address.city}, ${p.address.state_code}` : prev[0].location,
              size: p.building_size?.size ? `${p.building_size.size} sqft` : prev[0].size,
              beds: p.beds ? `${p.beds} Bedrooms` : prev[0].beds,
              baths: p.baths ? `${p.baths} Bathrooms` : prev[0].baths,
            },
            ...prev.slice(1)
          ]);
        }
      })
      .catch(() => {
        // Keep static fallback
      });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section id="popular-ads" className="relative w-full py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-0">
        
        {/* Section Header */}
        <div className="text-center max-w-[620px] mx-auto mb-12 sm:mb-20">
          <h2 className="font-manrope font-semibold text-[28px] sm:text-[32px] leading-[130%] tracking-[0%] text-center text-[#F4FFFB]">
            Popular Ads of This Week
          </h2>
          <p className="mt-3.5 font-manrope font-normal text-[15px] sm:text-[18px] leading-[160%] tracking-[0%] text-center text-[#9ECABC]">
            Explore our handpicked selection of popular listings at NovaNest Estates, showcasing a diverse range of exceptional properties that capture the essence of luxury living.
          </p>
        </div>

        {/* 3-Column Grid: 4 Property Cards (2x2) + 1 Tall Newsletter Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* First 2 Columns: 4 Property Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {properties.map((prop) => (
              <div
                key={prop.id}
                onClick={() => onPropertyClick && onPropertyClick(prop)}
                className="bg-[#F4FFFB] rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Image container with exact drop shadow: X 0 Y -4 blur 10 spread 5 #21433D26 15% and border */}
                  <div 
                    className="relative w-full aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200 border border-[#21433D]/10 card-image-shadow"
                  >
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={true}
                    />
                  </div>

                  <div className="pt-4 px-1">
                    <h3 className="font-manrope font-semibold text-[18px] sm:text-[20px] text-[#163331] tracking-tight group-hover:text-[#21433D] transition-colors">
                      {prop.title}
                    </h3>
                    <p className="font-manrope font-bold text-[16px] sm:text-[18px] text-[#163331] mt-1">
                      {prop.price}
                    </p>
                    <p className="font-manrope font-medium text-[12px] sm:text-[13px] text-[#5E7E77] mt-1">
                      {prop.location}
                    </p>
                  </div>
                </div>

                {/* Specs with Exact Reference Icons */}
                <div className="pt-4 mt-4 px-1 border-t border-[#DDECE7] flex items-center justify-between text-[#5E7E77] font-manrope text-[12px] sm:text-[13px] font-medium">
                  <div className="flex items-center gap-1.5">
                    <Icon icon={maximize} className="w-3.5 h-3.5 text-[#5E7E77]" />
                    <span>{prop.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon icon={bed} className="w-4 h-4 text-[#5E7E77]" />
                    <span>{prop.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon icon={bath} className="w-4 h-4 text-[#5E7E77]" />
                    <span>{prop.baths}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Third Column: Gold Newsletter Card with goldenbg in ./resources */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl bg-[#fbbd23] text-[#163331]">
            
            {/* Background goldenbg image from ./resources */}
            <Image
              src="/images/goldenbg.png"
              alt="Golden background texture"
              fill
              className="object-cover object-center pointer-events-none select-none z-0"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />

            <div className="relative z-10 flex flex-col">
              {/* Emblem icon */}
              <div className="relative w-8 h-8 mb-5">
                <Image
                  src="/images/logo.png"
                  alt=""
                  fill
                  className="object-contain filter brightness-0"
                />
              </div>

              <h3 className="font-manrope font-bold text-[24px] sm:text-[28px] leading-[120%] tracking-tight text-[#163331]">
                The most intriguing, unique, and novel offers.
              </h3>

              <div className="mt-5 flex flex-col gap-3 font-manrope text-[#163331]/90 text-[13.5px] sm:text-[14px] leading-relaxed">
                <p>
                  Stay updated with the latest trends, market insights, and exclusive property offers by subscribing to our real estate newsletter.
                </p>
                <p>
                  Receive curated content straight to your inbox, including tips for buyers, sellers, and investors.
                </p>
                <p>
                  Don't miss out on the opportunity to be informed and inspired. Subscribe now!
                </p>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="relative z-10 mt-8 flex flex-col gap-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  placeholder="Your email address"
                  className="w-full bg-[#F4FFFB] text-[#163331] placeholder-[#668B82] font-manrope text-sm px-4 py-3.5 rounded-xl border border-transparent focus:border-[#163331]/40 focus:outline-none shadow-sm transition-all"
                />
                {emailError && (
                  <p className="text-xs text-red-900 font-medium mt-1 pl-1">
                    {emailError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={subscribed}
                className="w-full bg-[#BEDFD4] hover:bg-[#cff0e5] text-[#21433D] font-manrope font-semibold text-sm sm:text-base py-3.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Icon icon={check} className="w-4 h-4 text-[#21433D]" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
