import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IndustryProps {
  data: {
    title: string;
    heading: string;
    services: string[];
    demoBtn: string;
    knowBtn: string;
  };
}

const IndustrySection: React.FC<IndustryProps> = ({ data }) => {
  return (
    <>
      <section
        className="
          relative overflow-hidden 
          w-full text-white flex flex-col items-center 
          pt-16 pb-29 md:pt-24 md:pb-28
        "
        style={{
          backgroundImage: "url('/saas-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* BLUE OVERLAY */}
        <div className="absolute inset-0 bg-secondary/90 pointer-events-none" />

        {/* DOT PATTERN */}
        <div className="absolute inset-0 bg-[url('/dot-bg.png')] opacity-20 pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          {/* TOP SMALL TITLE */}
          <h3 className="text-base md:text-lg font-semibold mb-6 md:mb-8">
            {data.title}
          </h3>

          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug md:leading-tight mb-8 md:mb-10">
            {data.heading.split("<br>").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* SERVICES */}
          <div className="mt-4 md:mt-6 text-lg flex justify-center flex-wrap gap-3 md:gap-4">
            {data.services.map((service, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-base md:text-lg"
              >
                {service}
                {i !== data.services.length - 1 && (
                  <span className="text-white/70">|</span>
                )}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 md:mt-10 flex justify-center gap-4 md:gap-6">
            <Link rel="stylesheet" href="/schedule-demo">
              <button className="bg-primary text-white cursor-pointer px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-base">
                {data.demoBtn}
              </button>
            </Link>

            <button className="border flex items-center gap-1 cursor-pointer border-white hover:bg-white hover:text-secondary px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-base transition">
              {data.knowBtn} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustrySection;
