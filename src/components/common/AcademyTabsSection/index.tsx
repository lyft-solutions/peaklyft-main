"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../ui/button";

export interface AcademyTab {
  id: string;
  name: string;
  heading: string;
  description: string;
  points: string[];
  buttonLabel: string;
  buttonLink: string;
}

interface Props {
  title: string;
  tabs: AcademyTab[];
  image: string;
}

const AcademyTabs: React.FC<Props> = ({ title, tabs, image }) => {
  const [active, setActive] = useState(tabs[0].id);
  const activeData = tabs.find((t) => t.id === active)!;

  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10">
          {title}
        </h2>

        {/* Desktop tabs - unchanged for desktop (md and above) */}
        <div className="hidden md:flex container h-[72px] flex-wrap overflow-hidden border-b border-white">
          {tabs.map((tab) => (
            <Button
              variant="secondary"
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-[46.67px] h-full text-[18px] rounded-b-none border bg-[#E4E4E4] font-medium w-full sm:w-auto text-center transition-all
    ${active === tab.id
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary hover:bg-secondary hover:text-white"
                }`}
              dangerouslySetInnerHTML={{ __html: tab.name }}
            />
          ))}
        </div>

        {/* Mobile/Tablet tabs - stacked vertical buttons */}
        <div className="flex md:hidden flex-col gap-3 mb-6">
          {tabs.map((tab) => (
            <Button
              variant="secondary"
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-6 py-4 text-base rounded-lg font-medium w-full text-center transition-all min-h-[56px]
    ${active === tab.id
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary hover:bg-secondary hover:text-white border-2 border-secondary"
                }`}
              dangerouslySetInnerHTML={{ __html: tab.name.replace(/<br\s*\/?>/gi, ' ') }}
            />
          ))}
        </div>

        <div
          className="w-full relative overflow-hidden flex flex-col md:flex-row p-6 sm:p-8 md:p-10"
          style={{
            background: "url('/3D-1.jpg') center center/cover no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#000000]/60 pointer-events-none"></div>

          <div className="relative z-10 w-full md:w-1/2 text-white md:pr-6">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-3 sm:mb-4 md:mb-4">
              {activeData.heading}
            </h3>

            <p className="text-[15px] sm:text-base md:text-[17px] leading-[24px] sm:leading-[26px] md:leading-[28px] mb-4 sm:mb-5 md:mb-6 opacity-95">
              {activeData.description}
            </p>

            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-6 sm:mb-7 md:mb-8">
              {activeData.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-lg sm:text-xl md:text-xl flex-shrink-0">•</span>
                  <p className="text-sm sm:text-[15px] md:text-base leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>

            <Button
              variant="default"
              className="rounded-[4px] py-[22.5px] shadow-[0px_14.13px_29.01px_0px_rgba(0,0,0,0.18)] text-main font-poppins text-[15px] font-medium leading-[30px] transition-all cursor-pointer bg-gradient-to-r from-[#FF802C] via-[#FF802C] to-[#994D1A] bg-blend-normal hover:bg-secondary hover:bg-blend-multiply active:scale-95"
              onClick={() => (window.location.href = activeData.buttonLink)}
            >
              {activeData.buttonLabel}
            </Button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 sm:mt-10 md:mt-0 z-10">
            <Image
              src={image}
              alt="Radar Image"
              width={550}
              height={400}
              className="rounded-2xl w-full h-auto max-w-full md:max-w-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyTabs;