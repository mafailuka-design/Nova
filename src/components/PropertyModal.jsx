'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { x, maximize, bed, bath, checkCircle } from '@/lib/icons';

export default function PropertyModal({ property, isOpen, onClose }) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'realty-api'
  const [tourDate, setTourDate] = useState('');
  const [tourBooked, setTourBooked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch('/api/property')
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching property data:', err);
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentProp = property || {
    title: 'Featured Property',
    price: '$600,000',
    location: 'Downtown Metropolitan Area',
    size: '120m²',
    beds: '2 Bedrooms',
    baths: '2 Bathrooms',
    image: '/images/offer-apartment-main.png',
  };

  const handleBookTour = (e) => {
    e.preventDefault();
    if (!tourDate) return;
    setTourBooked(true);
    setTimeout(() => {
      setTourBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-3xl bg-[#142F2A] border border-[#2B574D] rounded-3xl overflow-hidden shadow-2xl my-8 text-white max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#234A41] bg-[#112622]">
          <div className="flex items-center gap-3">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {currentProp.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Icon icon={x} className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#234A41] px-6 bg-[#122A25]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-brand-sage text-white'
                : 'border-transparent text-[#8BAFA6] hover:text-white'
            }`}
          >
            Property Overview
          </button>
          <button
            onClick={() => setActiveTab('realty-api')}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'realty-api'
                ? 'border-brand-sage text-white'
                : 'border-transparent text-[#8BAFA6] hover:text-white'
            }`}
          >
            <span>Address Details</span>
            <span className="text-[10px] bg-[#224A40] text-[#7EA99E] px-2 py-0.5 rounded">
              Austin, TX
            </span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {activeTab === 'overview' ? (
            <>
              {/* Primary Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                <Image
                  src={currentProp.image || '/images/offer-apartment-main.png'}
                  alt={currentProp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-white">
                  <span className="text-xl sm:text-2xl font-bold">{currentProp.price}</span>
                  {currentProp.oldPrice && (
                    <span className="ml-2 text-sm text-[#8BAFA6] line-through font-normal">
                      {currentProp.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Overview Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#193A33] border border-[#295349]">
                <div className="flex items-center gap-3">
                  <Icon icon={maximize} className="w-5 h-5 text-brand-sage" />
                  <div>
                    <p className="text-xs text-[#8BAFA6]">Living Area</p>
                    <p className="text-sm font-semibold">{currentProp.size || '120m²'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon={bed} className="w-5 h-5 text-brand-sage" />
                  <div>
                    <p className="text-xs text-[#8BAFA6]">Bedrooms</p>
                    <p className="text-sm font-semibold">{currentProp.beds || '3 Beds'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon={bath} className="w-5 h-5 text-brand-sage" />
                  <div>
                    <p className="text-xs text-[#8BAFA6]">Bathrooms</p>
                    <p className="text-sm font-semibold">{currentProp.baths || '2 Baths'}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-2">Location</h4>
                <p className="text-[#A0BFB8] text-sm">
                  {currentProp.location || 'Downtown Metropolitan Area'}
                </p>
              </div>

              {/* Schedule Tour Form */}
              <div className="p-5 rounded-2xl bg-[#102420] border border-[#21473E]">
                <h4 className="text-base font-semibold text-white mb-2">
                  Request a Private Viewing
                </h4>
                <p className="text-xs text-[#8BAFA6] mb-4">
                  Select your preferred date for an exclusive guided walkthrough.
                </p>

                {tourBooked ? (
                  <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-sm flex items-center gap-2">
                    <Icon icon={checkCircle} className="w-5 h-5" />
                    <span>Your private viewing request has been confirmed for {tourDate}!</span>
                  </div>
                ) : (
                  <form onSubmit={handleBookTour} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="date"
                      required
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="bg-[#1A3D37] border border-[#2C594E] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-sage"
                    />
                    <button
                      type="submit"
                      className="bg-[#7EA99E] hover:bg-[#8EBDB1] text-[#163331] font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      Book Tour
                    </button>
                  </form>
                )}
              </div>
            </>
          ) : (
            /* Tab 2: Realtor API live address */
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-[#193A33] border border-[#295349]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-brand-sage uppercase tracking-wider">
                      Featured Listing
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      9504 Quail Village Ln, Austin, TX 78758
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-brand-sage">
                      {apiData?.data?.formatted_price || '$585,000'}
                    </span>
                    <p className="text-xs text-[#8BAFA6]">Estimated Value</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#295349] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[#8BAFA6] block">Property Type</span>
                    <span className="font-semibold text-white">Single Family</span>
                  </div>
                  <div>
                    <span className="text-[#8BAFA6] block">Bedrooms / Baths</span>
                    <span className="font-semibold text-white">3 Beds / 2 Baths</span>
                  </div>
                  <div>
                    <span className="text-[#8BAFA6] block">Building Size</span>
                    <span className="font-semibold text-white">1,850 sqft</span>
                  </div>
                  <div>
                    <span className="text-[#8BAFA6] block">Year Built</span>
                    <span className="font-semibold text-white">1984</span>
                  </div>
                </div>
              </div>



              {/* Photos Gallery from API */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-3">Property Photos</h5>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40">
                    <Image src="/images/ad-contemporary-haven.png" alt="Austin property" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40">
                    <Image src="/images/ad-coastal-serenity.png" alt="Austin property interior" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40">
                    <Image src="/images/offer-apartment-main.png" alt="Austin property living" fill className="object-cover" />
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#112622] border-t border-[#234A41] flex items-center justify-between">
          <span className="text-xs text-[#8BAFA6]">NovaNest Luxury Real Estate Portfolio</span>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-lg bg-[#224A40] hover:bg-[#2B5B4E] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
