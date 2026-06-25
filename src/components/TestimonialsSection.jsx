import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya & Arjun Sharma',
    role: 'Wedding, Udaipur',
    text: 'Raj captured our royal Udaipur wedding with such grace and artistry. Every photograph feels like a painting — the colors, the emotions, the traditions. He made our mehndi ceremony look absolutely magical.',
    rating: 5
  },
  {
    name: 'Ananya Desai',
    role: 'Bridal Portrait, Mumbai',
    text: 'The portrait session was beyond my expectations. Raj has an incredible eye for light and he made me feel so comfortable in my lehenga. The photos are stunning — my family was moved to tears.',
    rating: 5
  },
  {
    name: 'Vikram & Kavya Patel',
    role: 'Destination Wedding, Goa',
    text: 'Our beach wedding in Goa was perfectly captured. From the sangeet night to the pheras at sunset, every single moment was documented beautifully. Aria Photography is truly world-class.',
    rating: 5
  },
  {
    name: 'Meera Joshi',
    role: 'Cultural Event, Jaipur',
    text: 'We hired Aria for our Diwali corporate gala at the City Palace. The photographs captured the grandeur and warmth of the evening perfectly. Professional, discreet, and incredibly talented.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A0A0A] py-24 md:py-32 border-t border-gold/10 overflow-hidden"
    >
      {/* Decorative backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          {/* Mandala */}
          <div className="flex justify-center mb-4 opacity-40">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" />
              <circle cx="16" cy="16" r="8" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="1 2" />
              <circle cx="16" cy="16" r="2" fill="#C9A84C" fillOpacity="0.4" />
            </svg>
          </div>

          <span className="font-poppins text-xs md:text-sm tracking-[0.5em] text-gold uppercase font-semibold">
            CLIENT LOVE
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-light italic text-cream mt-3">
            Words of <span className="text-gold">Gratitude</span>
          </h2>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Large Quote Icon */}
          <div className="absolute -top-4 left-8 md:left-12 opacity-10 z-0">
            <Quote size={80} className="text-gold" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="testimonial-glass rounded-sm p-10 md:p-14 relative z-10"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#C9A84C">
                    <path d="M8 1L9.85 5.85L15 6.47L11 9.38L12.18 14.53L8 12.07L3.82 14.53L5 9.38L1 6.47L6.15 5.85L8 1Z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-poppins font-light text-base md:text-lg text-cream/90 leading-relaxed italic mb-8 max-w-2xl">
                "{current.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-gold/40" />
                <div>
                  <p className="font-poppins font-semibold text-sm text-cream">
                    {current.name}
                  </p>
                  <p className="font-poppins text-xs text-gold tracking-wider uppercase mt-0.5">
                    {current.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-gold/20 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-gold transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-gold w-6' : 'bg-gold/20 hover:bg-gold/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 border border-gold/20 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-gold transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
