import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gold/20 text-cream pt-24 pb-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16">
          
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="font-playfair text-3xl font-bold text-gold tracking-wide group-hover:text-gold-light transition-colors duration-300">ARIA</span>
              <span className="text-gold text-2xl font-bold font-playfair select-none">•</span>
              <span className="font-poppins text-sm font-light tracking-[0.3em] text-cream uppercase group-hover:text-white transition-colors duration-300">
                PHOTOGRAPHY
              </span>
            </Link>
            <p className="font-poppins font-light text-muted leading-relaxed max-w-sm">
              "Capturing the soul of India, one frame at a time." Premium visual storytelling for weddings, portraits, and cultural celebrations across the subcontinent.
            </p>

            {/* Social Icons Row - Enhanced */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: <Instagram size={18} />, link: 'https://instagram.com', label: 'Instagram' },
                { icon: <Facebook size={18} />, link: 'https://facebook.com', label: 'Facebook' },
                { icon: <Youtube size={18} />, link: 'https://youtube.com', label: 'YouTube' },
                { icon: <Linkedin size={18} />, link: 'https://linkedin.com', label: 'LinkedIn' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gradient-to-br hover:from-gold hover:to-gold-dark hover:text-black hover:border-gold hover:shadow-gold-sm transition-all duration-300 ease-in-out group/icon"
                >
                  <span className="transform group-hover/icon:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1.5 text-muted">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L8.85 4.85L13 5.47L10 8.38L10.71 12.53L7 10.57L3.29 12.53L4 8.38L1 5.47L5.15 4.85L7 1Z" fill="#C9A84C"/>
                </svg>
                <span className="font-poppins text-[10px] tracking-wider uppercase">5-Star Rated</span>
              </div>
              <div className="w-[1px] h-3 bg-gold/20" />
              <span className="font-poppins text-[10px] tracking-wider uppercase text-muted">Est. 2013</span>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="space-y-6">
            <h4 className="font-poppins text-xs font-semibold tracking-[0.3em] text-gold uppercase flex items-center gap-2">
              <div className="w-4 h-[1px] bg-gold/50" />
              GET IN TOUCH
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group/item cursor-default">
                <MapPin className="text-gold shrink-0 mt-1 group-hover/item:text-gold-light transition-colors duration-300" size={16} />
                <span className="font-poppins font-light text-cream text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                  42 Connaught Place, New Delhi, India — 110001
                </span>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <Phone className="text-gold shrink-0 group-hover/item:text-gold-light transition-colors duration-300" size={16} />
                <a
                  href="tel:+919876543210"
                  className="font-poppins font-light text-cream text-sm hover:text-gold transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <Mail className="text-gold shrink-0 group-hover/item:text-gold-light transition-colors duration-300" size={16} />
                <a
                  href="mailto:hello@ariaphotography.in"
                  className="font-poppins font-light text-cream text-sm hover:text-gold transition-colors duration-300"
                >
                  hello@ariaphotography.in
                </a>
              </li>
              <li className="flex items-start space-x-3 group/item cursor-default">
                <Clock className="text-gold shrink-0 mt-1 group-hover/item:text-gold-light transition-colors duration-300" size={16} />
                <span className="font-poppins font-light text-cream text-sm leading-relaxed">
                  Mon–Sat: 10:00 AM – 8:00 PM <br />
                  <span className="text-muted">Sunday: By Appointment</span>
                </span>
              </li>
            </ul>

            {/* Quick Booking CTA */}
            <div className="pt-4">
              <a
                href="mailto:hello@ariaphotography.in?subject=Booking Inquiry"
                className="inline-flex items-center gap-2 font-poppins text-xs tracking-[0.15em] text-gold uppercase border border-gold/30 px-5 py-2.5 hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
              >
                Book a Session
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>

          {/* Column 3 - Google Map */}
          <div className="space-y-6">
            <h4 className="font-poppins text-xs font-semibold tracking-[0.3em] text-gold uppercase flex items-center gap-2">
              <div className="w-4 h-[1px] bg-gold/50" />
              OUR STUDIO
            </h4>
            <div className="relative border border-gold/10 overflow-hidden group">
              <iframe
                title="Aria Photography Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                className="w-full h-48 rounded-sm grayscale contrast-125 opacity-60 group-hover:opacity-90 transition-opacity duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold/10 pointer-events-none group-hover:border-gold/20 transition-colors duration-500" />
            </div>

            {/* Available Cities */}
            <div className="space-y-2">
              <span className="font-poppins text-[10px] tracking-wider text-muted uppercase">Also Available In</span>
              <div className="flex flex-wrap gap-2">
                {['Mumbai', 'Jaipur', 'Udaipur', 'Goa', 'Bangalore'].map((city) => (
                  <span
                    key={city}
                    className="font-poppins text-[10px] tracking-wider text-cream/60 uppercase px-2.5 py-1 border border-gold/10 hover:border-gold/30 hover:text-cream transition-all duration-300 cursor-default"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-gold/10 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="font-poppins text-xs text-muted uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} Aria Photography. All rights reserved.
          </p>
          <p className="font-poppins text-xs text-muted uppercase tracking-[0.1em] flex items-center gap-1.5">
            Crafted with <span className="text-gold animate-pulse">♥</span> in New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}
