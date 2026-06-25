import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const slides = [
  {
    image: '/images/hero_wedding.png',
    eyebrow: 'ROYAL INDIAN WEDDINGS',
    titlePart1: 'Capturing',
    titlePart2: 'Sacred Bonds',
    subtitle: 'Cinematic storytelling of grand Indian weddings — from intimate mehndi ceremonies to majestic baraat processions.',
    link: '/portfolio'
  },
  {
    image: '/images/hero_portrait.png',
    eyebrow: 'FINE-ART PORTRAITS',
    titlePart1: 'Revealing',
    titlePart2: 'Inner Radiance',
    subtitle: 'Breathtaking portraits that celebrate Indian beauty, heritage, and the timeless elegance of traditional attire.',
    link: '/portfolio'
  },
  {
    image: '/images/hero_event.png',
    eyebrow: 'GRAND CELEBRATIONS',
    titlePart1: 'Documenting',
    titlePart2: 'Festive Splendor',
    subtitle: 'From Diwali galas to sangeet nights — capturing the vibrant energy of India\'s most spectacular celebrations.',
    link: '/portfolio'
  },
  {
    image: '/images/hero_editorial.png',
    eyebrow: 'HERITAGE & EDITORIAL',
    titlePart1: 'Preserving',
    titlePart2: 'Timeless Legacy',
    subtitle: 'Elegant editorial photography showcasing India\'s royal architecture, heritage crafts, and luxury lifestyle.',
    link: '/portfolio'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const timerRef = useRef(null);

  // Track mouse coordinates for background parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Calculate position offset relative to center of screen (max offset 20px)
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Reset auto-play timer
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleSelectSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const handleScrollDown = () => {
    const featuredSection = document.getElementById('featured-gallery');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Framer Motion Animation Variants for Image Zoom & Mouse Parallax
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.08
    },
    center: (custom) => ({
      opacity: 1,
      scale: 1.03,
      x: custom.x,
      y: custom.y,
      transition: {
        opacity: { duration: 0.8 },
        scale: { duration: 1.5, ease: 'easeOut' },
        x: { type: 'tween', ease: 'easeOut', duration: 0.6 },
        y: { type: 'tween', ease: 'easeOut', duration: 0.6 }
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        opacity: { duration: 0.8 }
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Slides Background Container */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden scale-105">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentIndex}
            custom={mousePos}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.eyebrow}
              className="w-full h-full object-cover object-center"
            />
            {/* Multi-layer Vignette for Premium Feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-gold/30 animate-float" />
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-gold/20 animate-float-delayed" />
        <div className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-gold/25 animate-float-slow" />
        <div className="absolute top-[50%] right-[25%] w-2.5 h-2.5 rounded-full bg-gold/15 animate-float" />
        <div className="absolute bottom-[40%] left-[60%] w-1.5 h-1.5 rounded-full bg-gold/20 animate-float-delayed" />
      </div>

      {/* Radial gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12),transparent_55%)] pointer-events-none z-10" />
      
      {/* Top decorative border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-30" />

      {/* Content overlay */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-center"
          >
            {/* Decorative Mandala Pattern Top */}
            <motion.div
              custom={0}
              variants={textVariants}
              className="mb-4 opacity-40"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 4" />
                <circle cx="20" cy="20" r="12" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="1 3" />
                <circle cx="20" cy="20" r="3" fill="#C9A84C" fillOpacity="0.3" />
              </svg>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              custom={0.1}
              variants={textVariants}
              className="font-poppins text-xs md:text-sm tracking-[0.5em] text-gold uppercase mb-6 font-semibold"
            >
              {currentSlide.eyebrow}
            </motion.p>

            {/* Title */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase mb-2">
              <motion.span
                custom={0.3}
                variants={textVariants}
                className="block text-cream font-light"
              >
                {currentSlide.titlePart1}
              </motion.span>
              <motion.span
                custom={0.5}
                variants={textVariants}
                className="block text-gold italic font-light lowercase first-letter:uppercase mt-2"
              >
                {currentSlide.titlePart2}
              </motion.span>
            </h1>

            {/* Ornamental Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 my-8 origin-center"
            >
              <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 border border-gold/60" />
              <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              custom={0.9}
              variants={textVariants}
              className="font-poppins text-sm md:text-base lg:text-lg font-light text-cream/80 max-w-lg leading-relaxed mb-12"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* CTA Button - Enhanced with gradient border and glow */}
            <motion.button
              custom={1.1}
              variants={textVariants}
              onClick={() => navigate(currentSlide.link)}
              className="group relative px-10 py-4 border border-gold text-gold font-poppins text-xs md:text-sm tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 hover:text-black hover:border-gold-light hover:shadow-gold-md"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 ease-out group-hover:w-full -z-10" />
              <span className="relative z-10 flex items-center gap-3">
                View Portfolio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Side Decorative Vertical Lines */}
      <div className="hidden md:block absolute left-12 top-[20%] bottom-[20%] w-[1px] bg-gradient-to-b from-transparent via-gold/15 to-transparent z-25 pointer-events-none" />
      <div className="hidden md:block absolute right-12 top-[20%] bottom-[20%] w-[1px] bg-gradient-to-b from-transparent via-gold/15 to-transparent z-25 pointer-events-none" />

      {/* Navigation Chevrons (Desktop Only) - Enhanced */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 border border-gold/20 hover:border-gold hover:bg-gold/10 items-center justify-center text-gold transition-all duration-300 z-35 group backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} className="transform group-hover:-translate-x-[2px] transition-transform duration-300" />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 border border-gold/20 hover:border-gold hover:bg-gold/10 items-center justify-center text-gold transition-all duration-300 z-35 group backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} className="transform group-hover:translate-x-[2px] transition-transform duration-300" />
      </button>

      {/* Custom Bottom Progress Indicators - Enhanced */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center gap-6 z-30">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectSlide(idx)}
            className="flex items-center group py-2 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className={`font-poppins text-[10px] tracking-wider mr-2 font-medium transition-colors duration-300 ${
              currentIndex === idx ? 'text-gold' : 'text-muted'
            }`}>
              {`0${idx + 1}`}
            </span>
            <div className="relative w-12 h-[2px] bg-graphite overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-gold to-gold-light transition-all ease-linear ${
                  currentIndex === idx ? 'w-full' : 'w-0'
                }`}
                style={{
                  transitionDuration: currentIndex === idx ? '6000ms' : '0s'
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Bouncing Scroll Down Chevron */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 text-gold hover:text-gold-light focus:outline-none"
        aria-label="Scroll down to content"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
