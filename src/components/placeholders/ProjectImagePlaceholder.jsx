import { 
  MonitorSmartphone, 
  TrendingUp, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  MapPin, 
  CreditCard,
  GraduationCap,
  Calendar
} from 'lucide-react';

export default function ProjectImagePlaceholder({ 
  className = '', 
  label = 'Project Preview', 
  slug = '', 
  category = '' 
}) {
  // Determine mock visual theme based on label or slug
  const text = (label + ' ' + slug + ' ' + category).toLowerCase();

  const isCommerce = text.includes('commerce') || text.includes('order');
  const isTravel = text.includes('travel') || text.includes('booking');
  const isLogistics = text.includes('delivery') || text.includes('logistic') || text.includes('route');
  const isHealth = text.includes('health') || text.includes('patient') || text.includes('medical');
  const isEdTech = text.includes('edtech') || text.includes('learn') || text.includes('student');
  const isFintech = text.includes('fintech') || text.includes('payment') || text.includes('gateway');

  return (
    <div
      className={`relative flex flex-col bg-warm-white border-2 border-black rounded-xl overflow-hidden select-none transition-all duration-300 group-hover:shadow-brutal-violet ${className}`}
      style={{ aspectRatio: '16/10' }}
    >
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-cream border-b-2 border-black">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 border border-black inline-block" />
        </div>
        
        {/* Fake URL Bar */}
        <div className="bg-white border border-black/30 rounded px-2.5 py-0.5 text-[9px] font-mono text-black/70 flex items-center gap-1">
          <span className="text-violet font-bold">https://</span>
          <span>preview.growme.tech</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-mono font-bold text-black uppercase">Live</span>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1 p-3.5 bg-[radial-gradient(#1111110d_1px,transparent_1px)] [background-size:12px_12px] flex flex-col justify-between overflow-hidden">
        
        {/* Upper Mock Visual Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center border border-black shadow-[1px_1px_0px_#f97316]">
              {isCommerce && <Zap size={14} className="text-yellow-300" />}
              {isTravel && <Calendar size={14} className="text-blue-300" />}
              {isLogistics && <MapPin size={14} className="text-emerald-300" />}
              {isHealth && <Activity size={14} className="text-red-300" />}
              {isEdTech && <GraduationCap size={14} className="text-purple-300" />}
              {isFintech && <CreditCard size={14} className="text-amber-300" />}
              {!isCommerce && !isTravel && !isLogistics && !isHealth && !isEdTech && !isFintech && (
                <MonitorSmartphone size={14} className="text-primary" />
              )}
            </div>
            <div>
              <span className="text-[11px] font-display font-black text-black block truncate max-w-[170px] sm:max-w-[210px]">
                {label}
              </span>
              <span className="text-[9px] font-mono text-medium-gray block">
                {isCommerce && 'Real-time WebSocket Sync • 12ms'}
                {isTravel && 'Multi-Vendor GDS Engine'}
                {isLogistics && 'AI Route Matrix Optimizer'}
                {isHealth && 'HIPAA Compliant WebRTC Video'}
                {isEdTech && 'Interactive Gamified Modules'}
                {isFintech && 'PCI-DSS Tier-1 Gateway'}
                {!isCommerce && !isTravel && !isLogistics && !isHealth && !isEdTech && !isFintech && (
                  'Production Microservice Mesh'
                )}
              </span>
            </div>
          </div>

          <span className="hidden sm:inline-block bg-yellow-sticker text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#111]">
            99.98% SLA
          </span>
        </div>

        {/* Center Mock Data & Visual Graphic */}
        <div className="my-auto py-2 grid grid-cols-3 gap-2">
          <div className="bg-white border border-black rounded-lg p-2 shadow-brutal-sm">
            <span className="text-[8px] font-mono uppercase text-medium-gray block">Metrics</span>
            <span className="text-xs font-display font-black text-primary block mt-0.5">
              {isCommerce ? '+340% GMV' : isLogistics ? '14.2m SLA' : isHealth ? '65k Vitals' : '+185% KPI'}
            </span>
          </div>

          <div className="bg-white border border-black rounded-lg p-2 shadow-brutal-sm">
            <span className="text-[8px] font-mono uppercase text-medium-gray block">Latency</span>
            <span className="text-xs font-display font-black text-black block mt-0.5">
              18ms Edge
            </span>
          </div>

          <div className="bg-white border border-black rounded-lg p-2 shadow-brutal-sm">
            <span className="text-[8px] font-mono uppercase text-medium-gray block">Status</span>
            <span className="text-xs font-display font-black text-emerald-600 block mt-0.5 flex items-center gap-1">
              <ShieldCheck size={11} /> Healthy
            </span>
          </div>
        </div>

        {/* Bottom Sparkline / Bar Graphic */}
        <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[9px] font-mono text-medium-gray">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-12 bg-black/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-4/5 rounded-full" />
            </div>
            <span className="text-black font-bold">PROD // US-EAST-1</span>
          </div>
          <span className="text-primary font-bold flex items-center gap-0.5">
            <TrendingUp size={11} /> Verified Impact
          </span>
        </div>

      </div>
    </div>
  );
}
