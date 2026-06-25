/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#A88B3D',
        },
        charcoal: '#1A1A1A',
        graphite: '#2A2A2A',
        cream: '#F5F0E8',
        muted: '#8A8A8A',
        black: '#0A0A0A',
        saffron: '#FF9933',
        maroon: '#800020',
        'royal-purple': '#4B0082',
      },
      animation: {
        'ken-burns': 'kenBurns 12s ease-in-out alternate infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'float-slow': 'float 10s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'gradient-slide': 'gradientSlide 8s ease-in-out infinite',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.8' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(201, 168, 76, 0.15)' },
          '50%': { boxShadow: '0 0 35px rgba(201, 168, 76, 0.35)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(201, 168, 76, 0.2)' },
          '50%': { borderColor: 'rgba(201, 168, 76, 0.6)' },
        },
        gradientSlide: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(201, 168, 76, 0.1)',
        'gold-md': '0 4px 20px rgba(201, 168, 76, 0.15)',
        'gold-lg': '0 8px 40px rgba(201, 168, 76, 0.2)',
        'gold-xl': '0 16px 60px rgba(201, 168, 76, 0.3)',
        'inner-gold': 'inset 0 1px 0 rgba(201, 168, 76, 0.1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
        'radial-gold': 'radial-gradient(circle at center, rgba(201, 168, 76, 0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
}
