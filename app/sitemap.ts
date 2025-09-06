import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aetherion.com';
  const lastModified = new Date();

  const routes = [
    '',
    '#who-we-are',
    '#our-focus',
    '#what-we-do',
    '#partners',
    '#track-record',
    '#contact',
  ];

  const languages = ['pt', 'en'];
  
  const urls: MetadataRoute.Sitemap = [];

  languages.forEach(lang => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return urls;
}