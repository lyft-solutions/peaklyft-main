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
  const maxIndex = Math.max(0, members.length - 3);

  const nextSlide = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));
  const prevSlide = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));

  return (
    <div className="w-full">
      <section
  className="relative h-[75vh] w-full bg-cover bg-left bg-no-repeat flex items-center"
  style={{ backgroundImage: "url('/backgroundimage.png')" }}
>
  <div className="absolute inset-0 bg-blue-600/60"></div>

  <div className="relative z-10 max-w-4xl text-white pl-10 md:pl-20">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      {hero.title}
    </h1>

    <p className="text-2xl mt-6 font-semibold">
      {hero.subtitle}
    </p>

    <p className="mt-6 text-lg opacity-90 leading-relaxed max-w-2xl">
      {hero.description}
    </p>

    <button className="mt-8 bg-orange-500 px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg hover:bg-orange-600 transition">
      {hero.buttonText}
    </button>
  </div>
</section>


      <section className="py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-20">
      
        <div className="md:w-1/2">
          <img
            src={about.image}
            alt="About AntWalk"
            className="w-full rounded-[20px] shadow-xl border border-gray-200"
          />
        </div>

        
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {about.title}
          </h2>

          <p className=" text-lg text-black-600 text-bol   leading-[1.8] mb-6">
            {about.description1}
          </p>

          <p className="text-lg text-black-600 leading-[1.8]">
            {about.description2}
          </p>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-20">
        <div className="absolute inset-0">
          <div className="h-1/2 bg-white"></div>
          <div className="h-1/2 bg-secondary/90"></div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((c, i) => (
            <div
              key={i}
              className=" p-12 shadow-xl bg-white"
              style={{ backgroundColor: c.bg }}
            >
              <h3 className="text-2xl font-bold mb-5">{c.title}</h3>
              <p className="text-lg leading-relaxed text-gray-700">{c.text}</p>
            </div>
          ))}
        </div>
      </section>


      <h1 className="text-center text-4xl font-bold my-20">AntWalkers</h1>

      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 pb-20">
        <div className="w-full md:w-1/4 flex md:flex-col gap-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIndex(0);
              }}
              className={`px-6 py-5 rounded-2xl text-left font-medium text-lg transition-all shadow-sm
                ${
                  activeTab === tab
                    ? " bg-secondary/90 text-white shadow-lg"
                    : "bg-white hover:bg-gray-100 border text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

  
        <div className="w-full md:w-3/4 relative overflow-hidden">
        
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(index * 100) / 3}%)`,
            }}
          >
            {members.map((p, i) => (
              <div
                key={i}
                className="w-1/3 px-5 shrink-0"
                style={{ minWidth: "33.3333%" }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                
                  <div className="bg-secondary/90 h-[230px] flex justify-center items-center">
                    <img src={p.img} className="h-[200px] object-contain" />
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

        
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-200 transition"
          >
            
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full hover:bg-gray-200 transition"
          >
            
          </button>

      
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all 
                  ${index === i ? "bg-orange-500 scale-125" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    
      <section className="py-20 text-center px-6 md:px-20 bg-white">
        <h2 className="text-8xl md:text-5xl font-bold mb-7">
          {endSectionData.title}
        </h2>

        <h3 className="text-6xl md:text-4xl font-extrabold mb-7">
          {endSectionData.subtitle}
        </h3>

        <p className="text-black-600 text-lg mb-8 ">
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
