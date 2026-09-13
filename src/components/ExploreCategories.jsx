'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { arrowLeft, arrowRight } from '@/lib/icons';

const defaultCategories = [
  {
    id: 'apartments',
    title: 'Apartment Residences',
    count: '7.200 Properies',
    image: '/images/cat-apartments.png',
  },
  {
    id: 'villas',
    title: 'Modern Villas',
    count: '966 Properies',
    image: '/images/cat-villas.png',
  },
  {
    id: 'farmhouses',
    title: 'Farm Houses',
    count: '245 Properies',
    image: '/images/cat-farmhouses.png',
  },
  {
    id: 'coastal',
    title: 'Coastal Estates',
    count: '312 Properies',
    image: '/images/ad-coastal-serenity.png',
  },
];

export default function ExploreCategories({ onSelectCategory }) {
  const scrollContainerRef = useRef(null);
  const [categories, setCategories] = useState(defaultCategories);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    // Fetch categories from API
    fetch('/api/property')
      .then(res => res.json())
      .then(res => {
        if (res?.data?.categories && res.data.categories.length > 0) {
          setCategories(res.data.categories);
        }
      })
      .catch(() => {
        // Keep default Figma fallback
      });
  }, []);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="categories" className="relative w-full pt-4 pb-20 sm:pb-28 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-0 min-w-0">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 sm:gap-6 lg:gap-14">
            <h2 className="font-manrope font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[130%] tracking-[0%] text-[#F4FFFB] whitespace-nowrap">
              Explore<br className="hidden sm:inline" /> Categories
            </h2>
            <p className="font-manrope font-normal text-[15px] sm:text-[18px] leading-[160%] tracking-[0%] text-[#9ECABC] max-w-[500px]">
              Start exploring at NovaNest Estates and navigate our extensive range of categories to find the living space of your dreams. Each carefully curated, browse through diverse types of homes to discover your ideal residence.
            </p>
          </div>

          {/* Navigation Carousel Buttons */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              type="button"
              aria-label="Previous categories"
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'bg-[#BEDFD4] text-[#21433D] hover:bg-[#cff0e5] cursor-pointer shadow-md'
                  : 'bg-[#2E544A]/60 text-[#71958C] cursor-not-allowed opacity-70'
              }`}
            >
              <Icon icon={arrowLeft} className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              type="button"
              aria-label="Next categories"
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'bg-[#BEDFD4] text-[#21433D] hover:bg-[#cff0e5] cursor-pointer shadow-md'
                  : 'bg-[#2E544A]/60 text-[#71958C] cursor-not-allowed opacity-70'
              }`}
            >
              <Icon icon={arrowRight} className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Categories Cards Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="w-full max-w-full min-w-0 flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat)}
              className="flex-shrink-0 w-[270px] sm:w-[350px] lg:w-[386px] bg-[#F4FFFB] rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 270px, (max-width: 768px) 350px, 386px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="pt-4 pb-2 text-center flex flex-col items-center">
                <h3 className="font-manrope font-semibold text-[18px] sm:text-[21px] leading-[130%] text-[#163331]">
                  {cat.title}
                </h3>
                <p className="font-manrope font-medium text-[13px] sm:text-[14px] text-[#5E7E77] mt-1">
                  {cat.count}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
