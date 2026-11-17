import { motion } from 'framer-motion';
import { industries } from '../../../data/industries';
import SectionLabel from '../../../components/common/SectionLabel';
import SectionHeading from '../../../components/common/SectionHeading';
import IndustryCard from '../../../components/common/IndustryCard';
import Button from '../../../components/common/Button';

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel label="INDUSTRIES" />
            <SectionHeading size="xl">
              INDUSTRIES WE SERVE.
            </SectionHeading>
            <p className="mt-4 text-base md:text-lg text-medium-gray font-medium max-w-2xl">
              Tailored digital solutions for businesses across diverse industries, built to tackle sector-specific workflows and compliance.
            </p>
          </div>
          <Button to="/industries" variant="secondary" size="md" arrow>
            Explore Sectors
          </Button>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <IndustryCard industry={ind} className="h-full hover:bg-white" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
