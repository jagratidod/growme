import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../../data/services';
import SectionLabel from '../../../components/common/SectionLabel';
import SectionHeading from '../../../components/common/SectionHeading';
import ServiceCard from '../../../components/common/ServiceCard';
import { Barcode, SquigglyLine } from '../../../components/common/Decorations';
import Button from '../../../components/common/Button';

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <SectionLabel label="SERVICES" />
            <SectionHeading size="xl">
              WHAT WE DO.
            </SectionHeading>
            <p className="mt-4 text-base md:text-lg text-medium-gray font-medium max-w-2xl leading-relaxed">
              End-to-end digital solutions to turn your ideas into real, scalable products. From conceptual wireframes to high-availability cloud deployments.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <Barcode />
              <Button to="/services" variant="secondary" size="sm" arrow>
                All Services
              </Button>
            </div>
            <SquigglyLine className="hidden lg:block" />
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Apply playful color accents inspired by the sticker aesthetic
            const pastelAccents = [
              'hover:bg-white',
              'hover:bg-[#FEF9C3]', // light yellow
              'hover:bg-[#FCE7F3]', // light pink
              'hover:bg-[#DBEAFE]', // light blue
              'hover:bg-[#E0E7FF]', // indigo
              'hover:bg-[#CCFBF1]', // teal
              'hover:bg-[#FEF3C7]', // amber
              'hover:bg-[#F3E8FF]', // purple
            ];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ServiceCard
                  service={service}
                  className={`h-full transition-colors ${pastelAccents[index % pastelAccents.length]}`}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
