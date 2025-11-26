"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandSliderProps {
  title: string;
  brands: Brand[];
}

const BrandSlider: React.FC<BrandSliderProps> = ({ title, brands }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [windowWidth, setWindowWidth] = useState(768);
  const timeoutRef = useRef<number | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (currentIndex === brands.length) {
      timeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, brands.length]);

  const renderBrand = (brand: Brand, key: number | string) => (
    <div
      key={key}
      className="shrink md:w-[220px] w-full h-[60px] border-l border-black flex items-center justify-center bg-card px-2.5"
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={201}
        height={58}
        className="w-[201px] h-[58.53px] object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement!.innerHTML = `<span class='text-card-foreground font-bold text-xl'>${brand.name}</span>`;
        }}
      />
    </div>
  );

  const offset = currentIndex * (windowWidth < 768 ? 164 : 244);

  return (
    <div
      className={`w-full max-w-[1188px] mx-auto bg-main shadow-[0px_13.35px_40.04px_0px_rgba(0,0,0,0.16)]
        pt-[30px] pb-[25px] px-5 md:px-10 overflow-hidden rounded-[14px] mt-[30px]
        ${isHome ? "h-auto" : "h-[249px]"}
      `}
    >
      <div className="max-w-[1188px] mx-auto">
        <h2 className="text-[20px] md:text-[28px] leading-[1.5em] font-bold text-center text-foreground mb-5">
          {title}
        </h2>

        <div className="relative">
          <div className="overflow-hidden bg-main">
            <div
              className={`flex gap-4 md:gap-6 ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${offset}px)`,
                width: "max-content",
              }}
            >
              {brands.map((b, i) => renderBrand(b, i))}
              {brands.map((b, i) => renderBrand(b, `dup-${i}`))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-16 md:w-32 h-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
