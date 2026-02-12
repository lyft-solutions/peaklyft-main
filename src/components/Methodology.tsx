"use client";

import { useState, useEffect } from "react";

const methodologyData = [
  {
    icon: "spider.svg",
    title: "Discover",
    heading: "Product Discovery & Technical Analysis",
    description:
      "We begin by understanding your business objectives, user requirements, and technical constraints to define a scalable and future-ready product foundation.",
  },
  {
    icon: "claude.svg",
    title: "Architect",
    heading: "System Architecture & Strategic Planning",
    description:
      "We design secure system architecture, select the right technology stack, and create a structured development roadmap aligned with performance and scalability goals.",
  },
  {
    icon: "darkrender.svg",
    title: "Build & Scale",
    heading: "Agile Development & Continuous Optimization",
    description:
      "We develop, deploy, and continuously optimize your product using agile methodologies, cloud-native infrastructure, and performance-driven engineering practices.",
  },
];

export default function Methodology() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % methodologyData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 text-black rounded-[25px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-14">
        Peaklyft<span className="text-primary"> Methodology</span>
      </h2>

      <div
        className="text-center flex flex-col items-center justify-center rounded-[25px] py-8 md:py-12 px-4 md:px-6"
        style={{
          background:
            "radial-gradient(at center center, #0a4891 0%, #101D96 100%)",
        }}
      >
        <div className="hidden lg:flex items-center justify-center gap-0 mb-14 w-full max-w-5xl">
          <div className="flex flex-col items-center text-white/80">
            <svg
              className="w-10 h-10 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm">People</span>
          </div>

          <div className="flex items-center mx-2">
            <div className="w-12 h-0 border-t-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-8 border-l-white"></div>
          </div>

          <div
            className={`relative flex flex-col bg-[#FFFFFF08] rounded-[24px] h-[130px] w-[130px] items-center p-4 cursor-pointer transition-all
              ${
                active === 0
                  ? "border-2 border-white rounded-[24px] shadow-lg bg-[#FFFFFF08] h-[130px] w-[130px]"
                  : ""
              }
            `}
            onClick={() => setActive(0)}
          >
            <img
              src={methodologyData[0].icon}
              className="w-10 h-10 mb-2"
              alt=""
            />
            <p className="text-sm font-medium text-white">
              {methodologyData[0].title}
            </p>
            {active === 0 && (
              <div className="absolute -bottom-4 w-0 h-0 border-l-12 border-r-12 border-t-12 border-transparent border-t-white"></div>
            )}
          </div>

          <div className="flex items-center mx-2">
            <div className="w-12 h-0 border-t-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-8 border-l-white"></div>
          </div>

          <div
            className={`relative flex flex-col bg-[#FFFFFF08] rounded-[24px] h-[130px] w-[130px] items-center p-4 cursor-pointer transition-all
              ${
                active === 1
                  ? "bg-white/10 border-2 border-white shadow-lg"
                  : ""
              }
            `}
            onClick={() => setActive(1)}
          >
            <img
              src={methodologyData[1].icon}
              className="w-12 h-12 mb-2"
              alt=""
            />
            <p className="text-base font-medium text-white">
              {methodologyData[1].title}
            </p>
            {active === 1 && (
              <div className="absolute -bottom-4 w-0 h-0 border-l-12 border-r-12 border-t-12 border-transparent border-t-white"></div>
            )}
          </div>

          <div className="flex items-center mx-2">
            <div className="w-12 h-0 border-t-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-8 border-l-white"></div>
          </div>

          <div
            className={`relative flex flex-col bg-[#FFFFFF08] rounded-[24px] h-[130px] w-[130px] items-center p-4 cursor-pointer transition-all
              ${
                active === 2
                  ? "border-2 border-white rounded-[24px] shadow-lg"
                  : ""
              }
            `}
            onClick={() => setActive(2)}
          >
            <img
              src={methodologyData[2].icon}
              className="w-10 h-10 mb-2"
              alt=""
            />
            <p className="text-sm font-medium text-white">
              {methodologyData[2].title}
            </p>
            {active === 2 && (
              <div className="absolute -bottom-4 w-0 h-0 border-l-12 border-r-12 border-t-12 border-transparent border-t-white"></div>
            )}
          </div>

          <div className="flex items-center mx-2">
            <div className="w-12 h-0 border-t-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-8 border-l-white"></div>
          </div>

          <div className="flex flex-col items-center text-white/80">
            <svg
              className="w-10 h-10 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm">Business Growth</span>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Vertical Flow */}
        <div className="lg:hidden mb-8 md:mb-14 w-full flex flex-col items-center">
          {/* People Icon */}
          <div className="flex flex-col items-center text-white/80 mb-4">
            <svg
              className="w-8 h-8 md:w-10 md:h-10 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-xs md:text-sm">People</span>
          </div>

          <div className="flex flex-col items-center my-2">
            <div className="w-0 h-6 md:h-8 border-l-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-white"></div>
          </div>

          <div
            className={`relative flex flex-col bg-[#FFFFFF08] rounded-[24px] h-[110px] w-[110px] md:h-[130px] md:w-[130px] items-center p-3 md:p-4 cursor-pointer transition-all
              ${active === 0 ? "border-2 border-white shadow-lg" : ""}
            `}
            onClick={() => setActive(0)}
          >
            <img
              src={methodologyData[0].icon}
              className="w-8 h-8 md:w-10 md:h-10 mb-2"
              alt=""
            />
            <p className="text-xs md:text-sm font-medium text-white text-center">
              {methodologyData[0].title}
            </p>
          </div>

          <div className="flex flex-col items-center my-2">
            <div className="w-0 h-6 md:h-8 border-l-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-white"></div>
          </div>

          <div
            className={`relative flex flex-col bg-[#FFFFFF08] rounded-[24px] h-[110px] w-[110px] md:h-[130px] md:w-[130px] items-center p-3 md:p-4 cursor-pointer transition-all
              ${
                active === 1
                  ? "bg-white/10 border-2 border-white shadow-lg"
                  : ""
              }
            `}
            onClick={() => setActive(1)}
          >
            <img
              src={methodologyData[1].icon}
              className="w-10 h-10 md:w-12 md:h-12 mb-2"
              alt=""
            />
            <p className="text-sm md:text-base font-medium text-white text-center">
              {methodologyData[1].title}
            </p>
          </div>

          <div className="flex flex-col items-center my-2">
            <div className="w-0 h-6 md:h-8 border-l-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-white"></div>
          </div>

          <div
            className={`relative flex flex-col bg-[#FFFFFF08] rounded-[24px] h-[110px] w-[110px] md:h-[130px] md:w-[130px] items-center p-3 md:p-4 cursor-pointer transition-all
              ${active === 2 ? "border-2 border-white shadow-lg" : ""}
            `}
            onClick={() => setActive(2)}
          >
            <img
              src={methodologyData[2].icon}
              className="w-8 h-8 md:w-10 md:h-10 mb-2"
              alt=""
            />
            <p className="text-xs md:text-sm font-medium text-white text-center">
              {methodologyData[2].title}
            </p>
          </div>

          <div className="flex flex-col items-center my-2">
            <div className="w-0 h-6 md:h-8 border-l-2 border-dashed border-white"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-white"></div>
          </div>

          <div className="flex flex-col items-center text-white/80 mt-4">
            <svg
              className="w-8 h-8 md:w-10 md:h-10 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-xs md:text-sm">Business Growth</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-6 md:p-8 bg-[#FFFFFF08] rounded-lg">
          <h3 className="text-lg md:text-[20px] font-semibold mb-3 md:mb-4 text-white font-inter">
            {methodologyData[active].heading}
          </h3>
          <p className="text-white text-sm md:text-base leading-relaxed md:leading-[28.8px]">
            {methodologyData[active].description}
          </p>
        </div>
      </div>
    </section>
  );
}
