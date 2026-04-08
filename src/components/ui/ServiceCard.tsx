'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  tag?: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, href, tag, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={href} className="block h-full">
        <div className="relative h-full glass border border-[rgba(212,168,67,0.12)] p-8 overflow-hidden transition-all duration-500 group-hover:border-[rgba(212,168,67,0.35)] group-hover:bg-[rgba(255,255,255,0.06)]">
          {/* Glow top-right */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#d4a843]/5 blur-2xl transition-all duration-500 group-hover:bg-[#d4a843]/15 group-hover:scale-150" />

          {/* Tag */}
          {tag && (
            <span className="inline-block mb-4 px-3 py-1 bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] text-[#e8c96a] font-cinzel text-[0.6rem] tracking-[0.3em] uppercase">
              {tag}
            </span>
          )}

          {/* Icon */}
          <div className="text-4xl mb-5">{icon}</div>

          {/* Title */}
          <h3 className="font-display text-2xl text-[#f5f0e8] mb-3 transition-colors duration-300 group-hover:text-[#e8c96a]">
            {title}
          </h3>

          {/* Divider */}
          <div className="w-10 h-px bg-gradient-to-r from-[#d4a843] to-transparent mb-4 transition-all duration-500 group-hover:w-full" />

          {/* Description */}
          <p className="text-[#888] leading-relaxed text-sm font-light">
            {description}
          </p>

          {/* Arrow */}
          <div className="mt-6 flex items-center gap-2 text-[#d4a843] text-xs font-cinzel tracking-[0.2em] uppercase opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
            Explore
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
