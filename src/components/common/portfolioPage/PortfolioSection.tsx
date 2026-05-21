"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PortfolioItem } from "@/utils/portfolioData";

interface PortfolioCardProps {
  item: PortfolioItem;
  variant?: "default" | "graphic";
}

// Individual masonry card
export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  item,
  variant = "default",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "graphic") {
    return (
      <div
        className="relative group overflow-hidden rounded-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div
            className={`absolute inset-0 bg-black/60 flex items-end transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-4 w-full">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm tracking-wide">
                  View Project
                </span>
                <ArrowUpRight className="text-primary w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-neutral-800/90 px-4 py-3">
            <p className="text-white text-sm font-medium">{item.title}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          style={{ display: "block" }}
        />
        {/* Arrow overlay on hover */}
        <div
          className={`absolute bottom-3 right-3 w-9 h-9 bg-black flex items-center justify-center rounded transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content below image */}
      <div className="pt-4 pb-2">
        <h3 className="text-gray-900 font-bold text-xl leading-snug mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-3">
          {item.description}
        </p>
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full uppercase tracking-wide font-medium"
              >
                {tag}
              </span>
            ))}
            {item.link && (
              <a
                href={item.link}
                className="ml-auto text-gray-400 hover:text-gray-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


// ── Masonry Grid wrapper ──────────────────────────────────────────────────────
// Drop-in replacement for whatever grid/list you currently render portfolio
// items in. Pass your full `items` array; the component splits them into two
// columns automatically so cards sit at their natural height (true masonry).

interface PortfolioMasonryGridProps {
  items: PortfolioItem[];
}

export const PortfolioMasonryGrid: React.FC<PortfolioMasonryGridProps> = ({
  items,
}) => {
  // Split items into two columns (left gets even-indexed, right gets odd)
  const leftCol = items.filter((_, i) => i % 2 === 0);
  const rightCol = items.filter((_, i) => i % 2 !== 0);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 items-start">
      {/* Left column */}
      <div className="flex flex-col gap-12">
        {leftCol.map((item) => (
          <PortfolioCard key={item.id ?? item.title} item={item} />
        ))}
      </div>
      {/* Right column — offset downward for masonry feel */}
      <div className="flex flex-col gap-12 md:mt-16">
        {rightCol.map((item) => (
          <PortfolioCard key={item.id ?? item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioMasonryGrid;