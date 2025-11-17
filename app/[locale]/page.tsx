import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import OurFocusSection from '@/components/sections/OurFocusSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <OurFocusSection />
      <WhatWeDoSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}