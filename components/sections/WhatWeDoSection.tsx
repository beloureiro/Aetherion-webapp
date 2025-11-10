'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, ChartBar, FolderOpen, TrendingUp } from 'lucide-react';

export default function WhatWeDoSection() {
  const t = useTranslations('whatWeDo');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: Briefcase, key: 'management' },
    { icon: ChartBar, key: 'advisory' },
    { icon: FolderOpen, key: 'structuring' },
    { icon: TrendingUp, key: 'analysis' },
  ];

  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-card relative" ref={ref}>
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
            {t('intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-background border-t border-b border-border p-6 text-center hover:border-gray-600 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-muted rounded-full shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-light tracking-wider text-white uppercase mb-3">
                  {t(`services.${service.key}`)}
                </h3>
                <p className="text-sm text-gray-400 normal-case tracking-normal">
                  {t(`services.${service.key}Desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}