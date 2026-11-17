import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ProcessSection from './sections/ProcessSection';
import TechnologiesSection from './sections/TechnologiesSection';
import IndustriesSection from './sections/IndustriesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import CtaSection from './sections/CtaSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Growme Tech — Digital Solutions for a Growing World';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TechnologiesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
