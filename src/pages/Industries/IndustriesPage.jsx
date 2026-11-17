import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { industries } from '../../data/industries';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import IndustryCard from '../../components/common/IndustryCard';
import Button from '../../components/common/Button';
import ImagePlaceholder from '../../components/placeholders/ImagePlaceholder';

export default function IndustriesPage() {
  useEffect(() => {
    document.title = 'Industries We Serve — Growme Tech';
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Hero ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <SectionLabel label="INDUSTRIES" />
                <StickerBadge text="SECTOR EXPERTISE" color="yellow" rotate={-2} size="sm" />
              </div>

              <SectionHeading size="xl" as="h1">
                INDUSTRIES WE SERVE.
              </SectionHeading>

              <p className="mt-6 text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                Tailored digital solutions for businesses across diverse industries, built to tackle sector-specific workflows and compliance.
              </p>

              <p className="mt-3 text-base text-medium-gray max-w-xl leading-relaxed">
                We bring specialized engineering knowledge to help businesses navigate strict regulatory compliance, high-volume real-time data, and high-converting user journeys.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/get-a-quote" variant="primary" size="lg" arrow>
                  Discuss Your Sector
                </Button>
                <Button to="/portfolio" variant="secondary" size="lg">
                  Explore Case Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-warm-white border-3 border-black rounded-2xl p-6 shadow-brutal-lg rotate-1">
                  <ImagePlaceholder
                    label="Industry Vertical Architectures"
                    aspectRatio="4/3"
                    className="border-2 border-black"
                  />
                  <div className="mt-4 flex items-center justify-between text-xs font-display font-bold">
                    <span>Cross-Industry Scalability</span>
                    <span className="text-primary">8 Core Verticals ↗</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <StickerBadge text="ENTERPRISE SCALE" color="orange" rotate={-3} size="md" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. Industries Grid ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <SectionLabel label="ALL SECTORS" />
            <SectionHeading size="lg">
              EXPLORE OUR VERTICALS.
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} className="h-full hover:bg-cream" />
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-deep-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="CUSTOM SOLUTIONS" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Don't See Your Industry Listed?
          </h2>
          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto">
            Our full-stack engineers adapt rapidly to specialized domains and custom software architectures.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" arrow>
              Speak to an Industry Specialist
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
