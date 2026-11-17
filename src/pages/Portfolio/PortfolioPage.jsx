import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../../data/projects';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import ProjectCard from '../../components/common/ProjectCard';
import Button from '../../components/common/Button';
import ProjectImagePlaceholder from '../../components/placeholders/ProjectImagePlaceholder';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Our Portfolio — Growme Tech';
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Hero ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <SectionLabel label="OUR WORK" />
                <StickerBadge text="CASE STUDIES" color="yellow" rotate={-2} size="sm" />
              </div>

              <SectionHeading size="xl" as="h1">
                OUR PORTFOLIO.
              </SectionHeading>

              <p className="mt-6 text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                A showcase of digital products we've built for real businesses. From scalable marketplaces to mission-critical logistics software.
              </p>

              <p className="mt-3 text-base text-medium-gray max-w-xl leading-relaxed">
                Explore deep dives into challenges faced, architectural patterns implemented, and measurable business outcomes achieved.
              </p>

              <div className="mt-8">
                <Button to="/get-a-quote" variant="primary" size="lg" arrow>
                  Submit Your RFP / Spec
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-warm-white border-3 border-black rounded-2xl p-6 shadow-brutal-lg rotate-1">
                  <ProjectImagePlaceholder label="Growme Showcase Hub" />
                  <div className="mt-4 flex items-center justify-between text-xs font-display font-bold">
                    <span>Modern Stacks & Clean UX</span>
                    <span className="text-primary">MERN Architecture ↗</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <StickerBadge text="PRODUCTION READY" color="orange" rotate={-3} size="md" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. Filters & Projects Grid ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full border-2 border-black font-display font-bold text-xs uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'bg-primary text-white shadow-brutal -translate-x-0.5 -translate-y-0.5'
                      : 'bg-white text-black hover:bg-light-gray shadow-brutal-sm'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} className="h-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-medium-gray text-base">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* ── 3. Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-deep-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="START YOUR CASE STUDY" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Have a Similar Product to Build?
          </h2>
          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto">
            Book an engineering session with our technical team to discuss requirements and get an actionable blueprint.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/get-a-quote" variant="primary" size="lg" arrow>
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
