'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Building2, Rocket, Network } from 'lucide-react';

export default function OurFocusSection() {
  const t = useTranslations('ourFocus');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const areas = [
    { icon: TrendingUp, key: 'private', color: 'blue' },
    { icon: Building2, key: 'real', color: 'green' },
    { icon: Rocket, key: 'venture', color: 'purple' },
    { icon: Network, key: 'infrastructure', color: 'orange' },
  ];

  return (
    <section id="our-focus" className="py-16 md:py-24 bg-black relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
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
          <div className="w-24 h-0.5 bg-white mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const colorClasses = {
              blue: 'bg-gray-800 text-white hover:bg-white hover:text-black',
              green: 'bg-gray-800 text-white hover:bg-white hover:text-black',
              purple: 'bg-gray-800 text-white hover:bg-white hover:text-black',
              orange: 'bg-gray-800 text-white hover:bg-white hover:text-black',
            };

            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-800 hover:border-gray-600"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full transition-all duration-300 ${colorClasses[area.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-light text-white mb-2 tracking-wide">
                  {t(`areas.${area.key}`)}
                </h3>
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}