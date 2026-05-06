import Link from "next/link";
import Image from "next/image";
import { PortfolioProject } from "@/src/types/portfolio";

export default function ProjectHero({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <section className="relative bg-[#0F172A] text-white pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/portfolio"
            className="hover:text-white transition-colors"
          >
            Portfolio
          </Link>
          <span>/</span>
          <span className="text-white">{project.title}</span>
        </div>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="px-4 py-1.5 rounded-full bg-[#F97316] text-white text-sm font-semibold tracking-wide shadow-md capitalize">
            {project.category.replace("-", " ")}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          {project.title}
        </h1>

        {/* Meta row */}
        {/* <div className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-8">
          {project.client && (
            <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              Client: <span className="text-gray-300">{project.client}</span>
            </div>
          )}
          {project.year && (
            <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              Year: <span className="text-gray-300">{project.year}</span>
            </div>
          )}
          {project.duration && (
            <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              Duration:{" "}
              <span className="text-gray-300">{project.duration}</span>
            </div>
          )}
        </div> */}

        {/* Mockup Image */}
        <div className="w-full max-w-5xl mx-auto mt-8">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1E293B]">
            <Image
              src={project.mockupImage}
              alt={`${project.title} Mockup`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
