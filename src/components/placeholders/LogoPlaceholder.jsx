import { Building } from 'lucide-react';

export default function LogoPlaceholder({ className = '', name = 'Logo' }) {
  return (
    <div
      className={`flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-border-gray rounded-xl text-medium-gray select-none ${className}`}
    >
      <Building size={18} strokeWidth={1.5} />
      <span className="text-sm font-display font-medium">{name}</span>
    </div>
  );
}
