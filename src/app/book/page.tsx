import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Book Your Experience',
  description:
    'Begin your journey with JASHN by Quadri. Book a consultation, schedule a call, or enquire about your upcoming celebration.',
};

const steps = [
  { num: '01', title: 'Submit Enquiry', desc: 'Fill out the form below with details about your event and vision.' },
  { num: '02', title: 'Discovery Call', desc: 'Our team will reach out within 24 hours to schedule a detailed consultation.' },
  { num: '03', title: 'Proposal', desc: 'We craft a bespoke proposal tailored exactly to your requirements.' },
  { num: '04', title: 'Deposit & Confirm', desc: 'A deposit secures your date. Then the magic begins.' },
];

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

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
              ✦ &nbsp; Begin Your Journey &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-[#f5f0e8] mb-6">
              Book Your
              <br />
              <em className="text-[#e8c96a]">Experience</em>
            </h1>
            <GoldDivider className="my-8 max-w-xs mx-auto" />
            <p className="text-[#666] font-light text-xl leading-relaxed max-w-2xl mx-auto">
              Every extraordinary event begins with a single conversation. Let&apos;s start yours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="py-16 bg-[#080808] border-y border-[rgba(212,168,67,0.08)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  <span className="font-cinzel text-3xl text-[rgba(212,168,67,0.25)] mb-3">{step.num}</span>
                  <h3 className="font-display text-lg text-[#f5f0e8] mb-2">{step.title}</h3>
                  <div className="w-6 h-px bg-[#d4a843] mb-2" />
                  <p className="text-[#444] text-xs font-light leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form — Main */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <h2 className="font-display text-3xl text-[#f5f0e8] mb-2">Send Us Your Vision</h2>
                <p className="text-[#555] font-light mb-8">Tell us about your dream event and we&apos;ll be in touch within 24 hours.</p>
                <div className="glass border border-[rgba(212,168,67,0.15)] p-8 md:p-10">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Schedule Call */}
              {calendlyUrl && calendlyUrl !== 'TODO' ? (
                <AnimatedSection direction="right" delay={0.1}>
                  <div className="glass border border-[rgba(212,168,67,0.15)] p-8">
                    <h3 className="font-display text-2xl text-[#f5f0e8] mb-2">Prefer to Talk?</h3>
                    <p className="text-[#555] text-sm font-light mb-6">
                      Schedule a 30-minute discovery call directly in our calendar.
                    </p>
                    <Button href={calendlyUrl} external id="book-calendly-cta" className="w-full justify-center">
                      Schedule a Call
                    </Button>
                  </div>
                </AnimatedSection>
              ) : (
                <AnimatedSection direction="right" delay={0.1}>
                  <div className="glass border border-[rgba(212,168,67,0.12)] p-8">
                    <h3 className="font-display text-xl text-[#f5f0e8] mb-2">Prefer to Talk?</h3>
                    <p className="text-[#555] text-sm font-light mb-4">
                      Reach us directly and we&apos;ll schedule a consultation at your convenience.
                    </p>
                    <p className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[#d4a843]">Coming Soon</p>
                  </div>
                </AnimatedSection>
              )}

              {/* What Happens Next */}
              <AnimatedSection direction="right" delay={0.2}>
                <div className="glass border border-[rgba(212,168,67,0.1)] p-8">
                  <h3 className="font-display text-xl text-[#f5f0e8] mb-4">What Happens Next?</h3>
                  <GoldDivider className="mb-5" animated={false} />
                  <ul className="space-y-4">
                    {[
                      'We review your enquiry within 24 hours',
                      'Our team reaches out to schedule a discovery call',
                      'You receive a fully bespoke proposal',
                      'A deposit confirms your event date',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#555] text-sm font-light">
                        <span className="text-[#d4a843] text-xs mt-0.5 flex-shrink-0">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* B2B Photobooth */}
              <AnimatedSection direction="right" delay={0.3}>
                <div className="glass border border-[rgba(212,168,67,0.1)] p-8">
                  <h3 className="font-display text-xl text-[#f5f0e8] mb-2">Commercial Enquiry?</h3>
                  <p className="text-[#555] text-sm font-light mb-5">
                    Looking for a photobooth for your brand, venue, or corporate event?
                  </p>
                  <Button href="/commercial-photobooths#b2b-form" variant="ghost" id="book-photobooth-link" className="w-full justify-center text-[0.65rem]">
                    B2B Photobooth Enquiry
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
