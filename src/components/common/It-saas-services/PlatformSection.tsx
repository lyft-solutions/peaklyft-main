"use client";

import React from "react";
import Image from "next/image";
import { platformData } from "@/utils/platformData";

const PlatformSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-14" style={{background:"rgb(248, 250, 255)"}}>
      {/* TOP TITLE */}
      <h2 className="text-center text-[38px] font-merriweather font-semibold max-w-4xl leading-[50px]">
        {platformData.title}
      </h2>

      {/* IMAGE */}
      <div className="mt-10 w-full flex justify-center">
        <Image
          src={platformData.image}
          alt="Platform Structure"
          width={1250}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* BOTTOM TITLE (with <br/>) */}
      <h3
        className="text-center text-[28px] font-merriweather font-semibold mt-8"
        dangerouslySetInnerHTML={{ __html: platformData.title1 }}
      />
    </section>
  );
};

export default PlatformSection;
