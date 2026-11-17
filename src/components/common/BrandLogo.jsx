import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function BrandLogo({ className = '', size = 'md', variant = 'light' }) {
  const [imgError, setImgError] = useState(false);

  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon Mark / Badge */}
      {!imgError ? (
        <div className="relative flex-shrink-0">
          <img
            src="/GROWME Black and Violet Logo.png"
            alt="Growme Tech Logo"
            className={`${size === 'sm' ? 'h-8' : size === 'lg' ? 'h-11' : 'h-9'} w-auto object-contain rounded-lg border-2 border-black shadow-brutal-sm transition-transform duration-200 group-hover:scale-105`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="w-9 h-9 rounded-xl bg-violet border-2 border-black flex items-center justify-center shadow-brutal-sm">
          <Sparkles size={18} className="text-white" />
        </div>
      )}

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-black tracking-tight ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'} ${isDark ? 'text-white' : 'text-black'}`}>
            Growme<span className="text-violet">.</span>Tech
          </span>
          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-black bg-yellow-sticker text-black shadow-[1px_1px_0px_#111]">
            V2
          </span>
        </div>
        <span className={`hidden sm:block text-[9px] font-mono tracking-wider uppercase mt-1 ${isDark ? 'text-gray-400' : 'text-medium-gray'}`}>
          Digital Solutions
        </span>
      </div>
    </div>
  );
}
