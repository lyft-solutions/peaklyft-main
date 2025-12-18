"use client";
import React from "react";
import Image from "next/image";

interface Brand {
  image: string;
  alt: string;
}

interface BrandSectionProps {
  title: string;
  logos: Brand[];
}

const BrandSection: React.FC<BrandSectionProps> = ({ title, logos }) => {
  return (
    <section className="w-full py-16 flex justify-center bg-gray-100">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-md px-8 py-12">

        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold mb-12">
          {title}
        </h2>

        {/* LOGOS - HORIZONTAL */}
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
          {logos.map((brand, index) => (
            <div
              key={index}
              className="h-[70px] w-[150px] flex items-center justify-center"
            >
              <Image
                src={brand.image}
                alt={brand.alt}
                width={150}
                height={70}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandSection;
  