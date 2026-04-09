import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Book Your Experience | JASHN by Quadri',
  description: 'Begin your journey with JASHN by Quadri. Submit a formal enquiry or contact us on Instagram to plan your upcoming luxury celebration.',
};

const steps = [
  { num: '01', title: 'Submit Enquiry', desc: 'Share your vision through our form or send us a direct message on Instagram.' },
  { num: '02', title: 'Discovery Call', desc: 'Our team will reach out promptly to schedule a private, in-depth consultation.' },
  { num: '03', title: 'Proposal', desc: 'You will receive a bespoke design proposal and mood board tailored to your aesthetic.' },
  { num: '04', title: 'Confirm', desc: 'A deposit secures your date in our calendar. From there, the magic truly begins.' },
];

export default function BookPage() {
  const instagramDmUrl = 'https://ig.me/m/JashnByQuadri';

  return (
    <div className="bg-[#080808] text-[#f5f0e8] selection:bg-[#d4a843]/30 w-full overflow-hidden">

      {/* ── Page Hero ── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 scale-105"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/24/40061-426003201_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto pt-24 flex flex-col items-center">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-8">
              ✦ &nbsp; Begin Your Journey &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85]">
              Book Your <br />
              <em className="text-[#e8c96a] font-serif">Experience</em>
            </h1>
            <div className="flex justify-center mb-10">
              <GoldDivider className="w-40" />
            </div>
            <p className="text-white/70 font-light text-xl leading-relaxed max-w-2xl mx-auto">
              Every extraordinary event begins with a single conversation. Let&apos;s start yours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Formal Enquiry Form Section ── */}
      <section className="py-32 md:py-40 bg-[#0a0a0a] flex flex-col items-center text-center px-6 md:px-12 lg:px-20 border-y border-white/5">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <AnimatedSection className="mb-20">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">
              The Details
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[#f5f0e8] mb-6">Send Us Your Vision</h2>
            <p className="text-[#888] font-light text-lg max-w-xl mx-auto">
              Provide us with the foundational details of your celebration. Our creative team will review your enquiry and respond within 24 hours.
            </p>
          </AnimatedSection>

          {/* Explicitly Centered Form Container using Flexbox */}
          <AnimatedSection delay={0.2} className="w-full flex justify-center items-center">
            <div className="bg-white/5 border border-white/10 p-8 md:p-16 text-left shadow-2xl shadow-black rounded-sm w-full max-w-3xl">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Instagram Visual & CTA Section ── */}
      <section className="py-32 md:py-40 bg-[#080808] flex flex-col items-center text-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full flex flex-col items-center">
          <AnimatedSection className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8] mb-6 leading-tight">
              Prefer to Connect via <br className="md:hidden" />
              <span className="text-[#e8c96a] font-serif italic">Instagram?</span>
            </h2>
            <p className="text-[#888] font-light text-lg max-w-xl mx-auto mb-12">
              Skip the form and message us directly. It’s also the perfect place to explore our latest celebrations and find inspiration for your own.
            </p>
            <Button
              href={instagramDmUrl}
              external
              size="lg"
              className="bg-[#d4a843] text-black hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              Send us a DM
            </Button>
            <p className="mt-6 text-[#555] text-xs font-cinzel tracking-widest uppercase">
              @JashnByQuadri
            </p>
          </AnimatedSection>

          {/* Inspiration Grid */}
          <AnimatedSection delay={0.2} className="w-full mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {[
                "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
                "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
                "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800",
                "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800"
              ].map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden border border-white/10 group rounded-sm">
                  <Image
                    src={src}
                    alt="Portfolio Inspiration"
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale hover:grayscale-0 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Booking Steps ── */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] border-y border-white/5 flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-24">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-6">
              The Path to Celebration
            </p>
            <h2 className="font-display text-5xl md:text-6xl">What Happens Next</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1} className="flex flex-col items-center group">
                <span className="font-cinzel text-5xl text-[#d4a843]/10 group-hover:text-[#d4a843]/30 transition-colors duration-500 mb-8">
                  {step.num}
                </span>
                <h3 className="font-display text-2xl text-[#f5f0e8] mb-5">{step.title}</h3>
                <div className="w-12 h-[1px] bg-[#d4a843]/50 mb-8" />
                <p className="text-[#777] text-base font-light leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commercial B2B Fallback ── */}
      <section className="py-32 bg-[#080808] flex flex-col items-center text-center px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <AnimatedSection>
            <h3 className="font-display text-3xl text-[#f5f0e8] mb-8">Commercial Enquiry?</h3>
            <p className="text-[#888] font-light text-lg mb-10 max-w-sm mx-auto">
              Looking for a premium, AI-powered photobooth installation for your brand activation, venue, or corporate event?
            </p>
            <Button href="/commercial-photobooths#b2b-form" variant="ghost" id="book-photobooth-link" className="border-[#d4a843] text-[#d4a843] hover:bg-[#d4a843] hover:text-black transition-all">
              B2B Enquiries
            </Button>
            <div className="w-full h-[1px] bg-white/10 my-16 max-w-xs mx-auto" />
            <p className="text-[#555] text-sm font-light leading-relaxed">
              For direct business correspondence, email us at: <br />
              <a href="mailto:studio@jashnbyquadri.com" className="text-[#bbb] hover:text-[#d4a843] transition-colors mt-2 inline-block">studio@jashnbyquadri.com</a>
            </p>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}