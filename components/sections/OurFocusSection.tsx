'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Factory, Landmark, Hotel } from 'lucide-react';

export default function OurFocusSection() {
  const t = useTranslations('ourFocus');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const areas = [
    { key: 'industrial', icon: Factory },
    { key: 'landBank', icon: Landmark },
    { key: 'hospitality', icon: Hotel },
  ];

  return (
    <section id="our-focus" className="py-16 md:py-24 bg-background relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-2">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto mb-4" />
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card shadow-lg p-8 hover:shadow-xl transition-all border border-border hover:border-gray-600 group"
              >
                <div className="mb-6">
                  <Icon
                    className="w-12 h-12 text-white group-hover:scale-110 transition-transform"
                    strokeWidth={1}
                  />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">
                  {t(`areas.${area.key}.title`)}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(`areas.${area.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}