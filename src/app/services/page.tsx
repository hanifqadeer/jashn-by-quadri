import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore JASHN by Quadri\'s full suite of luxury event services — weddings, galas, corporate events, brand activations, and more.',
};

const services = [
  {
    icon: '🌹',
    category: 'Weddings & Shaadis',
    title: 'Luxury Weddings',
    description: 'We orchestrate weddings from the grandest ballroom receptions to intimate garden nikkah ceremonies. Every element — floral installations, lighting design, catering coordination, entertainment — is curated to perfection.',
    features: ['Bespoke Décor Design', 'Floral Architecture', 'Lighting Concepts', 'Catering Coordination', 'Entertainment Curation', 'Day-of Management'],
  },
  {
    icon: '✨',
    category: 'Corporate',
    title: 'Gala Nights & Award Dinners',
    description: 'We produce sophisticated gala evenings, award ceremonies, and corporate dinners that leave a lasting impression on every guest. Seamless logistics, premium staging, and impeccable ambiance.',
    features: ['Stage & AV Production', 'Award Show Management', 'VIP Protocol', 'Live Entertainment', 'Branded Décor', 'On-night Direction'],
  },
  {
    icon: '🎊',
    category: 'Brand Experiences',
    title: 'Brand Activations',
    description: 'Immersive, on-brand experiences that transform ordinary spaces into extraordinary brand moments. From product launches to retail pop-ups, we make sure your brand is the hero.',
    features: ['Concept Development', 'Space Transformation', 'Interactive Experiences', 'Photobooth Integration', 'Brand Touchpoints', 'Social Media Activations'],
  },
  {
    icon: '🎂',
    category: 'Social Events',
    title: 'Birthday & Milestone Events',
    description: 'From milestone birthdays and intimate dinner parties to baby showers and anniversary soirées — every personal celebration deserves the luxury treatment.',
    features: ['Custom Themes', 'Dessert Tablescapes', 'Balloon Installations', 'Entertainment', 'Photography Setup', 'Full Service Planning'],
  },
  {
    icon: '🏢',
    category: 'Corporate',
    title: 'Corporate Conferences',
    description: 'Professional, polished, and powerfully presented. We handle the logistics so your team can focus entirely on the content and connections.',
    features: ['Venue Sourcing', 'Seating & Layout', 'Branding & Signage', 'Catering Management', 'A/V & Tech Setup', 'Full Day Coordination'],
  },
  {
    icon: '💎',
    category: 'Bespoke',
    title: 'Fully Bespoke Events',
    description: 'Have a unique vision that doesn\'t fit a category? We love a blank canvas. Our bespoke service is for clients who want something utterly unique, conceived just for them.',
    features: ['One-on-One Consultation', 'Mood Board Creation', 'Vendor Network Access', 'Full Creative Control', 'White Glove Service', 'Unlimited Revisions'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#d4a843]/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-5">
              ✦ &nbsp; What We Offer &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-[#f5f0e8] mb-6">
              Our <em className="text-[#e8c96a]">Services</em>
            </h1>
            <GoldDivider className="my-8 max-w-xs mx-auto" />
            <p className="text-[#666] font-light text-xl leading-relaxed max-w-2xl mx-auto">
              A full suite of luxury event services, each designed with the same obsessive attention to detail and commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="glass border border-[rgba(212,168,67,0.12)] p-10 lg:p-14 hover:border-[rgba(212,168,67,0.28)] transition-all duration-500 group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                  {/* Left */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-5 mb-5">
                      <span className="text-4xl">{service.icon}</span>
                      <div>
                        <span className="font-cinzel text-[0.58rem] tracking-[0.3em] uppercase text-[#d4a843] block mb-1">{service.category}</span>
                        <h2 className="font-display text-3xl text-[#f5f0e8] group-hover:text-[#e8c96a] transition-colors">{service.title}</h2>
                      </div>
                    </div>
                    <GoldDivider className="mb-6" />
                    <p className="text-[#666] font-light text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Right — Features */}
                  <div className="lg:col-span-2">
                    <p className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase text-[#555] mb-5">Includes</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-[#888] text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8]">The JASHN Process</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              { step: '01', title: 'Discovery Call', desc: 'We begin with an in-depth conversation about your vision, expectations, and budget.' },
              { step: '02', title: 'Proposal & Design', desc: 'Our team crafts a bespoke proposal with mood boards, concept sketches, and a detailed plan.' },
              { step: '03', title: 'Refinement', desc: 'We collaborate closely with you to perfect every detail until the concept is exactly right.' },
              { step: '04', title: 'Execution', desc: 'On your day, our team manages every element with precision — leaving you free to simply enjoy.' },
            ].map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="flex items-start gap-8 glass border border-[rgba(212,168,67,0.1)] p-8 hover:border-[rgba(212,168,67,0.25)] transition-all duration-500">
                  <span className="font-cinzel text-4xl text-[rgba(212,168,67,0.2)] font-bold flex-shrink-0 leading-none">{step.step}</span>
                  <div>
                    <h3 className="font-display text-2xl text-[#f5f0e8] mb-2">{step.title}</h3>
                    <p className="text-[#555] font-light">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-[#0a0a0a] text-center">
        <div className="max-w-xl mx-auto px-6">
          <AnimatedSection>
            <GoldDivider className="mb-12" />
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8] mb-6">
              Found Your
              <br />
              <em className="text-[#e8c96a]">Perfect Service?</em>
            </h2>
            <p className="text-[#555] font-light mb-8">Let&apos;s bring your vision to life. Reach out and let&apos;s begin.</p>
            <Button href="/book" size="lg" id="services-cta-book">
              Book a Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
