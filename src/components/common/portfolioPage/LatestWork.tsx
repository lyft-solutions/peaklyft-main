"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioItems, categories, type PortfolioCategory } from "@/utils/portfolioData";

// ─── PortfolioCard ────────────────────────────────────────────────────────────

interface PortfolioCardProps {
  item: (typeof portfolioItems)[0];
  variant?: "default" | "graphic";
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, variant = "default" }) => {
  const [hovered, setHovered] = useState(false);

  if (variant === "graphic") {
    return (
      <div
        className="relative group overflow-hidden rounded-lg cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.10)" : "scale(1)" }}
          />
          <div
            className="absolute inset-0 bg-black/60 flex items-end transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <div className="p-4 w-full flex items-center justify-between">
              <span className="text-white font-semibold text-sm tracking-wide">View Project</span>
              <ArrowUpRight
                className="text-primary w-5 h-5 transition-transform duration-300"
                style={{ transform: hovered ? "translate(0,0)" : "translate(6px,6px)" }}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-neutral-800/90 px-4 py-3">
            <p className="text-white text-sm font-semibold">{item.title}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white overflow-hidden border border-gray-100 cursor-pointer shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden bg-gray-100"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"

        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-black/55 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <div className="border-2 border-white w-[90%] h-[90%] flex justify-center items-center duration-500 transition-all">
            <div className="text-center px-6">
              <p className="text-white font-bold text-xl mb-3 drop-shadow">{item.title}</p>
              {/* <div className="flex flex-wrap items-center justify-center gap-2">
              {item.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-white text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "var(--color-primary, #f97316)" }}
                >
                  {tag}
                </span>
              ))}
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{item.description}</p>
        <button
          className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all duration-200 cursor-pointer"
          style={{
            color: "var(--color-primary, #f97316)",
            gap: hovered ? "8px" : "4px",
          }}
        >
          View More
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// ─── Tab Button ───────────────────────────────────────────────────────────────

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-10 py-4 text-sm font-bold tracking-widest uppercase 
      transition-all duration-200 focus:outline-none cursor-pointer
      ${active
        ? "bg-primary text-white"
        : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"}
    `}
  >
    {label}
  </button>
);

// ─── Main Section ─────────────────────────────────────────────────────────────

interface LatestWorkProps {
  showTitle?: boolean;
  defaultCategory?: PortfolioCategory;
  itemsPerPage?: number;
}

const LatestWork: React.FC<LatestWorkProps> = ({
  showTitle = true,
  defaultCategory = "web",
  itemsPerPage = 6,
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(defaultCategory);

  const filtered = portfolioItems.filter((item) => item.category === activeCategory);
  const displayed = filtered.slice(0, itemsPerPage);
  const isGraphic = activeCategory === "graphic";

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="container mx-auto">

        {/* Title */}
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our{" "}
              <span style={{ color: "var(--color-primary, #f97316)" }}>Latest Work</span>
            </h2>
            <div
              className="mx-auto mt-3 h-1 w-12 rounded-full"
              style={{ backgroundColor: "var(--color-primary, #f97316)" }}
            />
          </div>
        )}

        {/* Tabs */}
        <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          {categories.map((cat) => (
            <TabButton
              key={cat.id}
              label={cat.label}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>

        {/* Grid */}
        {isGraphic ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((item) => (
              <PortfolioCard key={item.id} item={item} variant="graphic" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayed.map((item) => (
              <PortfolioCard key={item.id} item={item} variant="default" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestWork;