# Aetherion - Empowering Lives for Generations

A modern, sophisticated urban development and real assets management website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Overview

Aetherion specializes in non-traditional real assets, transforming communities through sustainable investments. Our platform features a minimalist black and white design that emphasizes our commitment to sustainability, generational impact, and strategic partnerships.

## 🏗️ Business Areas

Aetherion operates through **three specialized divisions**:

1. **Industrial & Logistics** - Supply-demand solutions in logistics and industrial sectors
2. **Land Bank** - Real estate asset management and development
3. **Hospitality & Residential** - Development of accommodation and living spaces

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, React 19
- **Dynamic Theme Switcher**: Temporary color preview system (black/blue themes)
- **Internationalization**: Full support for Portuguese and English
- **Responsive Design**: 100% mobile-first approach
- **SEO Optimized**: Complete meta tags, sitemap, and structured data
- **PWA Ready**: Web app manifest and offline capabilities
- **Smooth Animations**: Framer Motion for elegant transitions
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Technologies

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/beloureiro/Aetherion-webapp.git

# Navigate to the project directory
cd Aetherion-webapp

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
Aetherion-webapp/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      # Main layout with i18n
│   │   ├── page.tsx        # Home page
│   │   └── metadata.ts     # SEO metadata
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── WhoWeAreSection.tsx
│   │   ├── OurFocusSection.tsx
│   │   ├── WhatWeDoSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── TrackRecordSection.tsx
│   │   └── ContactSection.tsx
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   └── Logo.tsx            # Logo component
├── i18n/
│   └── request.ts          # i18n configuration
├── messages/
│   ├── pt.json            # Portuguese translations
│   └── en.json            # English translations
├── public/
│   ├── manifest.json      # PWA manifest
│   └── [icons]            # App icons and favicon
└── middleware.ts          # Next.js middleware for i18n
```

## 🎨 Design System

The website features a sophisticated minimalist design with dynamic theme support:

- **Default Theme**: Black (#000000) - Traditional elegance
- **Alternative Theme**: Deep Blue (#152A3B) - Modern sophistication
- **Theme Switcher**: Temporary preview system for client decision
- **Grays**: Multiple shades for hierarchy
- **Typography**:
  - Playfair Display (serif) for headings
  - Inter for body text
  - Crimson Text for display elements

## 🌍 Internationalization

The application supports two languages:
- Portuguese (PT) - Default
- English (EN)

Language switching is available through the header navigation.

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Deployment

The application is optimized for deployment on Vercel:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

Key configuration files:
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `middleware.ts` - Routing and i18n middleware

## 📄 License

Private and Confidential - Aetherion

## 👥 Contact

**Aetherion - Empowering Lives for Generations**
Avenida da Liberdade, 245
1250-142 Lisboa, Portugal
+351 21 123 4567
contact@aetherion.com

## 🎯 Mission

We invest in non-traditional real assets, leveraging our extensive network and unique strategic partnerships to create outstanding value in supply-demand imbalanced sectors. Our goal is to build thriving communities that impact generations.

---

Developed with ♥ in Lisbon, Portugal