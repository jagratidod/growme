import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Heart, ShoppingBag, GraduationCap, Truck, Plane, Building2, Landmark, UtensilsCrossed } from 'lucide-react';

const iconMap = { Heart, ShoppingBag, GraduationCap, Truck, Plane, Building2, Landmark, UtensilsCrossed };

export default function IndustryCard({ industry, className = '' }) {
  const IconComponent = iconMap[industry.icon] || Building2;

  return (
    <Link
      to={`/industries/${industry.slug}`}
      className={`card-brutal group flex items-center gap-4 p-4 md:p-5 ${className}`}
    >
      <div className="w-11 h-11 rounded-xl border-2 border-black bg-yellow-sticker flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
        <IconComponent size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-bold text-sm md:text-base">{industry.title}</h3>
      </div>
      <ArrowUpRight size={18} className="text-medium-gray flex-shrink-0 group-hover:text-primary transition-colors" />
    </Link>
  );
}
