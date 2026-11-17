import { motion } from 'framer-motion';
import StatCounter from '../../../components/common/StatCounter';
import StickerBadge from '../../../components/common/StickerBadge';
import { ArrowDoodle } from '../../../components/common/Decorations';

export default function StatsSection() {
  const stats = [
    { value: 4, suffix: '+', label: 'Years of Experience' },
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 30, suffix: '+', label: 'Happy Clients' },
    { value: 8, suffix: '+', label: 'Industries Served' },
  ];

  return (
    <section className="bg-warm-white border-b-2 border-black py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-2 border-black rounded-2xl bg-cream p-6 md:p-8 shadow-brutal flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Badge: OUR IMPACT */}
          <div className="flex-shrink-0">
            <div className="bg-violet text-white font-display font-black text-sm md:text-base uppercase tracking-wider px-6 py-2.5 rounded-full border-2 border-black shadow-brutal rotate-[-3deg]">
              OUR IMPACT
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 flex-1 w-full divide-y-2 md:divide-y-0 md:divide-x-2 divide-black/10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center ${
                  index > 0 ? 'pt-4 md:pt-0' : ''
                }`}
              >
                <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-black">
                  <StatCounter end={stat.value} suffix={stat.suffix} label="" />
                </div>
                <p className="text-xs sm:text-sm font-display font-bold text-medium-gray uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right Sticker: Sticky Note */}
          <div className="flex-shrink-0 relative hidden xl:block">
            <div className="bg-yellow-sticker border-2 border-black rounded-xl p-4 shadow-brutal rotate-[4deg] max-w-[160px] text-center">
              <p className="font-display font-black text-xs uppercase leading-snug">
                Turning Ideas into Impact!
              </p>
              <div className="mt-1 flex justify-center text-primary">
                ✦ ✦ ✦
              </div>
            </div>
          </div>

        </div>

        {/* Performance Tagline */}
        <p className="text-[11px] font-mono text-medium-gray text-center mt-3">
          // Verified milestones across web, mobile, and cloud-native deployments.
        </p>
      </div>
    </section>
  );
}
