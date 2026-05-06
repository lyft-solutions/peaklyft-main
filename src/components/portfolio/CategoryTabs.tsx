"use client";

import { PortfolioCategory } from "../../types/portfolio";
import { portfolioCategories } from "../../data/portfolio";

interface CategoryTabsProps {
  activeCategory: PortfolioCategory;
  onCategoryChange: (category: PortfolioCategory) => void;
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div
      className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-6 mb-12 overflow-x-auto scrollbar-hide pb-2 md:pb-0"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {portfolioCategories.map((tab) => {
        const isActive = activeCategory === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onCategoryChange(tab.id as PortfolioCategory)}
            className={`flex-shrink-0 text-[20px] font-bold px-8 py-2.5 rounded transition-colors duration-300 ease-in-out font-medium
              ${isActive
                ? "bg-secondary text-white shadow-md border border-secondary"
                : "bg-white text-[#0F172A] border border-[#E2E8F0] hover:bg-secondary hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
