import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'JASHN by Quadri — Luxury Celebration Experiences',
  description: 'JASHN by Quadri creates extraordinary celebration experiences — luxury weddings, galas, and premium photobooths.',
};

const services = [
  {
    icon: '',
    title: 'Luxury Weddings',
    description: 'From intimate nikkah ceremonies to grand receptions, we orchestrate unforgettable weddings.',
    href: '/services',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: '',
    title: 'Gala Nights',
    description: 'Award ceremonies and corporate galas curated with exquisite detail and a touch of glamour.',
    href: '/services',
    tag: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
  },
  {
    icon: '',
    title: 'Commercial Photobooths',
    description: 'Premium AI-powered installations for brands and hotels. A stunning guest experience.',
    href: '/commercial-photobooths',
    tag: 'B2B',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: '',
    title: 'Brand Activations',
    description: 'Immersive, on-brand experiences that create lasting impressions for global brands.',
    href: '/services',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
  },
];

const galleryImages = [
  '/decor1.jpeg',
  '/decor2.jpeg',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
  '/decor3.jpeg',
  '/decor4.jpeg',
];

export default function HomePage() {
  return (
    <div className="bg-[#080808] text-[#f5f0e8] selection:bg-[#d4a843]/30 w-full overflow-hidden">

      {/* ── Hero (Using your Vimeo Link) ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-black/50 z-10" />
          {/* Vimeo Background Wrapper */}
          <iframe
            src="https://player.vimeo.com/video/1181443196?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Hero Background"
          />
        </div>

        <div className="relative z-20 max-w-5xl flex flex-col items-center">
          <AnimatedSection delay={0}>
            <p className="font-cinzel text-[0.65rem] tracking-[0.6em] uppercase text-[#d4a843] mb-8 mt-12">
              Luxury Celebration Experiences
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-8">
              <span className="block text-white opacity-90">Every</span>
              <span className="block gold-shimmer py-2">Moment</span>
              <span className="block italic text-[#e8c96a] font-serif">Deserves Magic.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-white/60 font-light text-lg md:text-xl leading-relaxed max-w-2xl text-center mb-12">
              Architecting luxury weddings, gala nights, and immersive brand experiences with obsessive attention to detail.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <Button href="/book" size="lg" className="px-12 py-6 bg-[#d4a843] text-black hover:bg-white transition-all">
              Begin Your Journey
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-32 px-6 bg-[#0a0a0a] flex flex-col items-center text-center border-y border-white/5">
        <div className="max-w-4xl">
          <AnimatedSection>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight">
              We Don&apos;t Plan Events.
              <br />
              <em className="text-[#e8c96a] not-italic font-serif">We Compose Memories.</em>
            </h2>
            <div className="flex justify-center mb-10">
              <GoldDivider className="w-32" />
            </div>
            <p className="text-[#888] font-light text-xl leading-relaxed mx-auto max-w-2xl">
              Based in Pakistan, serving the world. At JASHN by Quadri, we blend artisanal craftsmanship with flawless execution to ensure every detail radiates luxury.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Highlight Reel (Using Vimeo) ── */}
      <section className="relative w-full h-[80vh] md:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <iframe
            src="https://player.vimeo.com/video/1181448377?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Highlight Reel"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-6">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4 drop-shadow-md">
              The Experience
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white drop-shadow-lg mb-6">
              A Glimpse of Magic
            </h2>
            <p className="text-white/80 font-light text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md hidden md:block">
              Immerse yourself in a world where every detail is curated to perfection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-32 px-6 bg-[#0a0a0a] flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">Our Expertise</p>
            <h2 className="font-display text-5xl md:text-6xl mb-8">Bespoke Services</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1} className="group flex flex-col items-center text-center">
                <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 rounded-sm border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 w-full flex flex-col items-center px-4">
                    <span className="text-3xl mb-3 block">{service.icon}</span>
                    <h3 className="font-display text-2xl text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-[#888] text-sm font-light leading-relaxed px-4 max-w-sm">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curated Photo Gallery ── */}
      <section className="py-32 px-6 flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">Portfolio</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Curated Moments</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[250px] md:auto-rows-[350px]">
            {galleryImages.map((src, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                className={`relative w-full h-full overflow-hidden border border-white/5 group ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
              >
                <Image
                  src={src}
                  alt="Gallery Image"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer / CTA ── */}
      {/* <footer className="py-32 bg-black flex flex-col items-center text-center px-6 border-t border-white/5">
        <AnimatedSection className="flex flex-col items-center w-full max-w-4xl">
          <h2 className="font-display text-5xl md:text-7xl mb-12">
            Ready to Create Something <br className="hidden md:block" />
            <span className="italic text-[#e8c96a] font-serif">Extraordinary?</span>
          </h2>
          <Button href="/book" size="lg" className="bg-[#d4a843] text-black hover:scale-105 transition-transform">
            Start Planning
          </Button>
          <div className="mt-24 pt-8 w-full border-t border-white/5 text-[#444] font-cinzel text-[0.55rem] tracking-[0.4em] uppercase">
            © {new Date().getFullYear()} JASHN by Quadri. All Rights Reserved.
          </div>
        </AnimatedSection>
      </footer> */}
    </div>
  );
}