import { motion } from 'framer-motion';
import { testimonials } from '../../../data/testimonials';
import SectionLabel from '../../../components/common/SectionLabel';
import SectionHeading from '../../../components/common/SectionHeading';
import TestimonialCard from '../../../components/common/TestimonialCard';
import StickerBadge from '../../../components/common/StickerBadge';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel label="TESTIMONIALS" />
            <SectionHeading size="xl">
              WHAT CLIENTS SAY.
            </SectionHeading>
            <p className="mt-4 text-base md:text-lg text-medium-gray font-medium max-w-xl">
              Hear directly from our partners about collaboration, delivery cadence, and technical depth.
            </p>
          </div>
          <StickerBadge text="VERIFIED SATISFACTION" color="yellow" rotate={-2} size="md" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <TestimonialCard testimonial={testi} className="h-full" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono font-bold text-medium-gray">
          <span>// 100% Client CSAT across active engineering sprints</span>
        </div>

      </div>
    </section>
  );
}
