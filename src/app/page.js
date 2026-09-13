'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExploreCategories from '@/components/ExploreCategories';
import ExclusiveOffers from '@/components/ExclusiveOffers';
import PopularAds from '@/components/PopularAds';
import MobileApp from '@/components/MobileApp';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import PropertyModal from '@/components/PropertyModal';
import ContactModal from '@/components/ContactModal';

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenProperty = (property) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
  };

  const handleOpenExplore = () => {
    setSelectedProperty({
      title: 'Quail Village Luxury Residence',
      price: '$585,000',
      oldPrice: '$620,000',
      location: '9504 Quail Village Ln, Austin, TX 78758',
      size: '1,850 sqft',
      beds: '3 Bedrooms',
      baths: '2 Bathrooms',
      image: '/images/offer-apartment-main.png',
    });
    setIsPropertyModalOpen(true);
  };

  const handleSelectCategory = (cat) => {
    handleOpenProperty({
      title: cat.title,
      price: 'Starting from $600,000',
      location: 'Curated Global Portfolio',
      size: '150m² - 450m²',
      beds: '2 - 5 Bedrooms',
      baths: '2 - 4 Bathrooms',
      image: cat.image,
    });
  };

  return (
    <main className="relative min-h-screen bg-site-pattern overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar
        onExploreClick={handleOpenExplore}
        onContactClick={() => setIsContactModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={handleOpenExplore}
        onContactClick={() => setIsContactModalOpen(true)}
      />

      {/* Explore Categories Section */}
      <ExploreCategories onSelectCategory={handleSelectCategory} />

      {/* Exclusive Offers Section */}
      <ExclusiveOffers onPropertyClick={handleOpenProperty} />

      {/* Popular Ads Section */}
      <PopularAds onPropertyClick={handleOpenProperty} />

      {/* Mobile Application Section */}
      <MobileApp />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Banner Section */}
      <CtaBanner onGetStarted={() => setIsContactModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Property Details Modal (API integration) */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isPropertyModalOpen}
        onClose={() => setIsPropertyModalOpen(false)}
      />

      {/* Contact Us Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
}
