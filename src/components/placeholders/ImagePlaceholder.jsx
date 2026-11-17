import { Sparkles, Terminal, Code2, Layers, Cpu } from 'lucide-react';

export default function ImagePlaceholder({
  label = 'Visual Showcase',
  aspectRatio = '16/9',
  className = '',
  dark = false,
  rounded = true,
  iconSize = 24,
}) {
  return (
    <div
      className={`relative flex flex-col justify-between border-2 border-black overflow-hidden select-none shadow-brutal transition-all duration-300 ${
        dark ? 'bg-deep-black text-white' : 'bg-warm-white text-black'
      } ${rounded ? 'rounded-2xl' : ''} ${className}`}
      style={{ aspectRatio }}
    >
      {/* Top Header Bar */}
      <div className={`flex items-center justify-between px-4 py-2.5 border-b-2 border-black ${dark ? 'bg-[#181818]' : 'bg-cream'}`}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 border border-black inline-block" />
        </div>
        <span className="text-[10px] font-mono font-bold tracking-wider uppercase opacity-70">
          GROWME_STUDIO // SYS
        </span>
        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
      </div>

      {/* Main Content Area */}
      <div className="relative flex-1 p-6 flex flex-col items-center justify-center text-center bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:16px_16px]">
        {/* Decorative Badge */}
        <div className="absolute top-3 right-3 bg-yellow-sticker text-black text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#111]">
          ENGINEERED
        </div>

        {/* Central Graphic */}
        <div className="relative mb-3">
          <div className="w-14 h-14 rounded-2xl bg-primary text-white border-2 border-black flex items-center justify-center shadow-brutal-sm rotate-[-2deg]">
            <Cpu size={iconSize || 26} />
          </div>
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-xl bg-white text-black border-2 border-black flex items-center justify-center shadow-brutal-sm rotate-[4deg]">
            <Sparkles size={14} className="text-primary" />
          </div>
        </div>

        <h4 className="font-display font-black text-sm uppercase tracking-tight max-w-[85%]">
          {label}
        </h4>
        <span className="text-[10px] font-mono text-medium-gray mt-1">
          High Performance • Precision Engineered
        </span>
      </div>

      {/* Bottom Bar */}
      <div className={`px-4 py-2 border-t-2 border-black/10 flex items-center justify-between text-[10px] font-mono font-bold ${dark ? 'text-gray-400' : 'text-medium-gray'}`}>
        <span>STATUS: PRODUCTION</span>
        <span className="text-primary">GROWME TECH ↗</span>
      </div>
    </div>
  );
}
