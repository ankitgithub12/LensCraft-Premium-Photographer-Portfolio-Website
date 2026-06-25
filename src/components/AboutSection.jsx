import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Animation variants
  const elementVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] py-24 md:py-32 border-t border-gold/10 overflow-hidden"
    >
      {/* Decorative ambient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Portrait Image & Badge */}
          <motion.div
            variants={elementVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            {/* Decorative Gold Frame Offset */}
            <div className="absolute top-[-16px] left-[-16px] w-[280px] h-[360px] md:w-[350px] md:h-[450px] border-2 border-gold/30 z-0 pointer-events-none" />
            
            {/* Corner ornaments on the frame */}
            <div className="absolute top-[-20px] left-[-20px] w-4 h-4 border-t-2 border-l-2 border-gold/60 z-0" />
            <div className="absolute top-[-20px] left-[264px] md:left-[334px] w-4 h-4 border-t-2 border-r-2 border-gold/60 z-0" />

            {/* Main Portrait */}
            <div className="relative z-10 w-[280px] h-[360px] md:w-[350px] md:h-[450px] overflow-hidden bg-charcoal border border-gold/20 shadow-gold-lg group">
              <img
                src="/images/about_artist.png"
                alt="Raj Kapoor - Indian Photographer"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-[800ms] ease-out"
              />
              {/* Subtle vignette on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Experience Years Badge - Enhanced */}
            <div className="absolute bottom-4 right-4 md:-right-6 md:bottom-8 bg-gradient-to-br from-gold to-gold-dark text-black px-6 py-4 shadow-gold-lg z-20 flex flex-col items-center justify-center min-w-[120px] animate-pulse-glow">
              <span className="font-playfair text-4xl font-bold tracking-tight">12</span>
              <span className="font-poppins text-[10px] tracking-[0.1em] uppercase font-semibold text-center mt-1">
                Years of <br /> Excellence
              </span>
            </div>

            {/* Floating decorative dot */}
            <div className="absolute -bottom-4 -left-4 w-3 h-3 rotate-45 bg-gold/30 z-0" />
          </motion.div>

          {/* Right Column - Content & Statistics */}
          <motion.div
            variants={elementVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              {/* Mandala accent */}
              <div className="flex items-center gap-3 mb-2 opacity-40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" />
                  <circle cx="12" cy="12" r="5" stroke="#C9A84C" strokeWidth="0.5" />
                  <circle cx="12" cy="12" r="1.5" fill="#C9A84C" fillOpacity="0.4" />
                </svg>
              </div>

              <span className="font-poppins text-xs md:text-sm tracking-[0.5em] text-gold uppercase font-semibold block">
                ABOUT THE ARTIST
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light italic text-cream">
                Where <span className="text-gold">Art</span> Meets Heritage
              </h2>
              
              {/* Ornamental divider */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-12 h-[1px] bg-gold" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
              </div>
            </div>

            <div className="border-l-2 border-gold/30 pl-6 py-1">
              <p className="font-poppins font-light text-base md:text-lg text-cream/90 leading-relaxed max-w-2xl italic">
                "With over 12 years behind the lens, I have had the privilege of documenting life's most extraordinary moments across India — from the royal palaces of Rajasthan to the serene backwaters of Kerala. My approach blends traditional Indian aesthetics with contemporary vision, creating images that honor our rich cultural heritage while telling deeply personal stories."
              </p>
            </div>

            {/* Signature / Personal Touch */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-10 h-[1px] bg-gold/30" />
              <span className="font-playfair text-lg text-gold italic">Raj Kapoor</span>
              <span className="font-poppins text-xs text-muted tracking-wider">— Lead Photographer</span>
            </div>

            {/* Stats row - Enhanced with better layout */}
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-lg border-t border-gold/20">
              {/* Stat 1 */}
              <div className="flex flex-col group/stat cursor-default">
                <span className="font-playfair text-3xl md:text-4xl text-gold font-bold transition-all duration-300 group-hover/stat:text-gold-light group-hover/stat:translate-x-1 stat-number">500+</span>
                <span className="font-poppins text-[10px] md:text-xs tracking-[0.15em] text-muted uppercase mt-1 transition-colors duration-300 group-hover/stat:text-cream">
                  Weddings
                </span>
              </div>
              
              {/* Divider Line */}
              <div className="border-l border-gold/10 h-12 my-auto mx-auto" />

              {/* Stat 2 */}
              <div className="flex flex-col pl-4 md:pl-0 group/stat cursor-default">
                <span className="font-playfair text-3xl md:text-4xl text-gold font-bold transition-all duration-300 group-hover/stat:text-gold-light group-hover/stat:translate-x-1 stat-number">50+</span>
                <span className="font-poppins text-[10px] md:text-xs tracking-[0.15em] text-muted uppercase mt-1 transition-colors duration-300 group-hover/stat:text-cream">
                  Awards
                </span>
              </div>

              {/* Divider Line */}
              <div className="border-l border-gold/10 h-12 my-auto mx-auto" />

              {/* Stat 3 */}
              <div className="flex flex-col pl-4 md:pl-0 group/stat cursor-default">
                <span className="font-playfair text-3xl md:text-4xl text-gold font-bold transition-all duration-300 group-hover/stat:text-gold-light group-hover/stat:translate-x-1 stat-number">25+</span>
                <span className="font-poppins text-[10px] md:text-xs tracking-[0.15em] text-muted uppercase mt-1 transition-colors duration-300 group-hover/stat:text-cream">
                  Cities
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
