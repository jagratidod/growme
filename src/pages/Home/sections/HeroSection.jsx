import { motion } from 'framer-motion';
import Button from '../../../components/common/Button';
import StickerBadge from '../../../components/common/StickerBadge';
import { OrangeDots, SquigglyLine, StarShape, CodeBrackets } from '../../../components/common/Decorations';
import { Laptop, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b-2 border-black">
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Sticker */}
            <div className="flex items-center gap-3 mb-4">
              <StickerBadge text="TECH COMPANY" color="violet" rotate={-2} size="md" />
              <div className="hidden sm:flex items-center gap-1 text-xs font-display font-bold text-medium-gray">
                <span>Ideas</span>
                <span>→</span>
                <span>Products</span>
                <span>→</span>
                <span className="text-violet font-bold">Growth</span>
              </div>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-black text-balance uppercase">
              Building Digital Solutions That Help Businesses{' '}
              <span className="text-primary relative inline-block">
                Grow.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 160 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 7C45 2 115 2 157 7"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base md:text-lg text-medium-gray font-medium max-w-xl leading-relaxed">
              We design, develop, and scale high-impact digital solutions — from high-converting websites and custom CRM systems to scalable mobile apps and enterprise automation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/get-a-quote" variant="primary" size="lg" arrow>
                Let's Discuss Your Project
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>

            {/* Micro proof points */}
            <div className="mt-10 flex items-center gap-6 pt-6 border-t-2 border-black/10 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <OrangeDots count={3} size="sm" />
                <span className="text-xs font-display font-bold uppercase tracking-wider text-black">
                  MERN & Cloud Architecture
                </span>
              </div>
              <div className="hidden sm:block text-medium-gray text-xs">|</div>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-black flex items-center gap-1">
                <Sparkles size={14} className="text-primary" /> Swiss Grid Precision
              </span>
            </div>
          </motion.div>

          {/* Right Column: Neo-Brutalist Collage & Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Collage Canvas */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Box */}
              <div className="relative bg-warm-white border-3 border-black rounded-2xl p-6 shadow-brutal-lg overflow-hidden">
                {/* Top bar with macOS style dots */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-black">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-400 border border-black inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-300 border border-black inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-400 border border-black inline-block" />
                  </div>
                  <span className="text-xs font-mono font-bold text-medium-gray uppercase tracking-wider">
                    GROWME_CORE.JSX
                  </span>
                  <Terminal size={16} />
                </div>

                {/* Abstract Interactive Code / Illustration Mockup */}
                <div className="bg-[#FAF8F5] border-2 border-black rounded-xl p-6 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Decorative corner tag in brand violet */}
                  <div className="absolute -top-1 -right-1 bg-violet text-white text-[10px] font-display font-black px-3 py-1 border-b-2 border-l-2 border-black rounded-bl-lg shadow-[-2px_2px_0px_#111]">
                    V2.5 READY
                  </div>

                  {/* Code snippet decoration */}
                  <div className="font-mono text-xs text-black/80 space-y-1.5 leading-relaxed">
                    <div className="text-violet font-bold">const company = "Growme Tech";</div>
                    <div>const coreServices = ["Websites", "Custom CRMs", "Mobile Apps"];</div>
                    <div className="text-emerald-700 font-semibold">// Seamless Web-to-CRM automation</div>
                    <div className="text-black font-semibold">
                      await client.launch({'{'} success: true {'}'});
                    </div>
                  </div>

                  {/* Centered Graphic Unit */}
                  <div className="my-4 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-24 bg-white border-2 border-black rounded-xl shadow-brutal flex flex-col items-center justify-center p-3 rotate-[-3deg]">
                        <Laptop size={36} className="text-primary mb-1" />
                        <span className="text-[11px] font-display font-bold">&lt;/&gt; Web + CRM Dev</span>
                      </div>
                      {/* Barcode badge sticker */}
                      <div className="absolute -bottom-4 -right-4 bg-yellow-sticker border-2 border-black rounded-lg px-2.5 py-1 shadow-brutal-sm rotate-[5deg] text-[10px] font-mono font-black">
                        * GROWME-2026 *
                      </div>
                    </div>
                  </div>

                  {/* Terminal mini status */}
                  <div className="pt-3 border-t-2 border-black/10 flex items-center justify-between text-xs font-display font-bold">
                    <span className="flex items-center gap-1.5 text-black">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                      Active Sprints
                    </span>
                    <span className="text-primary">100% Reliable Delivery</span>
                  </div>
                </div>

                {/* Bottom Bar Info */}
                <div className="mt-4 flex items-center justify-between text-xs font-display font-bold text-black">
                  <span>Indore ✦ India</span>
                  <span className="text-primary">Worldwide Clients ↗</span>
                </div>
              </div>

              {/* Floating Neo-Brutalist Badges around visual box */}
              <div className="absolute -top-5 -left-4 z-20">
                <StickerBadge text="WEBSITES" color="orange" rotate={-6} size="md" />
              </div>
              <div className="absolute -top-6 right-8 z-20">
                <StickerBadge text="CUSTOM CRM" color="yellow" rotate={4} size="md" />
              </div>
              <div className="absolute -bottom-4 -left-3 z-20">
                <StickerBadge text="SCALE" color="violet" rotate={3} size="md" />
              </div>
              <div className="absolute -bottom-5 right-6 z-20 hidden sm:block">
                <div className="bg-yellow-sticker border-2 border-black rounded-xl p-2.5 shadow-brutal-sm rotate-[-4deg] flex items-center gap-2">
                  <StarShape size={16} />
                  <span className="text-xs font-display font-black">GROWTH GUARANTEED</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
