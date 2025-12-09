"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { Member } from "@/utils/team";

interface MemberCarouselProps {
  members: Member[];
}

export default function MemberCarousel({ members }: MemberCarouselProps) {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Default to 3 for desktop

  // 🔥 Auto detect mobile / desktop
  useEffect(() => {
    const update = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
      setIndex(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, members.length - cardsPerView);

  return (
    <div className="w-full overflow-hidden">

      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${index * (100 / cardsPerView)}%)`,
        }}
      >
        {members.map((p, i) => (
          <div key={i} className="w-1/3 px-5 shrink-0" style={{ minWidth: "33.33%" }}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-secondary/90 h-[230px] flex justify-center items-center">
                <img src={p.img} className="h-[200px] object-contain" />
              </div>

              {/* Content */}
              <div className="p-6 text-center flex-1">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-gray-700">{p.role}</p>
                <p className="text-gray-500 mt-1">{p.exp}</p>

                <div className="flex justify-center mt-4">
                  <Linkedin className="w-7 h-7 text-blue-700 hover:scale-110 transition" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i: any) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              index === i ? "bg-orange-500 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
