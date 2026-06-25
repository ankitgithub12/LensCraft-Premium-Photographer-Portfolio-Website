<p align="center">
  <img src="public/favicon.svg" alt="LensCraft Logo" width="80" height="80" />
</p>

<h1 align="center">LensCraft — Premium Photographer Portfolio</h1>

<p align="center">
  <strong>A luxury photography portfolio website with cinematic animations, elegant design, and an immersive gallery experience.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.2-FF0066?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## ✨ Overview

**LensCraft** is a premium, fully responsive photographer portfolio website built for **Aria Photography** — a luxury fine-art photography studio. The site features cinematic hero transitions, smooth scroll-triggered animations, a filterable portfolio gallery with a lightbox viewer, and an elegant dark theme accented with gold.

> Designed to captivate at first glance and leave a lasting impression.

---

## 🖼️ Features

| Feature | Description |
|---|---|
| **Cinematic Hero Slider** | Full-screen hero section with Ken Burns zoom effects and auto-rotating slides |
| **Scroll Animations** | Smooth reveal animations powered by Framer Motion on every section |
| **Portfolio Gallery** | Filterable, categorized gallery (Weddings, Portraits, Events, Fine Art) |
| **Lightbox Modal** | Full-screen image viewer with navigation and keyboard support |
| **Testimonials Carousel** | Client testimonials with animated card transitions |
| **Services Showcase** | Elegant service cards with hover effects and gold accents |
| **About Section** | Photographer bio with achievements counter and artistic layout |
| **Responsive Navigation** | Transparent navbar with scroll-aware styling and mobile hamburger menu |
| **Premium Footer** | Multi-column footer with social links, quick navigation, and newsletter CTA |
| **Page Transitions** | Smooth animated route transitions using AnimatePresence |
| **Dark Luxury Theme** | Curated black/charcoal/gold color palette with custom typography |
| **SEO Optimized** | Semantic HTML, meta tags, and proper heading hierarchy |

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) with JSX
- **Build Tool:** [Vite 5](https://vitejs.dev/) — lightning-fast HMR & builds
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) — utility-first with custom design tokens
- **Animations:** [Framer Motion 11](https://www.framer.com/motion/) — declarative animations & gestures
- **Icons:** [Lucide React](https://lucide.dev/) — clean, consistent icon set
- **Routing:** [React Router DOM 6](https://reactrouter.com/) — client-side navigation
- **Fonts:** [Google Fonts](https://fonts.google.com/) — Playfair Display & Poppins
- **Linting:** [OxLint](https://oxc-project.github.io/docs/guide/usage/linter.html)

---

## 📁 Project Structure

```
LensCraft/
├── public/
│   ├── favicon.svg              # Custom SVG favicon
│   ├── icons.svg                # SVG icon sprites
│   └── images/                  # Gallery & hero images
│       ├── hero_wedding.png
│       ├── hero_portrait.png
│       ├── hero_editorial.png
│       ├── hero_event.png
│       ├── gallery_ceremony.png
│       ├── gallery_couple.png
│       ├── gallery_mehndi.png
│       └── ...
├── src/
│   ├── assets/                  # Static assets (hero image, SVGs)
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation bar
│   │   ├── HeroSection.jsx      # Cinematic hero slider
│   │   ├── FeaturedGallery.jsx  # Homepage featured gallery
│   │   ├── AboutSection.jsx     # About the photographer
│   │   ├── ServicesSection.jsx  # Photography services
│   │   ├── TestimonialsSection.jsx  # Client testimonials
│   │   ├── PortfolioGallery.jsx # Filterable portfolio grid
│   │   ├── LightboxModal.jsx    # Full-screen image viewer
│   │   └── Footer.jsx           # Site footer
│   ├── pages/
│   │   ├── Home.jsx             # Homepage (all sections)
│   │   └── Portfolio.jsx        # Dedicated portfolio page
│   ├── App.jsx                  # Root component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & Tailwind directives
├── index.html                   # HTML entry point
├── tailwind.config.js           # Custom Tailwind theme & animations
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ankitgithub12/LensCraft-Premium-Photographer-Portfolio-Website.git
   cd LensCraft-Premium-Photographer-Portfolio-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run OxLint for code quality checks |

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| **Black** | `#0A0A0A` | Primary background |
| **Charcoal** | `#1A1A1A` | Card backgrounds, sections |
| **Graphite** | `#2A2A2A` | Borders, subtle surfaces |
| **Gold** | `#C9A84C` | Accents, CTAs, highlights |
| **Gold Light** | `#E8C97A` | Hover states, gradients |
| **Cream** | `#F5F0E8` | Primary text |
| **Muted** | `#8A8A8A` | Secondary text |

### Typography

- **Headings:** Playfair Display (serif) — elegant, editorial feel
- **Body:** Poppins (sans-serif) — clean, modern readability

### Custom Animations

- `ken-burns` — Slow zoom for hero images
- `shimmer` — Gold shimmer effect on text
- `float` — Floating decorative elements
- `pulse-glow` / `border-glow` — Subtle gold glow effects
- `gradient-slide` — Animated gradient backgrounds

---

## 📱 Responsive Design

The website is fully responsive across all breakpoints:

- **Mobile** (< 640px) — Stacked layouts, hamburger menu
- **Tablet** (640px – 1024px) — Adaptive grid layouts
- **Desktop** (> 1024px) — Full multi-column layouts with hover effects

---

## 📄 Pages

### 🏠 Home (`/`)
The landing page composes all major sections:
- Hero slider with 4 rotating slides
- Featured gallery with curated highlights
- About the photographer with stats
- Photography services overview
- Client testimonials carousel

### 📸 Portfolio (`/portfolio`)
A dedicated portfolio page with:
- Category filter tabs (All, Weddings, Portraits, Events, Fine Art)
- Masonry-style responsive grid
- Click-to-open lightbox with navigation

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ and ☕ by <a href="https://github.com/ankitgithub12">Ankit</a>
</p>
