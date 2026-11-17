import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from '../../../data/technologies';
import SectionLabel from '../../../components/common/SectionLabel';
import SectionHeading from '../../../components/common/SectionHeading';
import TechBadge from '../../../components/common/TechBadge';
import StickerBadge from '../../../components/common/StickerBadge';
import { Layers, Terminal, Server, Database, Smartphone, Cloud, CheckCircle2 } from 'lucide-react';

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { 
      title: 'Frontend', 
      items: technologies.frontend, 
      color: 'bg-[#DBEAFE]',
      icon: Layers,
      highlight: 'Sub-second initial paint, accessible UI, and dynamic reactive components.',
    },
    { 
      title: 'Backend', 
      items: technologies.backend, 
      color: 'bg-[#D1FAE5]',
      icon: Server,
      highlight: 'Event-driven microservices, high-throughput REST & GraphQL endpoints.',
    },
    { 
      title: 'Database', 
      items: technologies.database, 
      color: 'bg-[#EDE9FE]',
      icon: Database,
      highlight: 'ACID-compliant transactions, in-memory Redis caches, and document stores.',
    },
    { 
      title: 'Mobile', 
      items: technologies.mobile, 
      color: 'bg-[#FEF3C7]',
      icon: Smartphone,
      highlight: 'Single-codebase iOS/Android native performance with offline sync.',
    },
    { 
      title: 'Cloud & DevOps', 
      items: technologies.cloud, 
      color: 'bg-[#FCE7F3]',
      icon: Cloud,
      highlight: 'Automated CI/CD pipelines, containerized Kubernetes, and 99.98% uptime.',
    },
  ];

  const filterTabs = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'Cloud & DevOps'];

  const displayedCategories = activeTab === 'All' 
    ? categories 
    : categories.filter((c) => c.title === activeTab);

  return (
    <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel label="STACK & ARCHITECTURE" />
            <SectionHeading size="xl">
              TECHNOLOGIES WE MASTER.
            </SectionHeading>
            <p className="mt-4 text-base md:text-lg text-medium-gray font-medium max-w-2xl">
              We leverage battle-tested open-source frameworks and cloud-native infrastructure to engineer scalable, enterprise-ready digital products.
            </p>
          </div>
          <StickerBadge text="MERN & CLOUD NATIVE" color="violet" rotate={2} size="md" />
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 select-none scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-display font-black uppercase tracking-wider border-2 transition-all flex-shrink-0 ${
                  isActive
                    ? 'bg-black text-white border-black shadow-brutal-sm -translate-y-0.5'
                    : 'bg-white text-black border-black/30 hover:border-black hover:bg-cream'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="bg-cream border-2 border-black rounded-2xl p-6 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-orange transition-shadow"
                >
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-black/10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center border border-black shadow-[1px_1px_0px_#f97316]">
                          <Icon size={16} />
                        </div>
                        <span className="font-display font-black text-base uppercase tracking-wider text-black">
                          {cat.title}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-black ${cat.color} text-black shadow-[1px_1px_0px_#111]`}>
                        {cat.items.length} Techs
                      </span>
                    </div>

                    {/* Micro highlight description */}
                    <p className="text-xs text-medium-gray font-medium mb-4 leading-relaxed">
                      {cat.highlight}
                    </p>

                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((tech) => (
                        <TechBadge key={tech.name} name={tech.name} />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-mono font-bold text-medium-gray">
                    <span className="flex items-center gap-1 text-emerald-700">
                      <CheckCircle2 size={12} /> Production Certified
                    </span>
                    <span>v2.5 Stack</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
