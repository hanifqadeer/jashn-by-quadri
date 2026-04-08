import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the story behind JASHN by Quadri — our philosophy, team, and commitment to crafting extraordinary luxury celebration experiences in Pakistan.',
};

const values = [
  {
    icon: '✦',
    title: 'Obsessive Detail',
    description: 'Every element of your event is considered with intentionality — from the first petal to the final chord.',
  },
  {
    icon: '◈',
    title: 'Bespoke Excellence',
    description: 'No two events are the same. We craft unique experiences that reflect your story, personality, and vision.',
  },
  {
    icon: '❋',
    title: 'Seamless Execution',
    description: 'Behind the scenes, our team works tirelessly so you can be fully present in your most important moments.',
  },
  {
    icon: '◉',
    title: 'Premium Partnerships',
    description: 'We collaborate with the finest vendors, venues, and artists to ensure every layer of your event is exceptional.',
  },
];

const team = [
  {
    name: 'Quadri',
    role: 'Founder & Creative Director',
    bio: 'With a decade of experience crafting extraordinary events across Pakistan, Quadri brings an unparalleled eye for beauty and an obsessive commitment to perfection.',
  },
  {
    name: 'The Design Team',
    role: 'Visual & Décor Architects',
    bio: 'Our designers transform spaces into immersive environments — blending traditional elegance with contemporary luxury.',
  },
  {
    name: 'The Operations Team',
    role: 'Logistics & Execution Experts',
    bio: 'The backbone of every flawless event, our operations team ensures seamless coordination from setup to finale.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-24 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#d4a843]/6 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-5">
              ✦ &nbsp; Our Story &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-[#f5f0e8] mb-6">
              About <em className="text-[#e8c96a]">JASHN</em>
            </h1>
            <GoldDivider className="my-8 max-w-xs mx-auto" />
            <p className="text-[#666] font-light text-xl leading-relaxed max-w-2xl mx-auto">
              Born from a passion for extraordinary moments, JASHN by Quadri has become Pakistan&apos;s foremost luxury event experience company.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-5">
                The Beginning
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8] mb-6 leading-tight">
                A Vision for
                <br />
                <em className="text-[#e8c96a]">Timeless Celebrations</em>
              </h2>
              <GoldDivider className="mb-8 max-w-xs" />
              <div className="space-y-5 text-[#666] font-light leading-relaxed">
                <p>
                  JASHN — meaning &apos;celebration&apos; in Urdu — was founded on a single belief: every milestone deserves to be marked with beauty, intention, and an experience that transcends the ordinary.
                </p>
                <p>
                  What began as a boutique wedding design studio has grown into a full-spectrum luxury event company, offering services that span from bespoke weddings and gala dinners to commercial photobooth installations and brand activations.
                </p>
                <p>
                  Today, we are trusted by discerning clients, leading brands, and five-star venues across Pakistan to deliver nothing short of extraordinary.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Decorative quote box */}
                <div className="glass border border-[rgba(212,168,67,0.15)] p-10 relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#d4a843]" />
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#d4a843]" />
                  <blockquote className="font-display text-2xl md:text-3xl text-[#f5f0e8] italic leading-relaxed mb-6">
                    &ldquo;We don&apos;t just plan events. We architect the moments our clients will remember for the rest of their lives.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-[#d4a843]" />
                    <span className="font-cinzel text-[0.65rem] tracking-[0.2em] uppercase text-[#d4a843]">Quadri, Founder</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">
              What Guides Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8]">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="glass border border-[rgba(212,168,67,0.1)] p-8 h-full hover:border-[rgba(212,168,67,0.3)] transition-all duration-500 group">
                  <div className="text-[#d4a843] text-2xl mb-5 group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="font-display text-xl text-[#f5f0e8] mb-3">{value.title}</h3>
                  <div className="w-8 h-px bg-[#d4a843] mb-4" />
                  <p className="text-[#555] text-sm font-light leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">
              The Visionaries
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8]">Our Team</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1} direction="left">
                <div className="glass border border-[rgba(212,168,67,0.1)] p-8 flex flex-col md:flex-row gap-6 items-start hover:border-[rgba(212,168,67,0.25)] transition-all duration-500">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#d4a843] text-[#d4a843] font-cinzel text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#f5f0e8] mb-1">{member.name}</h3>
                    <p className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-3">{member.role}</p>
                    <p className="text-[#555] font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-[#080808] text-center">
        <div className="max-w-xl mx-auto px-6">
          <AnimatedSection>
            <GoldDivider className="mb-12" />
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f0e8] mb-6">
              Ready to Create
              <br />
              <em className="text-[#e8c96a]">Together?</em>
            </h2>
            <p className="text-[#555] font-light mb-8">Let&apos;s turn your vision into a living masterpiece.</p>
            <Button href="/book" size="lg" id="about-cta-book">
              Book a Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
