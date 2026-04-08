'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
  threshold?: number;
}

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 50  }, visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60  }, visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0         }, visible: { opacity: 1      } },
};

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
  threshold = 0.15,
  ...motionProps
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: once });
  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
