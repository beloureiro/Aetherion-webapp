import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import OurFocusSection from '@/components/sections/OurFocusSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurFocusSection />
      <WhoWeAreSection />
      <ContactSection />
    </>
  );
}