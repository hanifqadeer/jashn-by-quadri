import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';
import PhotoboothForm from '@/components/forms/PhotoboothForm';

export const metadata: Metadata = {
  title: 'Commercial Photobooths | JASHN by Quadri',
  description: 'Premium AI-powered commercial photobooth solutions for hotels, brands, corporate events, and venues. JASHN by Quadri B2B partnerships.',
};

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Technology',
    description: 'Smart background replacement, beauty filters, and real-time AR overlays powered by cutting-edge artificial intelligence.',
  },
  {
    icon: '🖨️',
    title: 'Instant Premium Prints',
    description: 'High-quality instant photo prints with your custom brand frame. Guests take home a tangible, memorable keepsake.',
  },
  {
    icon: '✏️',
    title: 'Fully Branded Experience',
    description: 'Custom branded overlays, logo frames, themed backdrops, and personalized digital templates that perfectly match your identity.',
  },
  {
    icon: '📲',
    title: 'Digital Share & Engagement',
    description: 'Instant digital delivery via QR code, email, or SMS. Guests organically share your brand on social media in seconds.',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description: 'Comprehensive event analytics — footfall, engagement rates, digital shares, and demographic insights delivered post-event.',
  },
  {
    icon: '🎨',
    title: 'Concept to Delivery',
    description: 'We handle everything — from creative concept and setup to live staffing and teardown. Zero hassle, flawless execution.',
  },
];

const packages = [
  {
    name: 'Standard',
    tag: 'Corporate events & conferences',
    duration: 'Up to 4 hours',
    features: [
      '1 Premium Photobooth Unit',
      'Branded Overlay & Frame',
      'Instant Print (4x6")',
      'Digital Sharing via QR',
      '1 Dedicated Attendant',
      'Event Day Setup & Teardown',
      'Basic Analytics Report',
    ],
  },
  {
    name: 'Premium',
    tag: 'Galas & brand activations',
    duration: 'Up to 6 hours',
    highlight: true,
    features: [
      '1–2 Premium Photobooth Units',
      'Animated Custom Overlays',
      'Instant Print + Digital Sharing',
      'Custom Backdrop Design',
      '2 Dedicated Attendants',
      'AI Background Replacement',
      'Social Media Integration',
      'Detailed Analytics Report',
    ],
  },
  {
    name: 'Enterprise',
    tag: 'Long-term & large-scale',
    duration: 'Custom Duration',
    features: [
      'Multiple Units Available',
      'Fully White-Labelled UI',
      'Custom Software Branding',
      'Ongoing Content Creation',
      'Dedicated Account Manager',
      'Monthly Performance Reports',
      'Priority Technical Support',
      'Custom API Integrations',
    ],
  },
];

const clientTypes = [
  { icon: '🏨', label: 'Hotels & Venues' },
  { icon: '🏪', label: 'Retail Brands' },
  { icon: '🏢', label: 'Corporations' },
  { icon: '🎪', label: 'Agencies' },
  { icon: '💒', label: 'Event Planners' },
  { icon: '🎬', label: 'Entertainment' },
];

