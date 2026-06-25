import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const featuredImages = [
  {
    url: '/images/hero_wedding.png',
    category: 'Weddings',
    aspect: 'aspect-[3/4]',
    title: 'Royal Bridal Grace'
  },
  {
    url: '/images/hero_portrait.png',
    category: 'Portraits',
    aspect: 'aspect-[2/3]',
    title: 'Ethereal Beauty'
  },
  {
    url: '/images/gallery_mehndi.png',
    category: 'Weddings',
    aspect: 'aspect-square',
    title: 'Mehndi Artistry'
  },
  {
    url: '/images/hero_event.png',
    category: 'Events',
    aspect: 'aspect-[4/3]',
    title: 'Grand Celebrations'
  },
  {
    url: '/images/hero_editorial.png',
    category: 'Heritage',
    aspect: 'aspect-[3/2]',
    title: 'Haveli Elegance'
  },
  {
    url: '/images/gallery_classical_dance.png',
    category: 'Culture',
    aspect: 'aspect-[2/3]',
    title: 'Bharatanatyam Grace'
  },
  {
    url: '/images/gallery_ceremony.png',
    category: 'Weddings',
    aspect: 'aspect-[3/4]',
    title: 'Sacred Pheras'
  },
  {
    url: '/images/gallery_festival.png',
    category: 'Events',
    aspect: 'aspect-square',
    title: 'Holi Celebrations'
  },
  {
    url: '/images/gallery_couple.png',
    category: 'Portraits',
    aspect: 'aspect-[3/4]',
    title: 'Palace Romance'
  }
];

function GalleryCard({ item, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="break-inside-avoid mb-6 relative overflow-hidden rounded-sm group cursor-pointer border border-gold/10 hover:border-gold/30 transition-all duration-500"
    >
      {/* Aspect Ratio Container for Masonry Stability */}
      <div className={`w-full ${item.aspect} overflow-hidden bg-charcoal`}>
        <img
          src={item.url}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.06] transition-transform duration-[800ms] ease-out"
        />
      </div>

      {/* Hover Overlay - Enhanced with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 group-hover:from-black/80 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500 flex flex-col justify-end p-6 z-10">
        {/* Category tag - always visible with subtle styling */}
        <span className="font-poppins text-[10px] font-semibold tracking-[0.2em] text-gold uppercase opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 mb-1.5">
          {item.category}
        </span>
        <span className="font-playfair text-lg text-cream/90 italic font-light opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-75">
          {item.title}
        </span>
      </div>

      {/* Corner Decorative Bracket */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/0 group-hover:border-gold/40 transition-all duration-500 z-20" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/0 group-hover:border-gold/40 transition-all duration-500 z-20" />

      {/* Slide-Up Gold Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
    </motion.div>
  );
}

export default function FeaturedGallery() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="featured-gallery" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header - Enhanced */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          {/* Mandala Ornament */}
          <div className="flex justify-center mb-4 opacity-40">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" />
              <circle cx="16" cy="16" r="8" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="1 2" />
              <circle cx="16" cy="16" r="2" fill="#C9A84C" fillOpacity="0.4" />
            </svg>
          </div>

          <span className="font-poppins text-xs md:text-sm tracking-[0.5em] text-gold uppercase font-semibold">
            OUR WORK
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light italic text-cream mt-3">
            Featured <span className="text-gold">Masterpieces</span>
          </h2>
          <p className="font-poppins text-sm text-muted mt-4 max-w-md mx-auto font-light leading-relaxed">
            A curated collection showcasing the beauty, culture, and timeless traditions of India
          </p>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Masonry Layout: CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {featuredImages.map((item, idx) => (
            <GalleryCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* CTA to Portfolio - Enhanced */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/portfolio')}
            className="group relative inline-flex items-center gap-3 font-poppins text-xs md:text-sm tracking-[0.2em] text-gold uppercase px-8 py-3 border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-400 ease-in-out"
          >
            Explore Full Portfolio
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
