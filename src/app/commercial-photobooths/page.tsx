import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';
import PhotoboothForm from '@/components/forms/PhotoboothForm';

export const metadata: Metadata = {
  title: 'Commercial Photobooths',
  description:
    'Premium AI-powered commercial photobooth solutions for hotels, brands, corporate events, and venues. JASHN by Quadri B2B partnerships.',
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
    description: 'High-quality instant photo prints with your brand frame. Guests take home a tangible, memorable keepsake.',
  },
  {
    icon: '✏️',
    title: 'Fully Branded Experience',
    description: 'Custom branded overlays, logo frames, themed backdrops, and personalized digital templates that match your brand identity.',
  },
  {
    icon: '📲',
    title: 'Digital Share & Engagement',
    description: 'Instant digital delivery via QR code, email, or SMS. Guests share your brand on social media in seconds.',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description: 'Comprehensive event analytics — footfall, engagement rates, digital shares, and demographic insights delivered post-event.',
  },
  {
    icon: '🎨',
    title: 'Concept to Delivery',
    description: 'We handle everything — from creative concept and setup to live staffing and teardown. Zero hassle for you.',
  },
];

const packages = [
  {
    name: 'Standard',
    tag: 'Perfect for corporate events & conferences',
    duration: 'Up to 4 hours',
    features: [
      '1 Premium Photobooth Unit',
      'Branded Overlay & Frame',
      'Instant Print (4x6")',
      'Digital Sharing',
      '1 Dedicated Attendant',
      'Event Day Setup & Teardown',
      'Basic Analytics Report',
    ],
  },
  {
    name: 'Premium',
    tag: 'For weddings, galas & brand activations',
    duration: 'Up to 6 hours',
    highlight: true,
    features: [
      '1–2 Premium Photobooth Units',
      'Custom Branded + Animated Overlays',
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
    tag: 'Long-term placements & large-scale events',
    duration: 'Custom Duration',
    features: [
      'Multiple Units',
      'Fully White-Labelled Experience',
      'Custom Software Branding',
      'Ongoing Content Creation',
      'Dedicated Account Manager',
      'Monthly Performance Reports',
      'Priority Support',
      'Custom Integrations',
    ],
  },
];

const clientTypes = [
  { icon: '🏨', label: 'Hotels & Venues' },
  { icon: '🏪', label: 'Retail Brands' },
  { icon: '🏢', label: 'Corporations' },
  { icon: '🎪', label: 'Marketing Agencies' },
  { icon: '💒', label: 'Wedding Planners' },
  { icon: '🎬', label: 'Entertainment' },
];

export default function CommercialPhotoboothsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-[#d4a843]/6 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-[#b76e79]/4 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-5">
              ✦ &nbsp; B2B Solutions &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-[#f5f0e8] mb-4 leading-tight">
              Commercial
              <br />
              <em className="text-[#e8c96a]">Photobooths</em>
            </h1>
            <GoldDivider className="my-8 max-w-xs mx-auto" />
            <p className="text-[#666] font-light text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Premium AI-powered photobooth experiences for brands, venues, and events. Turn every guest interaction into a branded, shareable moment.
            </p>
            <Button href="#b2b-form" id="photobooth-hero-cta" size="lg">
              Request a Partnership
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Client Types ── */}
      <section className="py-16 bg-[#080808] border-y border-[rgba(212,168,67,0.08)]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cinzel text-[0.6rem] tracking-[0.4em] uppercase text-[#444] text-center mb-8">Trusted By</p>
          <div className="flex flex-wrap justify-center gap-8">
            {clientTypes.map((type) => (
              <div key={type.label} className="flex items-center gap-2 text-[#555]">
                <span className="text-xl">{type.icon}</span>
                <span className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">What&apos;s Included</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8]">Feature-Rich Experience</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <div className="glass border border-[rgba(212,168,67,0.1)] p-8 h-full hover:border-[rgba(212,168,67,0.28)] transition-all duration-500 group">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-display text-xl text-[#f5f0e8] mb-2 group-hover:text-[#e8c96a] transition-colors">{feature.title}</h3>
                  <div className="w-8 h-px bg-[#d4a843] mb-4" />
                  <p className="text-[#555] text-sm font-light leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">Pricing Tiers</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8]">Partnership Packages</h2>
            <p className="text-[#555] font-light mt-4">Custom pricing for every budget — contact us for a tailored quote.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.1}>
                <div className={`relative h-full border p-8 transition-all duration-500 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[rgba(212,168,67,0.08)] to-transparent border-[rgba(212,168,67,0.4)] shadow-[0_0_60px_rgba(212,168,67,0.12)]'
                    : 'glass border-[rgba(212,168,67,0.12)] hover:border-[rgba(212,168,67,0.28)]'
                }`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4a843] to-[#e8c96a] px-4 py-1">
                      <span className="font-cinzel text-[0.55rem] tracking-[0.3em] uppercase text-[#0a0a0a]">Most Popular</span>
                    </div>
                  )}
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-1">{pkg.name}</h3>
                  <p className="font-cinzel text-[0.58rem] tracking-[0.2em] uppercase text-[#d4a843] mb-2">{pkg.duration}</p>
                  <p className="text-[#555] text-xs font-light mb-6">{pkg.tag}</p>
                  <GoldDivider className="mb-6" animated={false} />
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[#888] text-sm font-light">
                        <span className="text-[#d4a843] text-xs">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button href="#b2b-form" variant={pkg.highlight ? 'gold' : 'ghost'} className="w-full justify-center" id={`pkg-cta-${pkg.name.toLowerCase()}`}>
                    Get a Quote
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B Enquiry Form ── */}
      <section id="b2b-form" className="section-padding bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">Enquire Now</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8] mb-4">
              Start Your
              <br />
              <em className="text-[#e8c96a]">Partnership</em>
            </h2>
            <GoldDivider className="mt-6 max-w-xs mx-auto" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass border border-[rgba(212,168,67,0.15)] p-8 md:p-12">
              <PhotoboothForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
