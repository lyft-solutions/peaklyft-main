"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";
import { endSectionData } from "@/utils/about";

interface HeroType {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

interface AboutType {
  title: string;
  image: string;
  description1: string;
  description2: string;
}

interface CardType {
  title: string;
  text: string;
  bg: string;
}

interface TeamType {
  name: string;
  role: string;
  exp: string;
  img: string;
}

interface Props {
  hero: HeroType;
  about: AboutType;
  cards: CardType[];
  teams: TeamType[];
  leadership: TeamType[];
  investors: TeamType[];
}

export default function AboutDesign({
  hero,
  about,
  cards,
  teams,
  leadership,
  investors,
}: Props) {
  const tabs = ["Our Team", "Our Leadership", "Our Investors"];
  const [activeTab, setActiveTab] = useState("Our Team");
  const [index, setIndex] = useState(0);

  const getMembers = () => {
    if (activeTab === "Our Team") return teams;
    if (activeTab === "Our Leadership") return leadership;
    return investors;
  };

  const members = getMembers();
  const maxIndex = Math.max(0, members.length - 1);

  const nextSlide = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prevSlide = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] md:h-[85vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-secondary/70"></div>

        <div className="relative z-10 max-w-3xl text-white px-6 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {hero.title}
          </h1>

          <p className="text-xl md:text-2xl mt-4 font-semibold">
            {hero.subtitle}
          </p>

          <p className="mt-3 text-base md:text-lg opacity-90 leading-relaxed">
            {hero.description}
          </p>

          <button className="mt-8 bg-primary px-8 py-3 rounded-md text-white font-semibold shadow-lg hover:bg-primary/90 transition">
            {hero.buttonText}
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={about.image}
            alt="About"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{about.title}</h2>

          <p className="text-lg leading-relaxed mb-4">{about.description1}</p>

          <p className="text-lg leading-relaxed">{about.description2}</p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="relative py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl shadow-lg text-white"
              style={{ backgroundColor: c.bg }}
            >
              <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
              <p className="text-lg leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <h1 className="text-center text-4xl font-bold my-16">Peaklyft</h1>

      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 pb-20">

        {/* LEFT TABS */}
        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-3 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIndex(0);
              }}
              className={`px-6 py-4 rounded-xl text-left text-lg font-medium transition-all
                ${activeTab === tab
                  ? "bg-secondary/90 text-white shadow-md"
                  : "bg-white border hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SLIDER */}
        <div className="w-full md:w-3/4 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {members.map((p, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 px-4 shrink-0"
                style={{ minWidth: "100%" }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-secondary/90 h-[230px] flex justify-center items-center">
                    <img
                      src={p.img}
                      className="h-[200px] object-contain"
                      alt=""
                    />
                  </div>

                  <div className="p-6 text-center">
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

          {/* SLIDER BUTTONS */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-200"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-200"
          >
            ▶
          </button>

          {/* DOTS */}
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all
                  ${index === i ? "bg-orange-500 scale-110" : "bg-black"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* END SECTION */}
      <section className="py-20 text-center px-6 md:px-20 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-5">
          {endSectionData.title}
        </h2>

        <h3 className="text-3xl md:text-4xl font-extrabold mb-5">
          {endSectionData.subtitle}
        </h3>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {endSectionData.description}
        </p>

        <a
          href={endSectionData.buttonLink}
          className="bg-orange-500 px-8 py-3 rounded-full text-white text-lg shadow-lg hover:bg-orange-600 transition"
        >
          {endSectionData.buttonText}
        </a>
      </section>
    </div>
  );
}
