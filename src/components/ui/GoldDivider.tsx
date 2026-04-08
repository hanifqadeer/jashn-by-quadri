'use client';

import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
  animated?: boolean;
  ornament?: boolean;
}

export default function GoldDivider({ className = '', animated = true, ornament = true }: GoldDividerProps) {
  if (!animated) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex-1 divider-gold" />
        {ornament && <span className="text-gold-400 text-xs tracking-[0.4em]">✦</span>}
        {ornament && <div className="flex-1 divider-gold" />}
      </div>
    );
  }

  return (
    <motion.div
      className={`flex items-center gap-4 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex-1 divider-gold" />
      {ornament && (
        <motion.span
          className="text-[#d4a843] text-xs"
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ✦
        </motion.span>
      )}
      {ornament && <div className="flex-1 divider-gold" />}
    </motion.div>
  );
}
