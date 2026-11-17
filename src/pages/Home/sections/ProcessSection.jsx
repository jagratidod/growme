import { motion } from 'framer-motion';
import { Search, Layers, PenTool, Code, CheckSquare, Rocket, ArrowRight } from 'lucide-react';
import SectionLabel from '../../../components/common/SectionLabel';
import SectionHeading from '../../../components/common/SectionHeading';
import Button from '../../../components/common/Button';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand your goals & requirements.',
      icon: Search,
      color: 'bg-[#F97316]', // orange
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'Define the roadmap & architecture.',
      icon: Layers,
      color: 'bg-[#2563EB]', // blue
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Create intuitive and impactful UI/UX.',
      icon: PenTool,
      color: 'bg-[#EAB308]', // yellow
    },
    {
      num: '04',
      title: 'Develop',
      desc: 'Build, integrate, and bring to life.',
      icon: Code,
      color: 'bg-[#EA580C]', // dark orange
    },
    {
      num: '05',
      title: 'Test',
      desc: 'Ensure quality, speed & security.',
      icon: CheckSquare,
      color: 'bg-[#10B981]', // emerald
    },
    {
      num: '06',
      title: 'Launch',
      desc: 'Deploy and scale with support.',
      icon: Rocket,
      color: 'bg-[#8B5CF6]', // purple
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel label="PROCESS" />
            <SectionHeading size="xl">
              OUR PROCESS.
            </SectionHeading>
            <p className="mt-4 text-base md:text-lg text-medium-gray font-medium max-w-xl">
              A simplified, transparent, and collaborative approach to build great products on time and on budget.
            </p>
          </div>
          <Button to="/process" variant="secondary" size="md" arrow>
            Detailed Methodology
          </Button>
        </div>

        {/* Process Steps: Responsive horizontal flow on lg, cards on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative flex flex-col items-center text-center p-5 bg-warm-white border-2 border-black rounded-2xl shadow-brutal group hover:-translate-y-1 transition-transform"
              >
                {/* Number Badge */}
                <div
                  className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center font-display font-black text-xl text-white shadow-brutal-sm mb-3 ${step.color}`}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-light-gray border border-black/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-black" />
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-base text-black mb-1">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-medium-gray font-medium leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow to next item (hidden on last or mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-black">
                    <ArrowRight size={18} strokeWidth={3} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
