import Link from "next/link";
import { PortfolioProject } from "@/src/types/portfolio";
import { CheckCircle2 } from "lucide-react";

export default function ProjectOverview({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* Left column: Overview */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
              Project Overview
            </h2>
            <div className="w-40 h-1 bg-secondary mb-8 rounded-full"></div>
            <p className="text-lg text-[#475569] leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>

          {/* Right column: Key Features */}
          {/* {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                  Key Features
                </h3>
                <ul className="space-y-5 mb-8 max-h-[200px] overflow-auto">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[#0F172A] font-semibold text-sm">
                          {feature.title}
                        </span>
                        <span className="text-[#64748B] text-sm leading-relaxed">
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
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
          )} */}
        </div>
      </div>
    </section>
  );
}