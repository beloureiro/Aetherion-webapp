'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Target, Lightbulb, Users } from 'lucide-react';

export default function WhoWeAreSection() {
  const t = useTranslations('whoWeAre');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Shield, key: 'integrity' },
    { icon: Target, key: 'excellence' },
    { icon: Lightbulb, key: 'innovation' },
    { icon: Users, key: 'partnership' },
  ];

  return (
    <section id="who-we-are" className="py-16 md:py-24 bg-gray-900 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
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
          <div className="w-24 h-0.5 bg-white mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-serif font-light text-center text-white mb-8"
          >
            {t('values.title')}
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gray-800 rounded-full group-hover:bg-white transition-colors">
                    <Icon className="w-10 h-10 text-white group-hover:text-black" />
                  </div>
                  <h4 className="text-lg font-light tracking-wide text-white uppercase">
                    {t(`values.${value.key}`)}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}