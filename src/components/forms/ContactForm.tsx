'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

const initialState: FormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  message: '',
};

const eventTypes = [
  'Wedding',
  'Engagement / Dholki',
  'Birthday Celebration',
  'Corporate Event',
  'Product Launch',
  'Brand Activation',
  'Anniversary',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
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
      const res = await fetch('/api/contact', {
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
        <div className="text-5xl mb-6">✦</div>
        <h3 className="font-display text-3xl text-[#e8c96a] mb-4">Message Received</h3>
        <p className="text-[#888] font-light max-w-md mx-auto">
          Thank you for reaching out. Our team will be in touch within 24 hours to discuss your vision.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-[#d4a843] font-cinzel text-xs tracking-[0.2em] uppercase hover:text-[#e8c96a] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-2">
            Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-2">
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-2">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+92 300 0000000"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-2">
            Event Type *
          </label>
          <select
            id="contact-event-type"
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="eventDate" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-2">
            Event Date
          </label>
          <input
            id="contact-event-date"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label htmlFor="guestCount" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-2">
            Guest Count
          </label>
          <input
            id="contact-guest-count"
            name="guestCount"
            type="text"
            placeholder="Approx. 150"
            value={formData.guestCount}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-2">
          Tell Us About Your Vision *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Describe your dream event — theme, vibe, special requests..."
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
        id="contact-submit"
        type="submit"
        loading={status === 'loading'}
        className="w-full justify-center"
        size="lg"
      >
        Send Your Enquiry
      </Button>
    </form>
  );
}
