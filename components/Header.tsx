'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogoWithText } from './Logo';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('home') },
    { href: '#who-we-are', label: t('whoWeAre') },
    { href: '#our-focus', label: t('ourFocus') },
    { href: '#what-we-do', label: t('whatWeDo') },
    { href: '#partners', label: t('partners') },
    { href: '#track-record', label: t('trackRecord') },
    { href: '#contact', label: t('contact') },
  ];

  const switchLocale = () => {
    const newLocale = locale === 'pt' ? 'en' : 'pt';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={`/${locale}`} className="text-white">
            <LogoWithText />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-light tracking-wide text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-gray-600"
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={switchLocale}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale === 'pt' ? 'EN' : 'PT'}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <button
                onClick={switchLocale}
                className="flex items-center space-x-2 w-full py-2 text-left"
              >
                <Globe className="w-4 h-4" />
                <span>
                  {locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}