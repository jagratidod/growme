import { Star, Quote } from 'lucide-react';
import TeamImagePlaceholder from '../placeholders/TeamImagePlaceholder';

export default function TestimonialCard({ testimonial, className = '' }) {
  return (
    <div className={`card-brutal p-6 flex flex-col justify-between group ${className}`}>
      <div>
        {/* Rating stars & tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={15}
                className={i < testimonial.rating ? 'fill-primary text-primary' : 'text-border-gray'}
              />
            ))}
          </div>

          {testimonial.tag && (
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-black bg-cream text-black shadow-[1px_1px_0px_#111]">
              {testimonial.tag}
            </span>
          )}
        </div>

        {/* Quote */}
        <p className="text-sm text-black leading-relaxed font-medium mb-6 relative">
          <span className="text-primary font-serif font-black text-2xl leading-none mr-1 inline-block align-top">“</span>
          {testimonial.quote}
          <span className="text-primary font-serif font-black text-2xl leading-none ml-1 inline-block align-bottom">”</span>
        </p>
      </div>

      {/* Author Row */}
      <div className="flex items-center gap-3 pt-4 border-t-2 border-black/10">
        <TeamImagePlaceholder
          size="sm"
          initials={testimonial.avatarInitials}
          name={testimonial.name}
          color={testimonial.avatarBg}
        />
        <div>
          <p className="font-display font-black text-sm text-black">{testimonial.name}</p>
          <p className="text-xs text-medium-gray font-medium">
            {testimonial.role} <span className="text-primary font-bold">@</span> {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
