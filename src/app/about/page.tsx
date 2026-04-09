import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldDivider from '@/components/ui/GoldDivider';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us | JASHN by Quadri',
  description: 'Discover the story behind JASHN by Quadri — our philosophy, team, and commitment to crafting extraordinary luxury celebration experiences in Pakistan.',
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
    name: 'Marium Quadri',
    role: 'Founder & Creative Director',
    bio: 'With a decade of experience crafting extraordinary events across Dallas, Marium Quadri brings an unparalleled eye for beauty and an obsessive commitment to perfection.',
    image: 'https://i.pinimg.com/736x/3c/67/75/3c67757cef723535a7484a6c7bfbfc43.jpg',
  },
  {
    name: 'The Design Studio',
    role: 'Visual & Décor Architects',
    bio: 'Our designers transform spaces into immersive environments — blending traditional elegance with contemporary luxury to create breathtaking atmospheres.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'The Operations Unit',
    role: 'Logistics & Execution Experts',
    bio: 'The backbone of every flawless event. Our operations team ensures seamless coordination from the first hour of setup to the grand finale.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080808] text-[#f5f0e8] selection:bg-[#d4a843]/30 w-full overflow-hidden">
      
      {/* ── Page Hero ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Event Atmosphere" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#080808]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto pt-24">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-[#d4a843] mb-8">
              ✦ &nbsp; Our Story &nbsp; ✦
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8">
              About <em className="text-[#e8c96a] font-serif">Jashn</em>
            </h1>
            <div className="flex justify-center mb-10">
              <GoldDivider className="w-40" />
            </div>
            <p className="text-white/70 font-light text-xl leading-relaxed max-w-2xl mx-auto">
              Born from a passion for extraordinary moments, JASHN by Quadri has become Pakistan&apos;s foremost luxury event experience company.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── The Story Section ── */}
      <section className="py-32 bg-[#0a0a0a] flex flex-col items-center text-center px-6 border-y border-white/5">
        <div className="max-w-4xl w-full">
          <AnimatedSection>
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-5">
              The Beginning
            </p>
            <h2 className="font-display text-4xl md:text-6xl mb-12 leading-tight">
              A Vision for <br />
              <em className="text-[#e8c96a] font-serif">Timeless Celebrations</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="relative w-full aspect-video md:aspect-[21/9] mb-16 overflow-hidden border border-white/10 rounded-sm group">
             <Image 
                src="/decor1.jpeg" 
                alt="Event Detailing" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
              />
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="space-y-8 text-[#888] font-light text-lg leading-relaxed max-w-3xl mx-auto items-center text-center">
            <p>
              JASHN — meaning &apos;celebration&apos; in Urdu — was founded on a single belief: every milestone deserves to be marked with beauty, intention, and an experience that transcends the ordinary.
            </p>
            <p>
              What began as a boutique wedding design studio has grown into a full-spectrum luxury event company, offering services that span from bespoke weddings and gala dinners to commercial photobooth installations and immersive brand activations.
            </p>
            <p>
              Today, we are trusted by discerning clients, leading brands, and five-star venues across Pakistan to deliver nothing short of extraordinary.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="mt-20">
            <blockquote className="font-display text-3xl md:text-4xl text-[#f5f0e8] italic leading-relaxed max-w-3xl mx-auto mb-8">
              &ldquo;We don&apos;t just plan events. We architect the moments our clients will remember for the rest of their lives.&rdquo;
            </blockquote>
            <p className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-[#d4a843]">
              — Marium Quadri, Founder
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Visual Break / The Craft ── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop" 
          alt="The Craft" 
          fill 
          className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <h2 className="font-display text-5xl md:text-7xl text-white drop-shadow-xl">
              The <em className="text-[#e8c96a] font-serif">Art</em> of Celebration
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-32 px-6 bg-[#080808] border-y border-white/5 flex flex-col items-center text-center">
        <div className="max-w-7xl w-full">
          <AnimatedSection className="mb-20">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">
              What Guides Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1} className="flex flex-col items-center">
                <div className="p-10 h-full flex flex-col items-center bg-white/5 border border-white/5 hover:border-[#d4a843]/30 transition-all duration-500 group w-full">
                  <div className="text-[#d4a843] text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-4">{value.title}</h3>
                  <div className="w-12 h-px bg-[#d4a843]/50 mb-6" />
                  <p className="text-[#777] text-sm font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-32 px-6 bg-[#0a0a0a] flex flex-col items-center text-center">
        <div className="max-w-6xl w-full">
          <AnimatedSection className="mb-20">
            <p className="font-cinzel text-[0.65rem] tracking-[0.4em] uppercase text-[#d4a843] mb-4">
              The Visionaries
            </p>
            <h2 className="font-display text-5xl md:text-6xl">The Makers of Magic</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1} className="flex flex-col items-center group">
                {/* Team Portrait */}
                <div className="relative w-48 h-64 md:w-full md:h-96 overflow-hidden border border-white/10 mb-8 rounded-sm">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Team Details */}
                <h3 className="font-display text-3xl text-[#f5f0e8] mb-2">{member.name}</h3>
                <p className="font-cinzel text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843] mb-4">{member.role}</p>
                <p className="text-[#777] text-sm font-light leading-relaxed max-w-sm">
                  {member.bio}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 bg-[#080808] border-t border-white/5 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <AnimatedSection>
            <h2 className="font-display text-5xl md:text-7xl mb-8">
              Ready to Create <br />
              <em className="text-[#e8c96a] font-serif">Together?</em>
            </h2>
            <p className="text-[#888] font-light text-xl mb-12 max-w-xl mx-auto">
              Let&apos;s turn your vision into a living masterpiece. Schedule a private consultation with our studio.
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