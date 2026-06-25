import React from 'react';
import { motion } from 'framer-motion';
import PortfolioGallery from '../components/PortfolioGallery';

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen"
    >
      {/* Page Header - Enhanced */}
      <section className="relative bg-gradient-to-b from-[#111111] to-black py-32 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Floating particles */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-gold/20 animate-float pointer-events-none" />
        <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 rounded-full bg-gold/15 animate-float-delayed pointer-events-none" />
        <div className="absolute bottom-[30%] left-[60%] w-1 h-1 rounded-full bg-gold/25 animate-float-slow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Mandala */}
          <div className="flex justify-center mb-4 opacity-40">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" />
              <circle cx="18" cy="18" r="10" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="1 2" />
              <circle cx="18" cy="18" r="3" fill="#C9A84C" fillOpacity="0.3" />
            </svg>
          </div>

          <span className="font-poppins text-xs md:text-sm tracking-[0.5em] text-gold uppercase font-semibold">
            VISUAL STORYTELLING
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-extralight text-cream mt-4 tracking-wider uppercase">
            Our <span className="text-gold italic">Portfolio</span>
          </h1>
          <p className="font-poppins text-sm text-muted mt-4 max-w-md mx-auto font-light leading-relaxed">
            Explore our collection of India's most beautiful weddings, portraits, and cultural celebrations
          </p>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>
      </section>

      {/* Portfolio Gallery (Sticky filter bar is inside) */}
      <PortfolioGallery />
    </motion.div>
  );
}
