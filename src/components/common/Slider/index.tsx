"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandSliderProps {
  title: string;
  brands: Brand[];
}

const LOGO_WIDTH_DESKTOP = 160;
const LOGO_WIDTH_MOBILE = 120;
const GAP = 48;
const SPEED = 0.5; // speed control (px per frame)

const BrandSlider: React.FC<BrandSliderProps> = ({ title, brands }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(1024);
  const xRef = useRef(0);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const logoWidth =
    windowWidth < 768 ? LOGO_WIDTH_MOBILE : LOGO_WIDTH_DESKTOP;

  const totalWidth =
    brands.length * (logoWidth + GAP);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      xRef.current += SPEED;

      if (xRef.current >= totalWidth) {
        xRef.current = 0;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${xRef.current}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [totalWidth]);

  const renderBrand = (brand: Brand, key: number | string) => (
    <div
      key={key}
      className="flex items-center justify-center h-[60px]"
      style={{ width: logoWidth }}
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={95}
        height={40}
        className="object-contain"
      />
    </div>
  );

  return (
    <section className="w-full mt-13 flex justify-center mx-auto ">
      <div className="w-full bg-white rounded-t-xl shadow-md px-12 py-10 overflow-hidden">
        <h2 className="text-center text-[24px] md:text-[28px] font-bold mb-8">
          {title}
        </h2>

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-12 w-max will-change-transform"
          >
            {brands.map((b, i) => renderBrand(b, i))}
            {brands.map((b, i) => renderBrand(b, `dup-${i}`))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
