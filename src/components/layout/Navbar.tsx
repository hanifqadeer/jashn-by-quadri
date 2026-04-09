'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',                 href: '/' },
  { label: 'About',                href: '/about' },
  { label: 'Services',             href: '/services' },
  { label: 'Commercial Photobooths', href: '/commercial-photobooths' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { 
    setMenuOpen(false); 
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md py-4 border-white/5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        {/* Changed from max-w-7xl to w-full for true edge-to-edge coverage */}
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          
          {/* ── Left: Logo ── */}
          <div className="w-1/4 flex justify-start">
            <Link 
              href="/" 
              id="nav-logo" 
              className="flex flex-col items-center group"
            >
              <img 
                src="/logo.JPEG" 
                alt="JASHN Logo" 
                className={`object-contain transition-all duration-500 origin-left ${scrolled ? 'h-8' : 'h-10'}`} 
              />
            </Link>
          </div>

          {/* ── Center: Desktop Navigation ── */}
          <nav className="hidden lg:flex w-2/4 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative font-cinzel text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-[#e8c96a]'
                    : 'text-[#bbb] hover:text-[#e8c96a]'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── Right: CTA & Hamburger ── */}
          <div className="flex items-center justify-end gap-4 w-1/4">
            <Link
              href="/book"
              id="nav-cta-book"
              className="hidden lg:inline-flex border border-[#d4a843] text-[#d4a843] hover:bg-[#d4a843] hover:text-black font-cinzel text-[0.6rem] tracking-widest uppercase px-6 py-2.5 transition-colors duration-300 whitespace-nowrap"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger */}
            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden flex flex-col gap-1.5 p-2 group z-50 relative"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1px] bg-[#d4a843] origin-center transition-all duration-300"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-4 h-[1px] bg-[#d4a843] transition-all duration-300"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[1px] bg-[#d4a843] origin-center transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-xl pt-32 pb-10 px-8 flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 w-full">
              {[...navLinks, { label: 'Book Now', href: '/book' }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-display text-4xl italic transition-colors ${
                      pathname === link.href ? 'text-[#d4a843]' : 'text-[#f5f0e8] hover:text-[#e8c96a]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <div className="w-12 h-[1px] bg-[#d4a843]/30 mx-auto" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}