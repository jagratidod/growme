import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import SectionLabel from '../../../components/common/SectionLabel';
import SectionHeading from '../../../components/common/SectionHeading';
import ProjectCard from '../../../components/common/ProjectCard';
import StickerBadge from '../../../components/common/StickerBadge';
import Button from '../../../components/common/Button';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel label="PORTFOLIO" />
            <div className="flex items-center gap-4 flex-wrap">
              <SectionHeading size="xl">
                OUR WORK.
              </SectionHeading>
              <StickerBadge
                text="Real Projects. Real Results."
                color="yellow"
                rotate={-2}
                size="md"
              />
            </div>
            <p className="mt-4 text-base md:text-lg text-medium-gray font-medium max-w-xl">
              A curated selection of scalable digital products engineered for startups, enterprises, and high-growth brands.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-yellow-sticker border-2 border-black rounded-full font-display font-black text-sm uppercase shadow-brutal hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rotate-1"
            >
              View All Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* 3 Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} className="h-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
