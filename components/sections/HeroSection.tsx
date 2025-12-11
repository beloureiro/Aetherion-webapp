'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
      
      <motion.div
        initial={false}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          initial={false}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white mb-8"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={false}
          className="text-sm sm:text-base md:text-lg font-light tracking-wide text-gray-400 mb-12 max-w-5xl mx-auto leading-loose"
        >
          {t('subtitle')}
        </motion.p>

        <motion.a
          href="#our-focus"
          initial={false}
          whileHover={{
            borderColor: 'rgba(255, 255, 255, 0.3)'
          }}
          className="inline-flex items-center px-6 py-3 text-sm font-light tracking-wider uppercase text-white transition-all duration-300"
          style={{
            background: 'transparent',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '2px'
          }}
        >
          {t('cta')}
        </motion.a>
      </motion.div>

      <motion.div
        initial={false}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}