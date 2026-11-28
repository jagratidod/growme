import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import ProjectImagePlaceholder from '../placeholders/ProjectImagePlaceholder';
import StickerBadge from './StickerBadge';

export default function ProjectCard({ project, className = '' }) {
  return (
    <div className={`card-brutal group overflow-hidden flex flex-col ${className}`}>
      <Link to={`/portfolio/${project.slug}`} className="relative block overflow-hidden">
        <ProjectImagePlaceholder
          label={project.title}
          slug={project.slug}
          category={project.category}
          liveUrl={project.liveUrl}
        />
        <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
          <StickerBadge text={project.industry} color="orange" size="sm" rotate={-2} />
          {project.liveUrl && (
            <span className="px-2 py-0.5 bg-emerald-400 text-black border border-black font-mono text-[10px] font-black rounded-full shadow-[1px_1px_0px_#000] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-950 animate-pulse" />
              LIVE
            </span>
          )}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link to={`/portfolio/${project.slug}`} className="block">
          <h3 className="font-display font-bold text-lg mb-2 text-black hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-sm text-medium-gray leading-relaxed mb-4 flex-1">
          {project.shortDescription}
        </p>

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

        <div className="flex items-center justify-between pt-3 border-t border-black/10 mt-auto gap-2">
          <Link
            to={`/portfolio/${project.slug}`}
            className="flex items-center gap-1 text-sm font-display font-bold text-primary group-hover:gap-1.5 transition-all"
          >
            Case Study
            <ArrowUpRight size={16} />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-sticker text-black border border-black rounded-lg font-display font-bold text-xs uppercase shadow-[1.5px_1.5px_0px_#000] hover:bg-yellow-300 hover:-translate-y-0.5 transition-all"
            >
              Live Demo
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
