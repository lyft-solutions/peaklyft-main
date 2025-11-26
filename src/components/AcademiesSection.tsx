"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface AcademyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TitleStructure {
  normalStart: string;
  highlight: string;
  normalEnd: string;
}

interface Category {
  id: string;
  name: string;
  title?: TitleStructure;
  subtitle?: string;
  academies: AcademyItem[];
}

interface Props {
  data: Category[];
  defaultCategory?: string;
}

const AcademiesSection: React.FC<Props> = ({ data, defaultCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    defaultCategory || data[0].id
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  // 🟦 RESPONSIVE CARDS PER VIEW
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 480) setCardsPerView(1);
      else if (window.innerWidth < 768) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // 🟩 Detect actual card width (for perfect sliding)
  useEffect(() => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector(".card-item") as HTMLElement;
      if (firstCard) {
        const style = window.getComputedStyle(firstCard);
        const gap = 24; // gap-6 = 24px
        const width = firstCard.offsetWidth + gap;
        setCardWidth(width);
      }
    }
  }, [activeCategory, cardsPerView]);

  const currentCategory = data.find((cat) => cat.id === activeCategory);
  const totalCards = currentCategory?.academies.length || 0;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalCards - cardsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= totalCards - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-[60px] px-4">
      <div className="container mx-auto">

        {/* TITLE */}
        <h1 className="font text-center mb-[13px]">
          {currentCategory?.title?.normalStart}{" "}
          <span className="text-primary">{currentCategory?.title?.highlight}</span>{" "}
          {currentCategory?.title?.normalEnd}
        </h1>

        <p className="text-center text-base text-[#4A4848] mb-[43px]">
          {currentCategory?.subtitle}
        </p>

        {/* TABS */}
        <div className="flex flex-col sm:flex-row rounded-t-[10px] justify-between w-full gap-8">
          {data.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentIndex(0);
              }}
              className={`px-6 py-4 w-full lg:h-[62px] border rounded-t-[10px] text-[18px] font-medium transition-all duration-300 
                ${
                  activeCategory === category.id
                    ? "bg-secondary text-white"
                    : "bg-white text-secondary hover:bg-secondary hover:text-main"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* SLIDER WRAPPER */}
        <div
          className="relative md:p-12 bg-cover bg-center"
          style={{
            backgroundImage: "url('/carouselbg.png')",
            minHeight: "425px",
          }}
        >
          {/* PREV */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 md:p-3 cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>

          {/* NEXT */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 md:p-3 cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>

          {/* SLIDER */}
          <div className="relative mx-4 md:mx-16">
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * cardWidth}px)`,
                }}
              >
                {currentCategory?.academies.map((academy) => (
                  <div
                    key={academy.id}
                    className="card-item shrink-0 px-2 
                      w-full sm:w-[280px] md:w-[320px] lg:w-[339.33px]
                      h-[298px]"
                  >
                    <div className="bg-white rounded-[8px] p-6 shadow-xl w-full h-full">
                      <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center mb-6">
                        <Image
                          src="/search.svg"
                          alt={academy.title}
                          width={65}
                          height={65}
                          priority
                        />
                      </div>

                      <h3 className="text-xl md:text-[18px] font-semibold leading-[28px] text-gray-900 mb-4">
                        {academy.title}
                      </h3>

                      <p className="text-base font-normal leading-[26px]">
                        {academy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AcademiesSection;
