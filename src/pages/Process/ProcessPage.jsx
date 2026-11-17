import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Compass,
  PenTool,
  Code2,
  CheckSquare,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { detailedProcessSteps } from '../../data/process';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import Button from '../../components/common/Button';

export default function ProcessPage() {
  useEffect(() => {
    document.title = 'Our Process — Growme Tech';
  }, []);

  const icons = [Search, Compass, PenTool, Code2, CheckSquare, Rocket, ShieldCheck];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Hero ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <SectionLabel label="OUR PROCESS" />
              <StickerBadge text="AGILE & PREDICTABLE" color="yellow" rotate={-2} size="sm" />
            </div>

            <SectionHeading size="xl" as="h1">
              HOW WE WORK.
            </SectionHeading>

            <p className="mt-6 text-lg md:text-xl text-black font-semibold leading-relaxed">
              A clear, collaborative, and result-driven development journey designed to eliminate surprises and maximize velocity.
            </p>

            <p className="mt-3 text-base text-medium-gray leading-relaxed">
              Every engagement follows structured milestones, transparent communication channels, rigorous automated testing, and comprehensive code handoffs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/get-a-quote" variant="primary" size="lg" arrow>
                Kickstart Phase 01
              </Button>
              <Button to="/portfolio" variant="secondary" size="lg">
                View Past Outcomes
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. The 7-Step Detailed Timeline ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <SectionLabel label="THE ROADMAP" />
            <SectionHeading size="lg">
              END-TO-END METHODOLOGY.
            </SectionHeading>
          </div>

          <div className="space-y-8">
            {detailedProcessSteps.map((step, idx) => {
              const Icon = icons[idx] || Code2;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-cream border-2 border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-brutal flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between"
                >
                  
                  {/* Left: Number & Main Info */}
                  <div className="flex items-start gap-6 max-w-2xl">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-white border-2 border-black flex flex-col items-center justify-center font-display font-black text-2xl shadow-brutal-sm flex-shrink-0">
                      {step.number}
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={20} className="text-primary" />
                        <span className="text-xs font-mono font-bold text-medium-gray uppercase">
                          PHASE // {step.number}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl text-black">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-medium-gray font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Key Deliverables Card */}
                  <div className="w-full lg:w-80 flex-shrink-0 bg-warm-white border-2 border-black rounded-2xl p-5 shadow-brutal-sm">
                    <span className="text-[10px] font-display font-black uppercase text-primary tracking-widest block mb-3">
                      KEY DELIVERABLES
                    </span>

                    <ul className="space-y-2">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-display font-bold text-black">
                          <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-deep-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="START YOUR SPRINT" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Ready to Begin Phase 01?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Book a discovery call today and receive a structured project brief within 48 hours.
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
