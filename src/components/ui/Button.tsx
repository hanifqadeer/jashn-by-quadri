'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'gold' | 'ghost' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  id?: string;
}

const sizeMap = {
  sm: 'px-5 py-2.5 text-[0.65rem]',
  md: 'px-8 py-3.5 text-[0.72rem]',
  lg: 'px-12 py-4.5 text-[0.78rem]',
};

const variantMap = {
  gold: 'btn-gold',
  ghost: 'btn-ghost',
  outline: 'btn-ghost',
};

export default function Button({
  children,
  variant = 'gold',
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  size = 'md',
  external = false,
  id,
}: ButtonProps) {
  const baseClass = `${variantMap[variant]} ${sizeMap[size]} ${className} ${disabled || loading ? 'opacity-50 pointer-events-none' : ''}`;

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : null}
      {children}
    </span>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          id={id}
          href={href}
          className={baseClass}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClass}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
