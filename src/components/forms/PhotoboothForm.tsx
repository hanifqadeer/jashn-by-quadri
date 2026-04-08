'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface PhotoboothFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  eventType: string;
  eventDate: string;
  duration: string;
  location: string;
  guestCount: string;
  message: string;
}

const initialState: PhotoboothFormData = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  businessType: '',
  eventType: '',
  eventDate: '',
  duration: '',
  location: '',
  guestCount: '',
  message: '',
};

const businessTypes = [
  'Hotel / Venue',
  'Restaurant / F&B',
  'Retail Brand',
  'Corporate / Enterprise',
  'Marketing Agency',
  'Event Management Company',
  'Wedding Planner',
  'Other',
];

const eventTypes = [
  'Corporate Conference',
  'Product Launch',
  'Brand Activation',
  'Wedding Reception',
  'Gala / Award Night',
  'Retail Pop-up',
  'Long-term Placement',
  'Other',
];

const durations = [
  '2 Hours',
  '4 Hours',
  '6 Hours (Full Day)',
  '1 Week',
  '1 Month',
  'Custom / Discuss',
];

export default function PhotoboothForm() {
  const [formData, setFormData] = useState<PhotoboothFormData>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/photobooth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Something went wrong');
      }

      setStatus('success');
      setFormData(initialState);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  };

  const inputClass = `
    w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(212,168,67,0.15)] 
    text-[#f5f0e8] placeholder:text-[#444] text-sm font-light px-4 py-3.5
    focus:outline-none focus:border-[#d4a843] focus:bg-[rgba(212,168,67,0.04)]
    transition-all duration-300
  `;

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-8">
        <div className="text-5xl mb-6 text-[#d4a843]">✦</div>
        <h3 className="font-display text-3xl text-[#e8c96a] mb-4">Enquiry Submitted</h3>
        <p className="text-[#888] font-light max-w-md mx-auto">
          Thank you for your B2B enquiry. Our commercial partnerships team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-[#d4a843] font-cinzel text-xs tracking-[0.2em] uppercase hover:text-[#e8c96a] transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form id="photobooth-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
      {/* Company Details */}
      <div className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase text-[#d4a843] border-b border-[rgba(212,168,67,0.15)] pb-2 mb-4">
        Company Details
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companyName" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Company Name *
          </label>
          <input
            id="photobooth-company-name"
            name="companyName"
            type="text"
            required
            placeholder="Acme Events Ltd."
            value={formData.companyName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Contact Person *
          </label>
          <input
            id="photobooth-contact-person"
            name="contactPerson"
            type="text"
            required
            placeholder="Your full name"
            value={formData.contactPerson}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Email Address *
          </label>
          <input
            id="photobooth-email"
            name="email"
            type="email"
            required
            placeholder="contact@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Phone Number *
          </label>
          <input
            id="photobooth-phone"
            name="phone"
            type="tel"
            required
            placeholder="+92 300 0000000"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
          Business Type *
        </label>
        <select
          id="photobooth-business-type"
          name="businessType"
          required
          value={formData.businessType}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>Select your business type</option>
          {businessTypes.map(type => (
            <option key={type} value={type} className="bg-[#111]">{type}</option>
          ))}
        </select>
      </div>

      {/* Event Details */}
      <div className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase text-[#d4a843] border-b border-[rgba(212,168,67,0.15)] pb-2 mb-4 pt-4">
        Event Details
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Event Type *
          </label>
          <select
            id="photobooth-event-type"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Select event type</option>
            {eventTypes.map(type => (
              <option key={type} value={type} className="bg-[#111]">{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Event Date
          </label>
          <input
            id="photobooth-event-date"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Duration *
          </label>
          <select
            id="photobooth-duration"
            name="duration"
            required
            value={formData.duration}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Select duration</option>
            {durations.map(d => (
              <option key={d} value={d} className="bg-[#111]">{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Location / City *
          </label>
          <input
            id="photobooth-location"
            name="location"
            type="text"
            required
            placeholder="Lahore, Karachi…"
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
            Expected Footfall
          </label>
          <input
            id="photobooth-guest-count"
            name="guestCount"
            type="text"
            placeholder="Approx. 500"
            value={formData.guestCount}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#888] mb-2">
          Additional Notes
        </label>
        <textarea
          id="photobooth-message"
          name="message"
          rows={4}
          placeholder="Brand guidelines, activation concept, special requirements..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <div className="p-4 border border-red-900/40 bg-red-950/20 text-red-400 text-sm font-light">
          {errorMsg}
        </div>
      )}

      <Button
        id="photobooth-submit"
        type="submit"
        loading={status === 'loading'}
        className="w-full justify-center"
        size="lg"
      >
        Submit B2B Enquiry
      </Button>
    </form>
  );
}
