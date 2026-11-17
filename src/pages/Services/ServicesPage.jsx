import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { generalFaqs } from '../../data/faqs';
import { processSteps } from '../../data/process';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import ServiceCard from '../../components/common/ServiceCard';
import Accordion from '../../components/common/Accordion';
import Button from '../../components/common/Button';
import { Barcode, SquigglyLine } from '../../components/common/Decorations';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our Services — Growme Tech';
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Services Hero ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <SectionLabel label="OUR SERVICES" />
                <StickerBadge text="FULL LIFECYCLE" color="yellow" rotate={-2} size="sm" />
              </div>
              
              <SectionHeading size="xl" as="h1">
                WHAT WE DO.
              </SectionHeading>

              <p className="mt-6 text-lg md:text-xl text-black font-semibold max-w-2xl leading-relaxed">
                End-to-end digital solutions to turn your ideas into real, scalable products. From initial conceptualization to deployment and round-the-clock maintenance.
              </p>

              <p className="mt-3 text-base text-medium-gray max-w-2xl leading-relaxed">
                We blend human-centered UX design with modern full-stack development, cloud architecture, and artificial intelligence to deliver high-velocity digital capabilities.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-6">
              <Barcode />
              <Button to="/get-a-quote" variant="primary" size="lg" arrow>
                Start a Project
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. All 8 Services Grid ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel label="CATALOGUE" />
              <SectionHeading size="lg">
                SPECIALIZED CAPABILITIES.
              </SectionHeading>
            </div>
            <p className="text-sm text-medium-gray max-w-md">
              Click into any service to inspect detailed deliverables, tech stacks, problem-solving workflows, and case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                className="h-full hover:bg-cream"
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. High-Level Process Overview ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel label="OUR APPROACH" />
              <SectionHeading size="xl">
                HOW WE DELIVER EXCELLENCE.
              </SectionHeading>
              <p className="mt-3 text-base text-medium-gray max-w-xl">
                A milestone-governed methodology that keeps stakeholders informed and builds velocity with every sprint.
              </p>
            </div>
            <Button to="/process" variant="secondary" size="md" arrow>
              Explore Full Process
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-warm-white border-2 border-black rounded-2xl p-5 shadow-brutal flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary text-white font-display font-black flex items-center justify-center border-2 border-black shadow-brutal-sm mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display font-black text-base text-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-medium-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. Frequently Asked Questions ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel label="FAQS" />
              <SectionHeading size="xl">
                COMMON SERVICE QUESTIONS.
              </SectionHeading>
              <p className="mt-4 text-base text-medium-gray leading-relaxed">
                Everything you need to know about contracting, scopes, IP ownership, and post-launch maintenance.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="primary" size="md" arrow>
                  Ask a Question
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Accordion items={generalFaqs} />
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. Bottom Banner CTA ── */}
      <section className="py-16 md:py-20 bg-deep-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <StickerBadge text="LET'S TALK" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Have a Specific Architectural Need?
          </h2>
          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto">
            Tell us about your tech stack, business timeline, or immediate engineering bottlenecks.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/get-a-quote" variant="primary" size="lg" arrow>
              Request a Custom Quote
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
