import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, User, Star, Briefcase, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Heart size={32} className="text-gold" />,
    title: 'Wedding Photography',
    description: 'From grand baraat processions to intimate phera ceremonies — capturing every sacred moment of your Indian wedding with cinematic artistry.',
    highlight: 'Mehndi • Sangeet • Mandap • Reception'
  },
  {
    icon: <User size={32} className="text-gold" />,
    title: 'Portrait Sessions',
    description: 'Elegant portraits celebrating Indian beauty and heritage. From bridal shoots to editorial fashion — we craft images that tell your story.',
    highlight: 'Bridal • Fashion • Maternity • Family'
  },
  {
    icon: <Star size={32} className="text-gold" />,
    title: 'Event Coverage',
    description: 'Vibrant coverage of festivals, corporate galas, and cultural celebrations. Documenting the energy, colors, and emotions of every gathering.',
    highlight: 'Diwali • Holi • Corporate • Sangeet'
  },
  {
    icon: <Camera size={32} className="text-gold" />,
    title: 'Heritage & Editorial',
    description: 'Showcasing India\'s architectural splendor, luxury brands, and royal heritage through sophisticated editorial and commercial imagery.',
    highlight: 'Architecture • Products • Interiors • Lifestyle'
  }
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative bg-black py-24 md:py-32 border-t border-gold/10 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[200px] pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header - Enhanced */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          {/* Decorative mandala */}
          <div className="flex justify-center mb-4 opacity-40">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" />
              <circle cx="16" cy="16" r="8" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="1 2" />
              <circle cx="16" cy="16" r="2" fill="#C9A84C" fillOpacity="0.4" />
            </svg>
          </div>

          <span className="font-poppins text-xs md:text-sm tracking-[0.5em] text-gold uppercase font-semibold">
            OUR EXPERTISE
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light italic text-cream mt-3">
            Crafting <span className="text-gold">Visual</span> Stories
          </h2>
          <p className="font-poppins text-sm text-muted mt-4 max-w-md mx-auto font-light leading-relaxed">
            Every frame we capture is a tribute to India's vibrant culture and timeless beauty
          </p>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Services Grid - Enhanced Glass Cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className="group relative glass-card rounded-[4px] p-8 md:p-10 flex flex-col justify-between cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/0 group-hover:from-gold/[0.03] group-hover:to-transparent transition-all duration-500 rounded-[4px] pointer-events-none" />
              
              <div className="relative z-10">
                {/* Icon Container - Enhanced */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-charcoal/50 border border-gold/15 rounded-sm mb-6 group-hover:border-gold/30 group-hover:bg-charcoal/80 transition-all duration-300 group-hover:shadow-gold-sm">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-poppins font-semibold text-xl text-cream group-hover:text-gold transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-poppins font-light text-sm text-muted leading-relaxed group-hover:text-cream/80 transition-colors duration-300 mb-4">
                  {service.description}
                </p>

                {/* Service Tags */}
                <p className="font-poppins text-[10px] tracking-wider text-gold/50 uppercase group-hover:text-gold/70 transition-colors duration-300">
                  {service.highlight}
                </p>
              </div>

              {/* Bottom CTA Arrow Link */}
              <Link
                to="/portfolio"
                className="relative z-10 mt-8 flex items-center text-xs tracking-widest uppercase font-semibold text-gold group-hover:text-gold-light transition-colors duration-300"
              >
                View Work 
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>

              {/* Corner decorative elements */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/20 transition-all duration-500 rounded-tr-[4px]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/0 group-hover:border-gold/20 transition-all duration-500 rounded-bl-[4px]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
