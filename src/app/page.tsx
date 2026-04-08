import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'JASHN by Quadri — Luxury Celebration Experiences',
  description:
    'JASHN by Quadri creates extraordinary celebration experiences — luxury weddings, galas, corporate events, and premium photobooths in Pakistan.',
};

const services = [
  {
    icon: '🌹',
    title: 'Luxury Weddings',
    description: 'From intimate nikkah ceremonies to grand receptions, we orchestrate unforgettable weddings infused with beauty and grace.',
    href: '/services',
    tag: 'Signature',
  },
  {
    icon: '✨',
    title: 'Gala Nights',
    description: 'Award ceremonies, corporate galas, and charity dinners — curated with exquisite detail and a touch of glamour.',
    href: '/services',
    tag: 'Corporate',
  },
  {
    icon: '📸',
    title: 'Commercial Photobooths',
    description: 'Premium AI-powered and branded photobooths for hotels, brands, and events. A stunning guest experience every time.',
    href: '/commercial-photobooths',
    tag: 'B2B',
  },
  {
    icon: '🎊',
    title: 'Brand Activations',
    description: 'Immersive, on-brand experiences that create lasting impressions. We make your brand the centre of every celebration.',
    href: '/services',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#d4a843]/8 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#b76e79]/5 blur-3xl" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#d4a843]/5 blur-3xl" />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(212,168,67,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Pre-heading */}
          <AnimatedSection delay={0}>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-6">
              ✦ &nbsp; Luxury Celebration Experiences &nbsp; ✦
            </p>
          </AnimatedSection>

          {/* Main heading */}
          <AnimatedSection delay={0.15}>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
              <span className="block text-[#f5f0e8]">Every</span>
              <span className="block gold-shimmer">Moment</span>
              <span className="block text-[#f5f0e8]">Deserves</span>
              <span className="block italic text-[#e8c96a]">Magic</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <GoldDivider className="my-8 max-w-xs mx-auto" />
          </AnimatedSection>

          {/* Sub-copy */}
          <AnimatedSection delay={0.4}>
            <p className="text-[#888] font-light text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
              We architect celebrations that live beyond the evening — weddings, galas, photobooths, and brand experiences crafted with obsessive detail.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book" size="lg" id="hero-cta-book">
                Begin Your Journey
              </Button>
              <Button href="/services" variant="ghost" size="lg" id="hero-cta-services">
                Explore Services
              </Button>
            </div>
          </AnimatedSection>

          {/* Scroll hint */}
          <AnimatedSection delay={0.7}>
            <div className="mt-16 flex flex-col items-center gap-2 text-[#333]">
              <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#d4a843]" />
              <span className="font-cinzel text-[0.55rem] tracking-[0.3em] uppercase">Scroll</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section className="section-padding bg-[#080808] text-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <GoldDivider className="mb-12" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">
              Our Philosophy
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="font-display text-5xl md:text-6xl text-[#f5f0e8] leading-tight mb-6">
              We Don&apos;t Plan Events.
              <br />
              <em className="text-[#e8c96a]">We Compose Memories.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-[#666] font-light text-lg leading-relaxed max-w-2xl mx-auto">
              At JASHN by Quadri, each celebration is a bespoke creation. We blend artisanal craftsmanship with flawless execution, ensuring every detail radiates luxury and intention.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <GoldDivider className="mt-12" />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">
              What We Do
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[#f5f0e8]">
              Our Services
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.1} />
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Button href="/services" variant="ghost" id="home-view-all-services">
              View All Services
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'Events Curated' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Brand Partners' },
              { value: '6+', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="flex flex-col items-center">
                <span className="font-display text-5xl md:text-6xl gold-shimmer">{stat.value}</span>
                <GoldDivider className="my-3 w-full max-w-[80px]" animated={false} ornament={false} />
                <span className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#555]">{stat.label}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photobooth Teaser ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden glass border border-[rgba(212,168,67,0.12)] p-12 lg:p-20">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a843]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">
                  B2B Partnership
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8] mb-5 leading-tight">
                  Commercial
                  <br />
                  <em className="text-[#e8c96a]">Photobooths</em>
                </h2>
                <GoldDivider className="my-6 max-w-xs" />
                <p className="text-[#666] font-light leading-relaxed mb-8">
                  Elevate your venue, brand event, or hotel experience with our premium photobooth installations. AI-powered, branded, instant-print — your guests will love it.
                </p>
                <Button href="/commercial-photobooths" id="home-photobooth-cta">
                  Explore Partnerships
                </Button>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🤖', title: 'AI-Powered', desc: 'Smart filters and digital overlays' },
                    { icon: '🖨️', title: 'Instant Print', desc: 'Premium photo prints on-site' },
                    { icon: '✏️', title: 'Custom Branded', desc: 'Logo frames and brand overlays' },
                    { icon: '📊', title: 'Analytics', desc: 'Event data and engagement reports' },
                  ].map((feature) => (
                    <div key={feature.title} className="glass p-5 border border-[rgba(212,168,67,0.08)]">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h4 className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[#d4a843] mb-1">{feature.title}</h4>
                      <p className="text-[#555] text-xs font-light">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative section-padding bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4a843]/5 via-transparent to-[#b76e79]/5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">
              ✦ &nbsp; Ready? &nbsp; ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f0e8] mb-6">
              Let&apos;s Create
              <br />
              <em className="text-[#e8c96a]">Something Extraordinary</em>
            </h2>
            <p className="text-[#666] font-light text-lg mb-10">
              Your vision. Our expertise. An experience beyond imagination.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book" size="lg" id="bottom-cta-book">
                Start Planning
              </Button>
              <Link
                href="/about"
                id="bottom-cta-about"
                className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#666] hover:text-[#d4a843] transition-colors"
              >
                Learn About Us →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
