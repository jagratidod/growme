import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Globe, Smartphone, Palette, Code2, ShoppingCart, Bot, Cloud, Repeat, Database, Users } from 'lucide-react';

const iconMap = { Globe, Smartphone, Palette, Code2, ShoppingCart, Bot, Cloud, Repeat, Database, Users };

export default function ServiceCard({ service, className = '' }) {
  const IconComponent = iconMap[service.icon] || Globe;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`card-brutal group flex flex-col justify-between p-5 md:p-6 ${className}`}
    >
      <div>
        <div className="w-12 h-12 rounded-xl border-2 border-black bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
          <IconComponent size={22} />
        </div>
        <h3 className="font-display font-bold text-base md:text-lg mb-2">{service.shortTitle || service.title}</h3>
        <p className="text-sm text-medium-gray leading-relaxed">{service.shortDescription}</p>
      </div>
      <div className="flex items-center gap-1 mt-4 text-sm font-display font-bold text-primary group-hover:gap-2 transition-all">
        Learn More
        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </Link>
  );
}
