"use client";

import { useState } from "react";
import { KeyFeature } from "@/src/types/portfolio";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function KeyFeaturesSection({
  features,
}: {
  features: KeyFeature[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Key Features
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Desktop View: Tabs Sidebar */}
        <div className="hidden md:flex flex-row gap-12">
          {/* Sidebar */}
          <div className="w-1/3 flex flex-col border-l-2 border-[#E2E8F0]">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-6 py-5 -ml-[2px] transition-all duration-300 ${isActive
                    ? "border-l-4 border-secondary bg-orange-50/60 text-secondary font-bold"
                    : "border-l-4 border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-gray-50"
                    }`}
                >
                  <span className="text-lg">{feature.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-2/3 bg-[#F8FAFC] rounded-2xl p-10 lg:p-14 border border-[#E2E8F0] shadow-sm flex items-center min-h-[320px]">
            <div
              key={activeIndex} // this key forces re-render and re-triggers animation on tab change
              className="animate-[fadeIn_0.4s_ease-out_forwards]"
            >
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                {features[activeIndex].title}
              </h3>
              <p className="text-[#475569] text-lg leading-relaxed">
                {features[activeIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View: Accordion */}
        <div className="md:hidden flex flex-col space-y-4">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${isActive ? "border-[#F97316] shadow-md" : "border-[#E2E8F0]"
                  }`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className={`w-full text-left px-5 py-4 flex justify-between items-center ${isActive
                    ? "bg-orange-50/60 text-[#F97316]"
                    : "bg-white text-[#0F172A]"
                    }`}
                >
                  <span className="font-semibold">{feature.title}</span>
                  {isActive ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#F97316]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#64748B]" />
                  )}
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isActive
                    ? "max-h-96 py-5 border-t border-orange-100/50 bg-white"
                    : "max-h-0 py-0"
                    }`}
                >
                  <p className="text-[#475569]">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}
