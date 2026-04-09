import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services | JASHN by Quadri',
  description: 'Explore JASHN by Quadri\'s full suite of luxury event services — weddings, galas, corporate events, brand activations, and more.',
};

const services = [
  {
    icon: '🌹',
    category: 'Weddings & Shaadis',
    title: 'Luxury Weddings',
    description: 'We orchestrate weddings from the grandest ballroom receptions to intimate garden nikkah ceremonies. Every element — floral installations, lighting design, catering coordination, entertainment — is curated to perfection.',
    features: ['Bespoke Décor', 'Floral Architecture', 'Lighting Concepts', 'Catering Management'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: '✨',
    category: 'Corporate',
    title: 'Gala Nights & Awards',
    description: 'We produce sophisticated gala evenings, award ceremonies, and corporate dinners that leave a lasting impression on every guest. Seamless logistics, premium staging, and impeccable ambiance.',
    features: ['Stage Production', 'VIP Protocol', 'Live Entertainment', 'Branded Décor'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
  },
  {
    icon: '🎊',
    category: 'Brand Experiences',
    title: 'Brand Activations',
    description: 'Immersive, on-brand experiences that transform ordinary spaces into extraordinary brand moments. From product launches to retail pop-ups, we make sure your brand is the hero.',
    features: ['Concept Development', 'Space Transformation', 'Interactive Tech', 'Social Amplification'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: '📸',
    category: 'Commercial',
    title: 'Premium Photobooths',
    description: 'Elevate your venue or hotel experience with AI-powered, branded installations that guests won\'t stop sharing. Featuring instant printing, custom overlays, and rich analytics.',
    features: ['AI Smart Filters', 'Instant Print', 'Custom Branding', 'Event Analytics'],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop',
  },
];

const packages = [
  {
    name: 'The Essential',
    subtitle: 'Month-Of Coordination',
    price: 'Custom Quote',
    description: 'For the client who has planned their event but needs expert execution to ensure the day flows flawlessly.',
    features: ['Timeline Creation', 'Vendor Management', 'Rehearsal Coordination', 'On-site Execution', 'Post-event Wrap-up'],
    isPopular: false,
  },
  {
    name: 'The Signature',
    subtitle: 'Partial Planning & Design',
    price: 'Custom Quote',
    description: 'The perfect balance of professional guidance and personal involvement. We step in to elevate your vision.',
    features: ['Venue Selection', 'Concept & Design Board', 'Key Vendor Sourcing', 'Budget Management', 'Full Day-Of Coordination'],
    isPopular: true,
  },
  {
    name: 'The Bespoke',
    subtitle: 'Full-Service Production',
    price: 'Custom Quote',
    description: 'Our most comprehensive tier. A limitless, white-glove service where every detail is masterfully architected from scratch.',
    features: ['Unlimited Consultations', 'Immersive 3D Renderings', 'Complete Team Assembly', 'Multi-day Management', 'VIP Concierge'],
    isPopular: false,
  }
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'An in-depth conversation about your vision, expectations, and aesthetic desires.' },
  { step: '02', title: 'Design', desc: 'We craft a bespoke proposal featuring mood boards, concept sketches, and spatial plans.' },
  { step: '03', title: 'Refinement', desc: 'Close collaboration to perfect every textural and logistical detail before the event.' },
  { step: '04', title: 'Execution', desc: 'Flawless on-the-day management, leaving you completely free to be present.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#080808] text-[#f5f0e8] selection:bg-[#d4a843]/30 w-full overflow-hidden">
      
      {/* ── Page Hero ── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Services" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto pt-24 flex flex-col items-center">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-8">
              ✦ &nbsp; What We Offer &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8">
              Our <em className="text-[#e8c96a] font-serif">Services</em>
            </h1>
            <div className="flex justify-center mb-10">
              <GoldDivider className="w-40" />
            </div>
            <p className="text-white/70 font-light text-xl leading-relaxed max-w-2xl mx-auto">
              A full suite of luxury event services, each designed with the same obsessive attention to detail and commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Portfolio Grid ── */}
      <section className="py-32 md:py-40 bg-[#0a0a0a] flex flex-col items-center text-center px-6">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-24">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">
              Our Expertise
            </p>
            <h2 className="font-display text-5xl md:text-6xl">Areas of Mastery</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1} className="flex flex-col items-center group">
                {/* Visual */}
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-white/10 mb-10 rounded-sm">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-2xl">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <p className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase text-[#d4a843] mb-4">
                  {service.category}
                </p>
                <h3 className="font-display text-4xl text-[#f5f0e8] mb-6">{service.title}</h3>
                <div className="w-12 h-[1px] bg-[#d4a843]/50 mb-8" />
                <p className="text-[#888] font-light leading-relaxed max-w-md mb-8">
                  {service.description}
                </p>
                
                {/* Centered Tag Features */}
                <div className="flex flex-wrap justify-center gap-3 max-w-md">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-4 py-1.5 border border-white/10 text-[0.65rem] font-cinzel tracking-widest uppercase text-[#bbb] bg-white/5">
                      {feature}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curated Packages ── */}
      <section className="py-32 md:py-40 px-6 bg-[#080808] border-y border-white/5 flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-24">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">
              Investment
            </p>
            <h2 className="font-display text-5xl md:text-6xl">Curated Collections</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.1} className="relative flex flex-col">
                <div className={`h-full flex flex-col items-center p-12 border transition-all duration-500 bg-white/5 ${pkg.isPopular ? 'border-[#d4a843] shadow-[0_0_30px_rgba(212,168,67,0.1)]' : 'border-white/10 hover:border-[#d4a843]/40'}`}>
                  
                  {pkg.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4a843] text-black font-cinzel text-[0.55rem] tracking-[0.2em] uppercase px-4 py-1.5">
                      Signature Experience
                    </div>
                  )}

                  <h3 className="font-display text-3xl text-[#f5f0e8] mb-2">{pkg.name}</h3>
                  <p className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[#d4a843] mb-8">{pkg.subtitle}</p>
                  
                  <div className="text-xl text-white font-light tracking-wide mb-8">
                    {pkg.price}
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/10 mb-8" />
                  
                  <p className="text-[#888] text-sm font-light leading-relaxed mb-8 h-20">
                    {pkg.description}
                  </p>

                  <ul className="flex flex-col gap-4 mb-12 w-full">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="text-[#bbb] text-sm font-light flex items-center justify-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#d4a843]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Button href={`/book?package=${pkg.name.toLowerCase().replace(' ', '-')}`} variant={pkg.isPopular ? 'gold' : 'ghost'} className={pkg.isPopular ? 'bg-[#d4a843] text-black' : 'border-[#d4a843] text-[#d4a843]'}>
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-32 md:py-40 px-6 bg-[#0a0a0a] flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-24">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">
              How It Works
            </p>
            <h2 className="font-display text-5xl md:text-6xl">The Jashn Process</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1} className="flex flex-col items-center relative group">
                <div className="text-[#d4a843]/10 font-display text-8xl mb-4 group-hover:text-[#d4a843]/20 transition-colors duration-500">
                  {step.step}
                </div>
                <h3 className="font-display text-2xl text-[#f5f0e8] mb-4 -mt-10 relative z-10">{step.title}</h3>
                <div className="w-8 h-[1px] bg-[#d4a843]/50 mb-6" />
                <p className="text-[#777] font-light leading-relaxed text-sm max-w-[250px]">
                  {step.desc}
                </p>
                
                {/* Connector line for desktop */}
                {i !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-6 w-12 h-[1px] bg-white/5" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 md:py-40 px-6 bg-[#080808] border-t border-white/5 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <AnimatedSection>
            <h2 className="font-display text-5xl md:text-7xl mb-10">
              Found Your <br />
              <em className="text-[#e8c96a] font-serif">Perfect Service?</em>
            </h2>
            <p className="text-[#888] font-light text-xl mb-14 max-w-xl mx-auto">
              Let&apos;s bring your vision to life. Reach out and let&apos;s begin crafting your celebration.
            </p>
            <Button href="/book" size="lg" className="bg-[#d4a843] text-black hover:bg-white hover:scale-105 transition-all duration-300">
              Book a Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}