'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background text-white border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <h3 className="text-xl font-serif tracking-wider">AETHERION</h3>

          <div className="text-sm text-gray-400 space-y-1">
            <p>Avenida da Liberdade, 245 · 1250-142 Lisboa · Portugal</p>
            <p>Contact@aetherion.es · +351 21 123 4567</p>
          </div>

          <p className="text-sm text-gray-500">
            © {year} {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}