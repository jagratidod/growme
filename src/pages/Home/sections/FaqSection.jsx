import { motion } from 'framer-motion';
import { generalFaqs } from '../../../data/faqs';
import SectionLabel from '../../../components/common/SectionLabel';
import SectionHeading from '../../../components/common/SectionHeading';
import Accordion from '../../../components/common/Accordion';
import Button from '../../../components/common/Button';

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5">
            <SectionLabel label="FAQ" />
            <SectionHeading size="xl">
              FREQUENTLY ASKED QUESTIONS.
            </SectionHeading>
            <p className="mt-4 text-base md:text-lg text-medium-gray font-medium leading-relaxed">
              Have questions about how we work, engagement models, timelines, or pricing? Here are answers to the most common queries.
            </p>

            <div className="mt-8 p-6 bg-warm-white border-2 border-black rounded-2xl shadow-brutal">
              <h4 className="font-display font-black text-base text-black mb-2">
                Have a different question?
              </h4>
              <p className="text-sm text-medium-gray mb-4">
                Our technical advisors are ready to walk through your specific architectural requirements.
              </p>
              <Button to="/contact" variant="primary" size="sm" arrow>
                Speak to our Team
              </Button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <Accordion items={generalFaqs} />
          </div>

        </div>

      </div>
    </section>
  );
}
