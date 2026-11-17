import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectImagePlaceholder from '../placeholders/ProjectImagePlaceholder';
import StickerBadge from './StickerBadge';

export default function ProjectCard({ project, className = '' }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`card-brutal group overflow-hidden flex flex-col ${className}`}
    >
      <div className="relative">
        <ProjectImagePlaceholder label={project.title} slug={project.slug} category={project.category} />
        <div className="absolute top-3 left-3">
          <StickerBadge text={project.industry} color="orange" size="sm" rotate={-2} />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-medium-gray leading-relaxed mb-4 flex-1">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-tag-blue rounded-md text-[11px] font-medium border border-black/10">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 bg-light-gray rounded-md text-[11px] font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-sm font-display font-bold text-primary group-hover:gap-2 transition-all">
          View Case Study
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
