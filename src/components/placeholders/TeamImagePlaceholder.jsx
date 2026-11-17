import { User, Sparkles } from 'lucide-react';

export default function TeamImagePlaceholder({ 
  className = '', 
  size = 'md', 
  initials = '', 
  name = '', 
  color = '' 
}) {
  const sizes = {
    xs: 'w-10 h-10 text-xs',
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-lg',
    lg: 'w-28 h-28 text-2xl',
    xl: 'w-36 h-36 text-3xl',
  };

  const badgeSizes = {
    xs: 'w-2.5 h-2.5',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  // Derive initials if not provided
  let displayInitials = initials;
  if (!displayInitials && name) {
    const parts = name.trim().split(' ');
    displayInitials = parts.length > 1 
      ? `${parts[0][0]}${parts[parts.length - 1][0]}` 
      : parts[0].slice(0, 2);
  }

  // Pre-configured vibrant pastel backgrounds for neo-brutalist avatar style
  const defaultColors = [
    'bg-[#FDE68A] text-black',
    'bg-[#F97316] text-white',
    'bg-[#DBEAFE] text-black',
    'bg-[#D1FAE5] text-black',
    'bg-[#EDE9FE] text-black',
    'bg-[#FCE7F3] text-black',
  ];

  // Hash name or initials for deterministic color if no color given
  const hash = (name || initials || 'user').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const selectedColor = color || defaultColors[hash % defaultColors.length];

  return (
    <div className={`relative inline-flex items-center justify-center select-none flex-shrink-0 ${className}`}>
      {/* Neo-brutalist circle avatar */}
      <div
        className={`flex items-center justify-center rounded-2xl border-2 border-black font-display font-black shadow-brutal-sm transition-transform duration-200 group-hover:scale-105 ${sizes[size] || sizes.md} ${selectedColor}`}
      >
        {displayInitials ? (
          <span className="uppercase tracking-tight">{displayInitials}</span>
        ) : (
          <User size={size === 'sm' ? 18 : size === 'lg' ? 32 : 24} strokeWidth={2} />
        )}
      </div>

      {/* Online / Active status indicator badge */}
      <span
        className={`absolute -bottom-1 -right-1 rounded-full bg-emerald-500 border-2 border-black shadow-[1px_1px_0px_#111] ${badgeSizes[size] || badgeSizes.md}`}
        title="Verified Team Member"
      />
    </div>
  );
}
