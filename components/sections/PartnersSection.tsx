'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

export default function PartnersSection() {
  const t = useTranslations('partners');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { key: 'member1' },
    { key: 'member2' },
    { key: 'member3' },
    { key: 'member4' },
  ];

  return (
    <section id="partners" className="py-16 md:py-24 bg-background relative" ref={ref}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-border hover:border-gray-600"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-muted to-secondary rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-serif text-white mb-1">
                {t(`members.${partner.key}.name`)}
              </h3>
              <p className="text-gray-400 font-light tracking-wider uppercase text-sm mb-2">
                {t(`members.${partner.key}.role`)}
              </p>
              <p className="text-sm text-gray-500">
                {t(`members.${partner.key}.experience`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}