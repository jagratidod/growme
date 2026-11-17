import TeamImagePlaceholder from '../placeholders/TeamImagePlaceholder';
import { ArrowUpRight } from 'lucide-react';

export default function TeamCard({ member, className = '' }) {
  return (
    <div className={`card-brutal p-6 flex flex-col items-center text-center group ${className}`}>
      <div className="flex justify-center mb-4">
        <TeamImagePlaceholder
          size="lg"
          initials={member.initials}
          name={member.name}
          color={member.color}
        />
      </div>
      
      <h3 className="font-display font-black text-lg text-black">{member.name}</h3>
      <p className="text-xs text-primary font-display font-black uppercase tracking-wider mt-1">
        {member.role}
      </p>
      
      <p className="text-xs text-medium-gray mt-3 leading-relaxed flex-1 font-medium">
        {member.bio}
      </p>

      {/* Expertise Tags */}
      {member.expertise && member.expertise.length > 0 && (
        <div className="mt-4 pt-3 border-t border-black/10 w-full flex flex-wrap justify-center gap-1.5">
          {member.expertise.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cream border border-black/20 text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Social links */}
      {member.social && (
        <div className="mt-3 flex items-center gap-2">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-display font-bold text-medium-gray hover:text-primary transition-colors flex items-center"
            >
              LinkedIn <ArrowUpRight size={10} />
            </a>
          )}
          {member.social.github && (
            <>
              <span className="text-black/20 text-xs">•</span>
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-display font-bold text-medium-gray hover:text-primary transition-colors flex items-center"
              >
                GitHub <ArrowUpRight size={10} />
              </a>
            </>
          )}
          {member.social.twitter && (
            <>
              <span className="text-black/20 text-xs">•</span>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-display font-bold text-medium-gray hover:text-primary transition-colors flex items-center"
              >
                Twitter <ArrowUpRight size={10} />
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
