import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { getIndustryBySlug, getIndustryIcon, industries } from '../../data/industries';
import { services } from '../../data/services';
import { projects } from '../../data/projects';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import ProjectCard from '../../components/common/ProjectCard';

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.title} Digital Solutions — Growme Tech`;
      window.scrollTo(0, 0);
    }
  }, [slug, industry]);

  if (!industry) {
    return (
      <div className="min-h-[70vh] bg-cream flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-display font-black text-3xl mb-4">Industry Not Found</h2>
        <p className="text-medium-gray mb-6">The requested industry could not be found.</p>
        <Button to="/industries" variant="primary">
          Back to Industries
        </Button>
      </div>
    );
  }

  const IconComponent = getIndustryIcon(industry.icon);
  const relatedServices = services.filter((s) => industry.relatedServices?.includes(s.slug));
  const relatedProjects = projects.filter((p) =>
    p.industry.toLowerCase() === industry.title.toLowerCase() ||
    p.category.toLowerCase().includes(industry.slug)
  );

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Hero ── */}
      <section className="py-14 md:py-20 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs font-display font-black uppercase text-medium-gray hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Industries
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <div className="mb-4">
                <StickerBadge text={industry.title} color="yellow" rotate={-2} size="md" />
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[1.08] tracking-tight uppercase">
                Digital Solutions for {industry.title}.
              </h1>

              <p className="mt-6 text-base md:text-lg text-medium-gray font-medium leading-relaxed max-w-2xl">
                {industry.longDescription || industry.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/get-a-quote" variant="primary" size="lg" arrow>
                  Consult Our Team
                </Button>
                <Button to="/portfolio" variant="secondary" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-warm-white border-3 border-black rounded-3xl p-8 shadow-brutal-lg flex flex-col items-center justify-center text-center rotate-1">
                <div className="w-20 h-20 rounded-2xl bg-yellow-sticker border-2 border-black flex items-center justify-center shadow-brutal-sm mb-4">
                  <IconComponent size={40} className="text-black" />
                </div>
                <h3 className="font-display font-black text-xl text-black">
                  {industry.title} Vertical
                </h3>
                <span className="text-xs font-display font-bold text-primary mt-1">
                  Custom Engineering & Integration
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. Solutions & Challenges ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Solutions */}
            <div className="bg-cream border-2 border-black rounded-2xl p-8 shadow-brutal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary text-white border-2 border-black flex items-center justify-center">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="font-display font-black text-2xl text-black">
                  Solutions We Build
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industry.solutions.map((sol) => (
                  <div
                    key={sol}
                    className="p-4 bg-warm-white border-2 border-black rounded-xl font-display font-bold text-xs shadow-brutal-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-cream border-2 border-black rounded-2xl p-8 shadow-brutal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-sticker border-2 border-black flex items-center justify-center text-black">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-display font-black text-2xl text-black">
                  Industry Challenges Solved
                </h3>
              </div>

              <ul className="space-y-3.5">
                {industry.challenges.map((ch, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-medium-gray font-medium">
                    <span className="w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 border-b-2 border-black bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <SectionLabel label="SYNERGIES" />
              <SectionHeading size="lg">
                RECOMMENDED SERVICES FOR {industry.title.toUpperCase()}.
              </SectionHeading>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map((srv) => (
                <Link
                  key={srv.slug}
                  to={`/services/${srv.slug}`}
                  className="card-brutal p-6 flex flex-col justify-between group"
                >
                  <div>
                    <h4 className="font-display font-black text-lg mb-2 text-black">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-medium-gray leading-relaxed">
                      {srv.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-display font-bold text-primary group-hover:gap-2 transition-all">
                    Explore Service <ArrowUpRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="CUSTOM ROADMAP" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Build Your Next {industry.title} Product With Us.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            Get an in-depth estimate, architecture blueprint, and timeline for your platform.
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
