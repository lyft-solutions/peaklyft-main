"use client";

import { useState, useEffect } from "react";
import { portfolioProjects } from "../../data/portfolio";
import { PortfolioCategory } from "../../types/portfolio";
import ProjectCard from "./ProjectCard";
import CategoryTabs from "./CategoryTabs";
import PortfolioSkeleton from "./PortfolioSkeleton";

export default function ProjectGrid() {
  const [activeTab, setActiveTab] =
    useState<PortfolioCategory>("web-development");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedProjects, setDisplayedProjects] = useState(
    portfolioProjects.filter((p) => p.category === "web-development"),
  );

  useEffect(() => {
    // Initial fake loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (newTab: PortfolioCategory) => {
    if (newTab === activeTab) return;

    setIsVisible(false);
    setIsLoading(true);

    setTimeout(() => {
      setActiveTab(newTab);
      setDisplayedProjects(
        portfolioProjects.filter((p) => p.category === newTab),
      );

      setTimeout(() => {
        setIsLoading(false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      }, 300);
    }, 300);
  };

  return (
    <div>
      <CategoryTabs
        activeCategory={activeTab}
        onCategoryChange={handleTabChange}
      />

      {isLoading ? (
        <PortfolioSkeleton />
      ) : displayedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${activeTab}`}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-[#475569] flex flex-col items-center justify-center min-h-[300px]">
          <svg
            className="w-16 h-16 mb-4 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <p className="text-lg font-medium">
            No projects in this category yet.
          </p>
          <p className="text-sm mt-2">Check back soon for new updates.</p>
        </div>
      )}
    </div>
  );
}
