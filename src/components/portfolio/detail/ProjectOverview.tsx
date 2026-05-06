import Link from "next/link";
import { PortfolioProject } from "@/src/types/portfolio";

export default function ProjectOverview({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left column: Overview */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
              Project Overview
            </h2>
            <div className="w-40 h-1 bg-secondary mb-8 rounded-full"></div>
            <p className="text-lg text-[#475569] leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>

          {/* Right column: Quick Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Quick Details
              </h3>
              <ul className="space-y-4 mb-8">
                {project.client && (
                  <li className="flex flex-col">
                    <span className="text-sm text-[#64748B] font-medium">
                      Client
                    </span>
                    <span className="text-[#0F172A] font-semibold">
                      {project.client}
                    </span>
                  </li>
                )}
                {project.year && (
                  <li className="flex flex-col">
                    <span className="text-sm text-[#64748B] font-medium">
                      Year
                    </span>
                    <span className="text-[#0F172A] font-semibold">
                      {project.year}
                    </span>
                  </li>
                )}
                {project.duration && (
                  <li className="flex flex-col">
                    <span className="text-sm text-[#64748B] font-medium">
                      Duration
                    </span>
                    <span className="text-[#0F172A] font-semibold">
                      {project.duration}
                    </span>
                  </li>
                )}
                <li className="flex flex-col">
                  <span className="text-sm text-[#64748B] font-medium">
                    Category
                  </span>
                  <span className="text-[#0F172A] font-semibold capitalize">
                    {project.category.replace("-", " ")}
                  </span>
                </li>
              </ul>

              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-6 rounded-lg font-bold transition-all duration-300 ease-in-out border-2 border-secondary text-secondary hover:bg-primary hover:border-primary hover:text-white"
                >
                  View Live Project
                </Link>
              ) : (
                <div className="block w-full text-center py-3 px-6 rounded-lg font-bold border-2 border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed">
                  Private Project
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
