import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import LightboxModal from './LightboxModal';

const portfolioItems = [
  {
    url: '/images/hero_wedding.png',
    category: 'Weddings',
    aspect: 'aspect-[3/4]',
    title: 'Royal Bridal Grace'
  },
  {
    url: '/images/gallery_mehndi.png',
    category: 'Weddings',
    aspect: 'aspect-square',
    title: 'Mehndi Artistry'
  },
  {
    url: '/images/hero_portrait.png',
    category: 'Portraits',
    aspect: 'aspect-[2/3]',
    title: 'Ethereal Beauty'
  },
  {
    url: '/images/hero_event.png',
    category: 'Events',
    aspect: 'aspect-[4/3]',
    title: 'Grand Celebration'
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
    title: 'Holi Festival'
  },
  {
    url: '/images/gallery_couple.png',
    category: 'Portraits',
    aspect: 'aspect-[3/4]',
    title: 'Palace Romance'
  },
  {
    url: '/images/gallery_jewelry.png',
    category: 'Heritage',
    aspect: 'aspect-square',
    title: 'Bridal Jewelry'
  },
  {
    url: '/images/gallery_palace.png',
    category: 'Heritage',
    aspect: 'aspect-[4/3]',
    title: 'Taj Mahal Sunrise'
  },
  {
    url: '/images/gallery_street.png',
    category: 'Culture',
    aspect: 'aspect-[3/2]',
    title: 'Colorful Jaipur'
  },
  {
    url: '/images/about_artist.png',
    category: 'Portraits',
    aspect: 'aspect-[3/4]',
    title: 'The Photographer'
  }
];

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Heritage', 'Culture'];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index) => {
    setLightbox({ isOpen: true, index });
  };

  const handleCloseLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const handlePrevImage = () => {
    setLightbox(prev => ({
      ...prev,
      index: (prev.index - 1 + filteredItems.length) % filteredItems.length
    }));
  };

  const handleNextImage = () => {
    setLightbox(prev => ({
      ...prev,
      index: (prev.index + 1) % filteredItems.length
    }));
  };

  return (
    <>
      {/* Sticky Filter Bar - Enhanced */}
      <div className="sticky top-[72px] z-30 bg-black/80 backdrop-blur-md border-b border-gold/10 py-6 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === 'All'
              ? portfolioItems.length
              : portfolioItems.filter(i => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-poppins text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-gold to-gold-dark text-black border-gold font-semibold shadow-gold-sm'
                    : 'bg-transparent text-muted border-transparent hover:text-gold hover:border-gold/30'
                }`}
              >
                {cat}
                <span className={`text-[9px] font-normal ${isActive ? 'text-black/60' : 'text-muted/50'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Gallery Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.url + item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(idx)}
                className="break-inside-avoid mb-6 relative overflow-hidden rounded-sm group cursor-zoom-in border border-gold/10 bg-charcoal hover:border-gold/25 transition-all duration-500"
              >
                {/* Image */}
                <div className={`w-full ${item.aspect} overflow-hidden`}>
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Hover Overlay - Enhanced */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-400 flex flex-col justify-between p-5 z-10">
                  {/* Category Badge - Top Right */}
                  <div className="flex justify-end items-start">
                    <span className="font-poppins text-[9px] font-semibold tracking-widest text-black bg-gradient-to-r from-gold to-gold-light px-2.5 py-1 uppercase rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon - Center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 bg-black/40 p-3 rounded-full border border-white/20 backdrop-blur-sm">
                      <Maximize2 size={20} />
                    </div>
                  </div>

                  {/* Title - Bottom Left */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="font-playfair text-sm text-cream font-light italic tracking-wide">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Corner Decoratives */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/30 transition-all duration-500 z-20" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/30 transition-all duration-500 z-20" />

                {/* Slide-Up Gold Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        images={filteredItems}
        currentIndex={lightbox.index}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </>
  );
}
