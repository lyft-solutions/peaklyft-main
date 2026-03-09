"use client"

import CTABanner from "@/src/components/common/portfolioPage/CtaBanner";
import HeroSection from "@/src/components/common/portfolioPage/HeroSection";
import PortfolioMasonryGrid from "@/src/components/common/portfolioPage/PortfolioSection";
import TechStackSection from "@/src/components/common/portfolioPage/TechStackSection";
import { portfolioItems } from "@/utils/portfolioData";

export default function PortfolioPage() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <PortfolioMasonryGrid items={portfolioItems} />
      <TechStackSection />
      <CTABanner />
    </main>
  );
}