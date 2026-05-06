import { notFound } from "next/navigation";
import { portfolioProjects } from "../../../data/portfolio";
import ProjectHero from "../../../components/portfolio/detail/ProjectHero";
import ProjectOverview from "../../../components/portfolio/detail/ProjectOverview";
import TechStackCarousel from "../../../components/portfolio/detail/TechStackCarousel";
import ProjectGallery from "../../../components/portfolio/detail/ProjectGallery";
import KeyFeaturesSection from "../../../components/portfolio/detail/KeyFeaturesSection";
import ChallengesSection from "../../../components/portfolio/detail/ChallengesSection";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Peaklyft Portfolio`,
    description: project.overview,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ProjectHero project={project} />

      {/* Top back button for desktop */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 hidden md:block">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-[#64748B] hover:text-[#F97316] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>
      </div>

      <ProjectOverview project={project} />

      {/* {project.techStack && project.techStack.length > 0 && (
        <TechStackCarousel techStack={project.techStack} />
      )} */}

      {project.images && project.images.length > 0 && (
        <ProjectGallery images={project.images} />
      )}

      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <KeyFeaturesSection features={project.keyFeatures} />
      )}

      {/* {project.challenges && project.challenges.length > 0 && (
        <ChallengesSection challenges={project.challenges} />
      )} */}

      {/* Bottom CTA to return */}
      <div className="py-16 text-center bg-white border-t border-[#E2E8F0]">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center px-8 py-4 hover:bg-primary border border-secondary text-secondary hover:text-white hover:border-primary rounded-lg font-bold transition-all hover:bg-[#EA580C] shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to All Projects
        </Link>
      </div>
    </main>
  );
}
