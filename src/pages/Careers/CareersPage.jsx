import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Coffee, ArrowUpRight, Briefcase, MapPin, Clock } from 'lucide-react';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import ImagePlaceholder from '../../components/placeholders/ImagePlaceholder';

export default function CareersPage() {
  useEffect(() => {
    document.title = 'Careers — Growme Tech';
  }, []);

  const perks = [
    {
      title: 'Growth Opportunities',
      desc: 'Rapid career acceleration, continuous learning stipends, and exposure to global enterprise projects.',
      icon: TrendingUp,
      color: 'bg-primary text-white',
    },
    {
      title: 'Collaborative Culture',
      desc: 'A non-hierarchical, high-trust team of builders who value direct feedback and great craftsmanship.',
      icon: Users,
      color: 'bg-yellow-sticker text-black',
    },
    {
      title: 'Flexible Work Environment',
      desc: 'Hybrid and remote flexibility, modern MacBook tooling, ergonomic support, and balanced workloads.',
      icon: Coffee,
      color: 'bg-black text-white',
    },
  ];

  const positions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Indore Hybrid',
      type: 'Full-Time',
      exp: '3-5 Years',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      desc: 'Lead the architecture and implementation of responsive, high-performance web applications in our core engineering hub.',
    },
    {
      title: 'Full Stack MERN Architect',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-Time',
      exp: '4-6 Years',
      tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'AWS'],
      desc: 'Design resilient microservices, configure real-time WebSocket pipelines, and enforce clean REST & GraphQL standards.',
    },
    {
      title: 'Lead UI/UX Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-Time',
      exp: '3-5 Years',
      tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
      desc: 'Translate complex enterprise workflows into intuitive, Neo-Brutalist and Swiss Grid-inspired visual design systems.',
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Hero ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <SectionLabel label="CAREERS" />
                <StickerBadge text="WE'RE HIRING" color="yellow" rotate={-2} size="sm" />
              </div>

              <SectionHeading size="xl" as="h1">
                BUILD YOUR CAREER WITH US.
              </SectionHeading>

              <p className="mt-6 text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                Work on meaningful products, solve real engineering problems, and grow your career alongside world-class makers.
              </p>

              <p className="mt-3 text-base text-medium-gray max-w-xl leading-relaxed">
                We're always looking for ambitious engineers, product thinkers, and visual designers who take deep pride in shipping exceptional digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="btn-primary"
                >
                  View Open Positions
                </a>
                <Button to="/about" variant="secondary">
                  Learn About Our Culture
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-warm-white border-3 border-black rounded-3xl p-6 shadow-brutal-lg rotate-1">
                  <ImagePlaceholder
                    label="Growme Engineering & Design Culture"
                    aspectRatio="4/3"
                    className="border-2 border-black"
                  />
                  <div className="mt-4 flex items-center justify-between text-xs font-display font-bold">
                    <span>Collaborative Team Vibes</span>
                    <span className="text-primary">High Autonomy ↗</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <StickerBadge text="PEOPLE OVER PROCESS" color="orange" rotate={-3} size="md" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. Perks & Culture ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel label="BENEFITS" />
            <SectionHeading size="lg">
              WHY JOIN GROWME TECH?
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl border-2 border-black flex items-center justify-center mb-6 shadow-brutal-sm ${p.color}`}>
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display font-black text-2xl text-black mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-medium-gray font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t-2 border-black/10 text-xs font-mono font-bold text-medium-gray">
                    PERK // 0{idx + 1}
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. Open Positions ── */}
      <section id="openings" className="py-16 md:py-24 border-b-2 border-black bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel label="OPPORTUNITIES" />
              <SectionHeading size="xl">
                CURRENT OPENINGS.
              </SectionHeading>
              <p className="mt-3 text-base text-medium-gray">
                Explore available roles across software engineering, UX architecture, and product management.
              </p>
            </div>
            <StickerBadge text="APPLY NOW" color="orange" rotate={2} size="md" />
          </div>

          <div className="space-y-6">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="bg-warm-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-brutal flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between hover:-translate-y-1 transition-transform"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-yellow-sticker border border-black font-display font-black text-[11px] uppercase">
                      {pos.department}
                    </span>
                    <span className="text-xs font-display font-bold text-medium-gray flex items-center gap-1">
                      <MapPin size={12} /> {pos.location}
                    </span>
                    <span className="text-xs font-display font-bold text-medium-gray flex items-center gap-1">
                      <Clock size={12} /> {pos.exp}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-black mb-2">
                    {pos.title}
                  </h3>

                  <p className="text-sm text-medium-gray font-medium leading-relaxed mb-4">
                    {pos.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {pos.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-tag-blue rounded-lg border border-black/10 text-xs font-medium text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <Button to="/contact" variant="primary" size="md" arrow className="w-full lg:w-auto">
                    Apply for Role
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-cream border-2 border-black rounded-xl shadow-brutal-sm flex items-center justify-between text-xs font-mono font-bold text-black max-w-xl mx-auto">
            <span>// Equal Opportunity Employer</span>
            <span className="text-primary">Indore HQ + Worldwide Remote ↗</span>
          </div>

        </div>
      </section>

      {/* ── 4. Spontaneous Applications CTA ── */}
      <section className="py-16 md:py-20 bg-deep-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="TALENT POOL" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Don't See Your Exact Role?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            We are always eager to meet outstanding developers, designers, and engineers. Send us your resume and GitHub.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" arrow>
              Send Spontaneous Application
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
