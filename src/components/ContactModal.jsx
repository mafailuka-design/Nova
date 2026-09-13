'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { x, check } from '@/lib/icons';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-lg bg-[#142F2A] border border-[#2B574D] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#234A41]">
          <div>
            <h3 className="text-xl font-bold text-white">Contact NovaNest</h3>
            <p className="text-xs text-[#8BAFA6] mt-0.5">Speak with a dedicated luxury estate specialist</p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Icon icon={x} className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Icon icon={check} className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Message Delivered</h4>
            <p className="text-sm text-[#8BAFA6] mt-1 max-w-xs">
              Thank you for contacting NovaNest Estates. An advisor will reach out to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#8BAFA6] mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Eleanor Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#193A33] border border-[#2B574D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-sage placeholder-[#5E7E77]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8BAFA6] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="eleanor@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#193A33] border border-[#2B574D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-sage placeholder-[#5E7E77]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8BAFA6] mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 234-5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#193A33] border border-[#2B574D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-sage placeholder-[#5E7E77]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8BAFA6] mb-1">
                Your Inquiry
              </label>
              <textarea
                rows={3}
                required
                placeholder="I am interested in exploring available luxury properties..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#193A33] border border-[#2B574D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-sage placeholder-[#5E7E77] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7EA99E] hover:bg-[#8EBDB1] text-[#163331] font-bold text-sm py-3.5 rounded-xl transition-all shadow-md active:scale-95 mt-2 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
