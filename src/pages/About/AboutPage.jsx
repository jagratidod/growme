import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import StickerBadge from '../../components/common/StickerBadge';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import TeamCard from '../../components/common/TeamCard';
import ImagePlaceholder from '../../components/placeholders/ImagePlaceholder';
import { team } from '../../data/team';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us — Growme Tech';
  }, []);

  const values = [
    {
      title: 'Our Mission',
      desc: 'Create technology that solves real business problems and drives measurable growth.',
      icon: Target,
      color: 'bg-primary text-white',
    },
    {
      title: 'Our Vision',
      desc: 'To be a global partner in digital innovation, recognized for technical excellence and impact.',
      icon: Compass,
      color: 'bg-yellow-sticker text-black',
    },
    {
      title: 'Our Values',
      desc: '• Continuous Innovation\n• Radical Transparency\n• Uncompromising Client Success',
      icon: Award,
      color: 'bg-black text-white',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Client-Centric Engineering',
      desc: 'We embed ourselves in your domain to ensure software aligns precisely with business objectives.',
    },
    {
      title: 'Senior-Led Engineering',
      desc: 'Experienced architects and senior developers work directly on your product architecture.',
    },
    {
      title: 'Scalable MERN Architecture',
      desc: 'Modern codebases engineered for high throughput, modular extensions, and frictionless deployment.',
    },
    {
      title: 'Predictable Timelines',
      desc: 'Milestone-driven sprints, transparent Jira/Linear boards, and dependable delivery cadence.',
    },
    {
      title: 'Clean Code Standards',
      desc: 'Strict linting, automated CI/CD pipelines, documentation, and zero technical debt accumulation.',
    },
    {
      title: 'Continuous Support',
      desc: 'Dedicated post-launch warranty, cloud maintenance, monitoring, and proactive iteration.',
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ── 1. Hero & Company Overview ── */}
      <section className="py-16 md:py-24 border-b-2 border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <SectionLabel label="ABOUT US" />
                <StickerBadge text="EST. 2022" color="yellow" rotate={-2} size="sm" />
              </div>

              <SectionHeading size="xl" as="h1">
                MEET GROWME TECH.
              </SectionHeading>

              <p className="mt-6 text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                A team of innovators, designers, and full-stack engineers building modern websites, custom CRM systems, and scalable digital products that drive measurable business growth.
              </p>

              <p className="mt-4 text-base text-medium-gray leading-relaxed max-w-xl">
                Founded with the belief that technology should empower growth rather than complicate it, Growme Tech pairs Swiss-inspired design rigor with full-stack engineering. Whether you need a high-converting customer-facing website or a bespoke CRM system to manage your leads and operations under one unified roof, we engineer solutions built to scale.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/portfolio" variant="primary" arrow>
                  Explore Our Work
                </Button>
                <Button to="/contact" variant="secondary">
                  Get in Touch
                </Button>
              </div>
            </motion.div>

            {/* Right Graphic / Architectural Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="bg-warm-white border-3 border-black rounded-2xl p-6 shadow-brutal-lg rotate-1">
                  <ImagePlaceholder
                    label="Growme Tech HQ & Architecture Hub"
                    aspectRatio="4/3"
                    className="border-2 border-black"
                  />
                  <div className="mt-4 flex items-center justify-between text-xs font-display font-bold">
                    <span>Indore Engineering Center</span>
                    <span className="text-primary">Global Reach ↗</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4">
                  <StickerBadge text="INNOVATION FIRST" color="orange" rotate={-4} size="md" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── 2. Mission, Vision, Values ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel label="OUR FOUNDATION" />
            <SectionHeading size="lg">
              DRIVEN BY PRINCIPLE & PURPOSE.
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl border-2 border-black flex items-center justify-center mb-6 shadow-brutal-sm ${v.color}`}>
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display font-black text-2xl text-black mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm text-medium-gray font-medium leading-relaxed whitespace-pre-line">
                      {v.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black">
                    <span>GROWME CORE</span>
                    <span>0{idx + 1}</span>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. Why Choose Growme Tech ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel label="WHY US" />
              <SectionHeading size="xl">
                WHY BUSINESSES CHOOSE US.
              </SectionHeading>
              <p className="mt-3 text-base text-medium-gray max-w-xl">
                We combine architectural foresight with agile velocity to de-risk complex software projects.
              </p>
            </div>
            <StickerBadge text="ZERO COMPROMISE" color="yellow" rotate={2} size="md" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={item.title}
                className="bg-warm-white border-2 border-black rounded-2xl p-6 shadow-brutal flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <h3 className="font-display font-black text-lg text-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-medium-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 text-[10px] font-mono font-bold text-black/40">
                  PILLAR // 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. Team Section ── */}
      <section className="py-16 md:py-24 border-b-2 border-black bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel label="LEADERSHIP & TALENT" />
              <SectionHeading size="xl">
                THE PEOPLE BEHIND GROWME.
              </SectionHeading>
              <p className="mt-3 text-base text-medium-gray max-w-xl">
                Passionate architects, engineers, and product designers united by high craft and digital excellence.
              </p>
            </div>
            <Button to="/careers" variant="secondary" size="md" arrow>
              Join Our Team
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-10 p-4 bg-cream border-2 border-black rounded-xl shadow-brutal-sm flex items-center justify-between text-xs font-mono font-bold text-black max-w-xl mx-auto">
            <span>// 100% Senior & Lead Engineer Staffing</span>
            <span className="text-primary">Zero Junior Outsourcing ↗</span>
          </div>

        </div>
      </section>

      {/* ── 5. Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <StickerBadge text="READY TO GROW?" color="yellow" rotate={-2} size="md" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mt-4 text-white">
            Let's Collaborate on Your Next Breakthrough.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            Book a discovery call today to discuss your technical requirements and timelines.
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
