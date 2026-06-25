import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' }
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.4,
        ease: [0.7, 0, 0.84, 0]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-lg'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo - Enhanced */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="font-playfair text-2xl md:text-3xl font-bold text-gold tracking-wide transition-colors duration-300 group-hover:text-gold-light">
              ARIA
            </span>
            <span className="text-gold text-xl font-bold font-playfair select-none">•</span>
            <span className="font-poppins text-xs font-light tracking-[0.3em] text-cream uppercase transition-colors duration-300 group-hover:text-white">
              PHOTOGRAPHY
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-poppins text-sm tracking-[0.2em] uppercase transition-colors duration-300 py-1 ${
                    isActive
                      ? 'text-gold font-medium active'
                      : 'text-cream/80 hover:text-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Book Now CTA - New */}
            <a
              href="mailto:hello@ariaphotography.in?subject=Booking Inquiry"
              className="font-poppins text-xs tracking-[0.15em] text-gold uppercase border border-gold/40 px-5 py-2 hover:bg-gold hover:text-black transition-all duration-300 hidden lg:inline-flex"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5 z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-full h-[2px] bg-gold rounded transition-all duration-300 origin-left ${
                isMobileMenuOpen ? 'rotate-[42deg] translate-y-[2px]' : ''
              }`}
            />
            <span
              className={`w-full h-[2px] bg-gold rounded transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`w-full h-[2px] bg-gold rounded transition-all duration-300 origin-left ${
                isMobileMenuOpen ? '-rotate-[42deg] -translate-y-[2px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-black/95 z-40 flex flex-col justify-center items-center text-center px-6"
          >
            {/* Visual Gold Lines */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gold/5 pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gold/5 pointer-events-none" />

            <div className="flex flex-col space-y-8 z-10">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block font-playfair text-3xl tracking-widest uppercase transition-colors duration-300 ${
                        isActive ? 'text-gold italic font-bold' : 'text-cream hover:text-gold-light'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  {/* Subtle divider */}
                  <div className="w-12 h-[1px] bg-gold/20 mx-auto mt-4" />
                </motion.div>
              ))}

              {/* Mobile Book Now */}
              <motion.div variants={linkVariants}>
                <a
                  href="mailto:hello@ariaphotography.in?subject=Booking Inquiry"
                  className="inline-block font-poppins text-sm tracking-[0.2em] text-gold uppercase border border-gold/40 px-8 py-3 hover:bg-gold hover:text-black transition-all duration-300 mt-4"
                >
                  Book Now
                </a>
              </motion.div>
            </div>

            {/* Bottom brand representation inside mobile menu */}
            <div className="absolute bottom-12 text-center z-10">
              <span className="font-playfair text-lg text-gold/60 tracking-wider">ARIA PHOTOGRAPHY</span>
              <p className="text-xs text-muted/60 mt-1 uppercase tracking-widest">New Delhi • Est. 2013</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
