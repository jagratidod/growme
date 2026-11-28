import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Layout, Briefcase, ArrowUpRight, TrendingUp, ExternalLink } from 'lucide-react';
import { getProjectBySlug, projects } from '../../data/projects';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import TechBadge from '../../components/common/TechBadge';
import Button from '../../components/common/Button';
import ProjectCard from '../../components/common/ProjectCard';
import ProjectImagePlaceholder from '../../components/placeholders/ProjectImagePlaceholder';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (project) {
      document.title = `${project.title} Case Study — Growme Tech`;
      window.scrollTo(0, 0);
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-[70vh] bg-cream flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-display font-black text-3xl mb-4">Case Study Not Found</h2>
        <p className="text-medium-gray mb-6">The requested case study could not be located.</p>
        <Button to="/portfolio" variant="primary">
          Back to Portfolio
        </Button>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="bg-cream min-h-screen">
      {/* Reading Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="fixed top-16 md:top-18 left-0 right-0 h-1 bg-primary z-40"
      />
      
      {/* ── 1. Hero ── */}
      <section className="py-14 md:py-20 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-display font-black uppercase text-medium-gray hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-2">
                <StickerBadge text="CASE STUDY" color="orange" rotate={-2} size="md" />
                {project.liveUrl && (
                  <span className="px-3 py-1 bg-emerald-400 text-black border-2 border-black font-mono text-xs font-black rounded-full shadow-[2px_2px_0px_#000] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-950 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                )}
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[1.08] tracking-tight uppercase">
                {project.title}
              </h1>

              <p className="mt-6 text-base md:text-lg text-medium-gray font-medium leading-relaxed max-w-xl">
                {project.description}
              </p>

              {/* Meta details row */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
                <div className="bg-warm-white border-2 border-black rounded-xl p-3 shadow-brutal-sm">
                  <span className="text-[10px] font-display font-black uppercase text-medium-gray block">
                    Industry
                  </span>
                  <span className="text-xs sm:text-sm font-display font-black text-black">
                    {project.industry}
                  </span>
                </div>

                <div className="bg-warm-white border-2 border-black rounded-xl p-3 shadow-brutal-sm">
                  <span className="text-[10px] font-display font-black uppercase text-medium-gray block">
                    Platform
                  </span>
                  <span className="text-xs sm:text-sm font-display font-black text-black">
                    {project.platform}
                  </span>
                </div>

                <div className="bg-warm-white border-2 border-black rounded-xl p-3 shadow-brutal-sm">
                  <span className="text-[10px] font-display font-black uppercase text-medium-gray block">
                    Timeline
                  </span>
                  <span className="text-xs sm:text-sm font-display font-black text-black">
                    {project.timeline}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-yellow-sticker text-black font-display font-black text-sm uppercase tracking-wider border-2 border-black rounded-xl shadow-brutal hover:bg-yellow-300 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Visit Live Website
                    <ExternalLink size={18} />
                  </a>
                )}
                <Button to="/get-a-quote" variant={project.liveUrl ? "secondary" : "primary"} size="lg" arrow>
                  Discuss a Similar Project
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-warm-white border-3 border-black rounded-3xl p-6 shadow-brutal-lg rotate-1">
                  <ProjectImagePlaceholder
                    label={`${project.title} Architecture`}
                    slug={project.slug}
                    category={project.category}
                    liveUrl={project.liveUrl}
                  />
                  <div className="mt-4 flex items-center justify-between text-xs font-display font-bold">
                    <span>{project.category}</span>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1 font-mono font-bold"
                      >
                        {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="text-primary">Deployed to Production ↗</span>
                    )}
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <StickerBadge text={project.industry} color="yellow" rotate={-3} size="md" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. Challenge & Solution ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* The Challenge */}
            <div className="bg-cream border-2 border-black rounded-2xl p-8 shadow-brutal">
              <span className="text-xs font-display font-black text-red-600 uppercase tracking-widest block mb-2">
                THE PROBLEM
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-black mb-4">
                The Challenge
              </h2>
              <p className="text-sm md:text-base text-medium-gray leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-cream border-2 border-black rounded-2xl p-8 shadow-brutal">
              <span className="text-xs font-display font-black text-emerald-600 uppercase tracking-widest block mb-2">
                THE EXECUTION
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-black mb-4">
                The Solution
              </h2>
              <p className="text-sm md:text-base text-medium-gray leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. Key Features & Technologies ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Key Features */}
            <div className="lg:col-span-7">
              <SectionLabel label="DELIVERABLES" />
              <SectionHeading size="lg" className="mb-6">
                KEY ARCHITECTURAL FEATURES.
              </SectionHeading>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="p-4 bg-warm-white border-2 border-black rounded-xl shadow-brutal-sm flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-display font-bold text-xs sm:text-sm text-black">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-5">
              <SectionLabel label="STACK" />
              <SectionHeading size="lg" className="mb-6">
                TECHNOLOGY ARSENAL.
              </SectionHeading>

              <div className="p-6 bg-warm-white border-2 border-black rounded-2xl shadow-brutal">
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t-2 border-black/10 text-xs font-mono font-bold text-medium-gray">
                  // Robust, scalable, containerized stack
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. Project Gallery Placeholders ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <SectionLabel label="GALLERY" />
            <SectionHeading size="lg">
              INTERFACE & SYSTEM SCREENS.
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectImagePlaceholder label={`${project.title} — Desktop Interface`} slug={project.slug} category={project.category} liveUrl={project.liveUrl} />
            <ProjectImagePlaceholder label={`${project.title} — Mobile Experience`} slug={project.slug} category={project.category} liveUrl={project.liveUrl} />
            <ProjectImagePlaceholder label={`${project.title} — Architecture Schema`} slug={project.slug} category={project.category} liveUrl={project.liveUrl} />
          </div>

        </div>
      </section>

      {/* ── 5. Measurable Results ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <SectionLabel label="OUTCOMES & PROVEN ROI" />
            <SectionHeading size="lg">
              MEASURABLE BUSINESS IMPACT.
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="bg-warm-white border-2 border-black rounded-2xl p-6 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-orange transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-sticker border-2 border-black flex items-center justify-center shadow-brutal-sm">
                      <TrendingUp size={20} className="text-black" />
                    </div>
                    {res.highlight && (
                      <span className="text-xl sm:text-2xl font-display font-black text-primary">
                        {res.highlight}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display font-black text-lg text-black mb-2">
                    {res.metric}
                  </h4>
                  <p className="text-xs text-medium-gray font-medium leading-relaxed">
                    {res.value}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 text-[10px] font-mono font-bold text-primary">
                  METRIC BENCHMARK // 0{i + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. Related Case Studies ── */}
      {otherProjects.length > 0 && (
        <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <SectionLabel label="MORE WORK" />
                <SectionHeading size="lg">
                  RELATED CASE STUDIES.
                </SectionHeading>
              </div>
              <Button to="/portfolio" variant="secondary" size="md" arrow>
                View All Case Studies
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="START YOUR BUILD" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Ready to Build an Impactful Digital Product?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            Contact us today for a free architecture review and project estimate.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/get-a-quote" variant="secondary" size="lg" arrow>
              Request a Custom Quote
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
