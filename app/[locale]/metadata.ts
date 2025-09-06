import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPortuguese = locale === 'pt';
  
  const title = isPortuguese 
    ? 'Aetherion Investment Partners | Gestão de Investimentos' 
    : 'Aetherion Investment Partners | Investment Management';
    
  const description = isPortuguese
    ? 'Soluções inovadoras em gestão de investimentos. Private Equity, Real Estate, Venture Capital e Infraestrutura. Experiência e resultados comprovados.'
    : 'Innovative investment management solutions. Private Equity, Real Estate, Venture Capital and Infrastructure. Experience and proven results.';
    
  const keywords = isPortuguese
    ? 'investimentos, gestão de ativos, private equity, real estate, venture capital, infraestrutura, Lisboa, Portugal'
    : 'investments, asset management, private equity, real estate, venture capital, infrastructure, Lisbon, Portugal';

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Aetherion Investment Partners' }],
    creator: 'Aetherion',
    publisher: 'Aetherion Investment Partners',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://aetherion.com'),
    alternates: {
      canonical: '/',
      languages: {
        'pt-PT': '/pt',
        'en-US': '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://aetherion.com',
      siteName: 'Aetherion Investment Partners',
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Aetherion Investment Partners',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@aetherion',
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
        },
      ],
    },
    manifest: '/manifest.json',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
    category: 'finance',
  };
}