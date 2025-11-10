'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <footer className="bg-background text-white">
      {/* TEMPORÁRIO: Botão de troca de tema - será removido após decisão final */}
      {mounted && (
        <div className="border-t-2 border-yellow-500/50 bg-yellow-900/20 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-yellow-200/90 font-light">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="uppercase tracking-wider">Preview de Cores - Temporário</span>
            </div>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md transition-all duration-300 text-sm group"
              aria-label="Alternar tema de cores"
            >
              <Palette className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">
                {theme === 'black' ? 'Ver Tema Azul' : 'Ver Tema Preto'}
              </span>
              <span className="text-xs text-gray-300 ml-1">
                ({theme === 'black' ? '#152A3B' : '#000000'})
              </span>
            </button>
          </div>
        </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AETHERION</h3>
            <p className="text-gray-400">
              © {year} {t('rights')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              contact@aetherion.com<br />
              +351 21 123 4567
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}