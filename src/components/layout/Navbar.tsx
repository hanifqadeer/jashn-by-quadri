'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',                 href: '/'                       },
  { label: 'About',                href: '/about'                  },
  { label: 'Services',             href: '/services'               },
  { label: 'Commercial Photobooths', href: '/commercial-photobooths' },
  { label: 'Book',                 href: '/book'                   },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-dark py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" id="nav-logo" className="flex flex-col leading-none group">
            <span className="font-cinzel text-lg tracking-[0.35em] text-[#e8c96a] uppercase">JASHN</span>
            <span className="font-display italic text-xs tracking-[0.25em] text-[#888] group-hover:text-[#d4a843] transition-colors">by Quadri</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative font-cinzel text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-[#e8c96a]'
                    : 'text-[#bbb] hover:text-[#e8c96a]'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a843] to-transparent"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              id="nav-cta-book"
              className="hidden lg:inline-flex btn-gold text-[0.65rem] px-6 py-2.5"
            >
              <span>Book Now</span>
            </Link>

            {/* Hamburger */}
            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-[#d4a843] origin-center transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-4 h-px bg-[#d4a843]"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-[#d4a843] origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-x-0 top-0 z-40 glass-dark pt-24 pb-10 px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`font-display text-2xl italic transition-colors ${
                      pathname === link.href ? 'text-[#e8c96a]' : 'text-[#f5f0e8] hover:text-[#e8c96a]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="/book" id="mobile-nav-cta" className="btn-gold mt-4 w-full text-center justify-center text-[0.7rem]">
                  <span>Book Your Experience</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
