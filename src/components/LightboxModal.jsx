import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  
  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg"
      >
        {/* Clickable background to close */}
        <div className="absolute inset-0 cursor-default" onClick={onClose} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gold transition-colors duration-300 z-50 p-2"
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>

        {/* Left Control Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-charcoal/50 border border-gold/10 hover:border-gold hover:bg-black/80 flex items-center justify-center text-gold transition-all duration-300 z-50"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Control Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-charcoal/50 border border-gold/10 hover:border-gold hover:bg-black/80 flex items-center justify-center text-gold transition-all duration-300 z-50"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Main Image Container */}
        <div className="relative max-h-[85vh] max-w-[90vw] md:max-w-[80vw] z-40 flex flex-col items-center">
          <motion.img
            key={currentImage.url}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={currentImage.url}
            alt={currentImage.title}
            className="max-h-[80vh] max-w-full object-contain rounded-sm border border-gold/20 shadow-2xl select-none"
          />

          {/* Caption / Image Info */}
          <div className="absolute bottom-[-60px] left-0 right-0 text-left px-2 flex flex-col pointer-events-none">
            <span className="font-playfair text-lg text-cream tracking-wide">
              {currentImage.title}
            </span>
            <span className="font-poppins text-xs text-gold uppercase tracking-[0.25em] mt-1 font-semibold">
              {currentImage.category}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
