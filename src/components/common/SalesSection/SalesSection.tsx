"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../../ui/button";
interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SectionProps {
  title: string;
  subtitle: string;
  taglines: string[];
  desc: string;
  points?: string[];
  buttonText: string;
  cards: Card[];
  variant?: "left" | "right";
}

export default function OnboardingSection({
  title,
  subtitle,
  taglines,
  desc,
  points,
  cards,
  buttonText,
  variant = "left",
}: SectionProps) {
  const [index, setIndex] = useState(0);

  const visibleCount = 2;
  const total = cards.length;
  const maxIndex = total - visibleCount;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const goToSlide = (i: number) => setIndex(i);
  const isRight = variant === "right";

  return (
    <div className="bg-[#f8faff]">
      <section
        className={`
        w-full flex flex-col md:flex-row gap-10 py-10 container
        ${isRight ? "md:flex-row-reverse" : ""}
      `}
        // style={{background: "rgb(248, 250, 255)"}}
      >
        {/* LEFT SIDE - Cards */}
        <div className="relative lg:w-[610px] md:w-1/2 w-full overflow-hidden">
          <motion.div
            animate={{ x: -index * 50 + "%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex"
          >
            {cards.map((card) => (
              <div key={card.id} className="w-full md:w-1/2 shrink-0 p-4">
                <div className="w-[285px] h-[300px] bg-white rounded-[20px] shadow-md border-2 border-secondary p-5 mx-auto">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={400}
                    className="rounded-[15px]"
                  />
                  <h3 className="font-base font-semibold mt-4">{card.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>

          {/* BUTTON + SLIDER DOTS */}
          <div className="flex justify-between items-center">
            <div className="mt-6">
              <Button
                variant="default"
                className="px-6 py-5 bg-secondary rounded-[2px] cursor-pointer"
              >
                {buttonText}
              </Button>
            </div>
            <div className="flex gap-2 mt-4 justify-end">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-[15px] w-[15px] rounded-full transition ${
                    index === i ? "bg-secondary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-secondary font-medium text-lg">{subtitle}</p>

          <h2 className="text-[28px] font-merriweather leading-[42px] font-bold mt-2">
            {title}
          </h2>

          <div className="flex gap-3 mt-6 flex-wrap">
            {taglines.map((item) => (
              <div
                key={item}
                className="border-[1.5px] border-secondary text-[12px] px-4 py-2 rounded-lg font-medium bg-white shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          {desc && <p className="mt-6 text-xl leading-relaxed">{desc}</p>}

          {points && (
            <div className="mt-6 space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-4 h-4 bg-secondary rotate-45 block mt-1"></span>
                  <p className="text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