export default function CommercialPhotoboothsPage() {
  return (
    <div className="bg-[#080808] text-[#f5f0e8] selection:bg-[#d4a843]/30 w-full overflow-hidden">
      
      {/* ── Page Hero ── */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" 
            alt="Commercial Photobooth Experience" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto pt-24 flex flex-col items-center">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-8">
              ✦ &nbsp; B2B Solutions &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85]">
              Commercial <br />
              <em className="text-[#e8c96a] font-serif">Photobooths</em>
            </h1>
            <div className="flex justify-center mb-10">
              <GoldDivider className="w-40" />
            </div>
            <p className="text-white/70 font-light text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              Premium AI-powered photobooth experiences for brands, venues, and events. Turn every guest interaction into a beautifully branded, shareable moment.
            </p>
            <Button href="#b2b-form" size="lg" className="bg-[#d4a843] text-black hover:bg-white transition-all duration-300">
              Request a Partnership
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Trusted By (Client Types) ── */}
      <section className="py-20 bg-[#0a0a0a] border-y border-white/5 flex flex-col items-center text-center px-6">
        <div className="max-w-6xl w-full">
          <p className="font-cinzel text-[0.6rem] tracking-[0.4em] uppercase text-[#555] mb-12">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {clientTypes.map((type) => (
              <AnimatedSection key={type.label} className="flex flex-col items-center gap-3 text-[#777] hover:text-[#d4a843] transition-colors duration-300">
                <span className="text-3xl opacity-80">{type.icon}</span>
                <span className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase">{type.label}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-32 md:py-40 px-6 bg-[#080808] flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-24">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">What&apos;s Included</p>
            <h2 className="font-display text-5xl md:text-6xl">Feature-Rich Experience</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1} className="flex flex-col items-center">
                <div className="p-12 h-full flex flex-col items-center bg-white/5 border border-white/5 hover:border-[#d4a843]/30 transition-all duration-500 group w-full">
                  <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 opacity-80">{feature.icon}</div>
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-5">{feature.title}</h3>
                  <div className="w-12 h-[1px] bg-[#d4a843]/50 mb-6" />
                  <p className="text-[#777] text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-32 md:py-40 px-6 bg-[#0a0a0a] border-y border-white/5 flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-24">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">Partnership Tiers</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Investment Packages</h2>
            <p className="text-[#888] font-light max-w-xl mx-auto">
              Custom scalable pricing for every footprint — contact us for a tailored proposal.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.1} className="relative flex flex-col">
                <div className={`h-full flex flex-col items-center p-12 border transition-all duration-500 bg-white/5 ${pkg.highlight ? 'border-[#d4a843] shadow-[0_0_30px_rgba(212,168,67,0.1)]' : 'border-white/10 hover:border-[#d4a843]/40'}`}>
                  
                  {pkg.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4a843] text-black font-cinzel text-[0.55rem] tracking-[0.2em] uppercase px-6 py-1.5">
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-display text-3xl text-[#f5f0e8] mb-2">{pkg.name}</h3>
                  <p className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[#d4a843] mb-4">{pkg.duration}</p>
                  <p className="text-[#777] text-xs font-light mb-8 h-8 flex items-center justify-center">{pkg.tag}</p>
                  
                  <div className="w-full h-[1px] bg-white/10 mb-8" />

                  <ul className="flex flex-col gap-4 mb-12 w-full">
                    {pkg.features.map((f) => (
                      <li key={f} className="text-[#bbb] text-sm font-light flex items-center justify-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Button href="#b2b-form" variant={pkg.highlight ? 'gold' : 'ghost'} className={pkg.highlight ? 'bg-[#d4a843] text-black hover:bg-white' : 'border-[#d4a843] text-[#d4a843] hover:bg-[#d4a843] hover:text-black'}>
                      Get a Quote
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B Enquiry Form ── */}
      <section id="b2b-form" className="py-32 md:py-40 px-6 bg-[#080808] flex flex-col items-center text-center">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <AnimatedSection className="mb-20">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">Enquire Now</p>
            <h2 className="font-display text-5xl md:text-6xl text-[#f5f0e8] mb-6">
              Start Your <br className="md:hidden" />
              <em className="text-[#e8c96a] font-serif">Partnership</em>
            </h2>
            <p className="text-[#888] font-light text-lg max-w-xl mx-auto">
              Please provide the details of your venue or upcoming event, and our commercial team will be in touch with a custom proposal.
            </p>
          </AnimatedSection>

          {/* Centered Form Container using Flexbox */}
          <AnimatedSection delay={0.2} className="w-full flex justify-center items-center">
            <div className="bg-white/5 border border-white/10 p-8 md:p-16 text-left shadow-2xl shadow-black rounded-sm w-full max-w-3xl">
              <PhotoboothForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}