"use client";

import Image from "next/image";
import { ProjectImage } from "@/src/types/portfolio";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const VISIBLE = 3;
  const total = images.length;

  // We build an extended array: [...images, ...images, ...images]
  // and start at offset = total, so we can slide left AND right infinitely
  const extended = [...images, ...images, ...images];
  const offset = total; // middle copy starts here

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      setCurrent(index);
      setTimeout(() => {
        isAnimating.current = false;
      }, 400);
    },
    []
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // After sliding far left/right, silently reset to middle copy (no animation)
  useEffect(() => {
    if (current <= -total || current >= total) {
      const timer = setTimeout(() => {
        const normalized = ((current % total) + total) % total;
        setCurrent(normalized);
      }, 420); // just after transition ends
      return () => clearTimeout(timer);
    }
  }, [current, total]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.touches[0].clientX; };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  if (!images || images.length === 0) return null;

  const showDots = total > 1;
  const normalizedCurrent = ((current % total) + total) % total;

  // translateX: each card = 100/VISIBLE %, gap = 16px shared
  // We shift by (offset + current) cards
  const GAP = 16; // px, matches gap-4
  const cardWidthPercent = 100 / VISIBLE;
  const translateX = `calc(-${(offset + current) * cardWidthPercent}% - ${(offset + current) * GAP / VISIBLE}px)`;

  return (
    <section className="py-14 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Project Gallery</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Carousel */}
        <div
          className="flex items-center gap-3 mx-auto"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 z-10 flex items-center justify-center w-10 h-10 rounded-full border bg-white border-[#E2E8F0] shadow text-[#0F172A] hover:border-secondary hover:text-secondary hover:shadow-md transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Sliding strip */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-4"
              style={{
                transform: `translateX(${translateX})`,
                transition: isAnimating.current || current !== normalizedCurrent
                  ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "none",
                willChange: "transform",
              }}
            >
              {extended.map((image, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-xl overflow-hidden bg-white border border-[#E2E8F0] shadow-sm"
                  style={{ width: `calc(${cardWidthPercent}% - ${GAP * (VISIBLE - 1) / VISIBLE}px)` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 z-10 flex items-center justify-center w-10 h-10 rounded-full border bg-white border-[#E2E8F0] shadow text-[#0F172A] hover:border-secondary hover:text-secondary hover:shadow-md transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        {showDots && (
          <div className="flex justify-center gap-1.5 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-200 ${i === normalizedCurrent
                  ? "w-5 h-2 bg-secondary"
                  : "w-2 h-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}