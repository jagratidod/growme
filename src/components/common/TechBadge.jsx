export default function TechBadge({ name, className = '', color }) {
  // Hash name to pick subtle accent dot color
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const dotColors = ['bg-orange-500', 'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-yellow-500'];
  const dotColor = color || dotColors[hash % dotColors.length];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border-2 border-black rounded-full text-xs font-display font-bold text-black shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal hover:bg-cream transition-all cursor-default select-none ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${dotColor} border border-black/40`} />
      {name}
    </span>
  );
}
