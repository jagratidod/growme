import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Laptop,
  Code2,
  ArrowUpRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import { getServiceBySlug, getServiceIcon, services } from '../../data/services';
import { projects } from '../../data/projects';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import TechBadge from '../../components/common/TechBadge';
import Accordion from '../../components/common/Accordion';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import ProjectCard from '../../components/common/ProjectCard';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — Growme Tech`;
      window.scrollTo(0, 0);
    }
  }, [slug, service]);

  if (!service) {
    return (
      <div className="min-h-[70vh] bg-cream flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-display font-black text-3xl mb-4">Service Not Found</h2>
        <p className="text-medium-gray mb-6">The requested service could not be located in our catalogue.</p>
        <Button to="/services" variant="primary">
          Back to Services
        </Button>
      </div>
    );
  }

  const IconComponent = getServiceIcon(service.icon);
  const relatedProjects = projects.filter((p) =>
    p.technologies.some((t) => service.technologies?.includes(t)) ||
    p.category.toLowerCase().includes(service.slug.split('-')[0])
  ).slice(0, 2);

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Service Hero ── */}
      <section className="py-14 md:py-20 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-black uppercase text-medium-gray hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <StickerBadge text={service.title} color="yellow" rotate={-2} size="md" />
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[1.08] tracking-tight uppercase">
                {service.heroHeading}
              </h1>

              <p className="mt-6 text-base md:text-lg text-medium-gray font-medium leading-relaxed max-w-xl">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/get-a-quote" variant="primary" size="lg" arrow>
                  Start Your Project
                </Button>
                <Button to="/portfolio" variant="secondary" size="lg">
                  View Case Studies
                </Button>
              </div>

              {/* Capability feature pills */}
              <div className="mt-10 pt-6 border-t-2 border-black/10 flex flex-wrap gap-2">
                {service.features.map((feat) => (
                  <span
                    key={feat}
                    className="px-3 py-1.5 bg-warm-white border-2 border-black rounded-lg text-xs font-display font-bold text-black shadow-brutal-sm"
                  >
                    ✦ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Graphic Box: Stylized Sticker & Illustration */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                
                <div className="bg-warm-white border-3 border-black rounded-3xl p-8 shadow-brutal-lg rotate-1 flex flex-col items-center justify-center text-center">
                  
                  <div className="w-24 h-24 rounded-2xl bg-primary border-3 border-black flex items-center justify-center text-white shadow-brutal mb-6">
                    <IconComponent size={48} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-display font-black text-2xl text-black">
                    {service.title}
                  </h3>

                  <p className="text-xs text-medium-gray font-medium mt-2 max-w-xs">
                    Architected for high throughput, maintainability, and end-user delight.
                  </p>

                  <div className="mt-6 w-full pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black">
                    <span>STACK: MERN</span>
                    <span className="text-primary">100% PRODUCTION READY</span>
                  </div>

                </div>

                <div className="absolute -bottom-4 -left-4">
                  <StickerBadge text="ENTERPRISE GRADE" color="orange" rotate={-3} size="md" />
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. Problems We Solve & Key Benefits ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Problems */}
            <div className="bg-cream border-2 border-black rounded-2xl p-8 shadow-brutal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 border-2 border-black flex items-center justify-center text-red-600">
                  <AlertCircle size={22} />
                </div>
                <div>
                  <span className="text-xs font-display font-black text-red-600 uppercase tracking-widest">
                    CHALLENGES
                  </span>
                  <h3 className="font-display font-black text-xl text-black">
                    Problems We Solve
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {service.problems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-medium-gray font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-cream border-2 border-black rounded-2xl p-8 shadow-brutal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border-2 border-black flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <span className="text-xs font-display font-black text-emerald-600 uppercase tracking-widest">
                    ADVANTAGES
                  </span>
                  <h3 className="font-display font-black text-xl text-black">
                    Key Features & Benefits
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {service.benefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-medium-gray font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. Technologies Used ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel label="STACK" />
              <SectionHeading size="lg">
                TECHNOLOGIES WE LEVERAGE.
              </SectionHeading>
              <p className="mt-2 text-sm text-medium-gray">
                Battle-tested frameworks tailored specifically for {service.title.toLowerCase()}.
              </p>
            </div>
            <StickerBadge text="PRODUCTION READY" color="orange" rotate={2} size="md" />
          </div>

          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} className="text-sm px-4 py-2" />
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. Our Approach Steps ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <SectionLabel label="DELIVERY" />
            <SectionHeading size="lg">
              OUR STEP-BY-STEP APPROACH.
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.approach.map((step, idx) => (
              <div
                key={step.step}
                className="p-6 bg-cream border-2 border-black rounded-2xl shadow-brutal flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black text-white font-display font-black text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display font-black text-lg text-black mb-2">
                    {step.step}
                  </h4>
                  <p className="text-sm text-medium-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. Service-specific FAQs ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel label="INQUIRIES" />
              <SectionHeading size="lg">
                QUESTIONS ABOUT {service.title.toUpperCase()}?
              </SectionHeading>
              <p className="mt-3 text-sm text-medium-gray">
                Check our curated responses or reach out for a customized architecture consultation.
              </p>
              <div className="mt-6">
                <Button to="/get-a-quote" variant="primary" arrow>
                  Get a Free Estimate
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Accordion items={service.faqs} />
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. Bottom Banner CTA ── */}
      <section className="py-16 md:py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="GET STARTED TODAY" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Ready to Build Your {service.title}?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            Let's discuss scope, technology choice, and delivery milestones.
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
