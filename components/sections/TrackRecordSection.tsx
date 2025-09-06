'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function TrackRecordSection() {
  const t = useTranslations('trackRecord');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { key: 'yearsExperience', value: 15, suffix: '+' },
    { key: 'assetsManaged', value: 2.5, prefix: '$', suffix: 'B' },
    { key: 'investments', value: 50, suffix: '+' },
    { key: 'returns', value: 18, suffix: '%' },
  ];

  return (
    <section id="track-record" className="py-16 md:py-24 bg-white text-black relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-2">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-light mb-2">
                {stat.prefix}
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-gray-600 text-lg font-light tracking-wider uppercase">
                {t(stat.key)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}