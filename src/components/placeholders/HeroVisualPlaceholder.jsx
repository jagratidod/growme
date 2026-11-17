import { Code2, Monitor, Layers } from 'lucide-react';

export default function HeroVisualPlaceholder({ className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center bg-light-gray border-2 border-dashed border-border-gray rounded-2xl text-medium-gray overflow-hidden ${className}`}
      style={{ aspectRatio: '4/3' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 sticker-orange text-[10px] rotate-[-3deg]">
        GROWME TECH
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-xl border-2 border-border-gray bg-white flex items-center justify-center">
            <Code2 size={20} />
          </div>
          <div className="w-12 h-12 rounded-xl border-2 border-border-gray bg-white flex items-center justify-center">
            <Monitor size={20} />
          </div>
          <div className="w-12 h-12 rounded-xl border-2 border-border-gray bg-white flex items-center justify-center">
            <Layers size={20} />
          </div>
        </div>
        <span className="text-xs font-sans">Hero Visual Area</span>
      </div>
    </div>
  );
}
