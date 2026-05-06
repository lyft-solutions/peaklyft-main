import Image from "next/image";
import Link from "next/link";
import { PortfolioProject } from "../../types/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
  index?: number;
  isVisible?: boolean;
}

export default function ProjectCard({
  project,
  index = 0,
  isVisible = true,
}: ProjectCardProps) {
  return (
    <div
      className={`transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${isVisible ? index * 50 : 0}ms` }}
    >
      <div className="group h-full bg-white rounded-xl overflow-hidden border border-[#E2E8F0] transition-all duration-300 ease-in-out md:hover:-translate-y-1.5 md:hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col">
        {/* Image Container */}
        <div className="relative h-[200px] md:h-[240px] lg:h-[260px] w-full overflow-hidden">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Hover Overlay (Hidden on Mobile) */}
          <div className="hidden md:flex absolute inset-0 bg-black/65 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 items-center justify-center z-10">
            <span className="text-white font-bold text-2xl tracking-wide opacity-0 translate-y-4 scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
              {project.title}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative flex-grow flex flex-col">
          {/* Category Badge */}
          <div className="absolute top-6 right-6">
            <span className="inline-block px-3 py-1 bg-gray-100 text-[#1D4ED8] text-xs font-semibold rounded-full">
              {project.category
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </span>
          </div>

          <h3 className="font-semibold text-xl text-[#0F172A] pr-20">
            {project.title}
          </h3>

          <p className="text-[#475569] text-sm mt-2 line-clamp-2 flex-grow">
            {project.shortDescription}
          </p>

          <div className="mt-4">
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center text-secondary font-medium text-sm hover:underline"
            >
              View More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
