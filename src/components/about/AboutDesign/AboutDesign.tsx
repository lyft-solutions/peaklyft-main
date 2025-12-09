// "use client";
// import { useState } from "react";
// import MemberCarousel from "../MemberCarousel"; 
// import HeroSection from "../HeroSection"; 
// import AboutSection from "../AboutSection"; 
// import CardsSection from "../CardsSection"; 
// import EndSection from "../EndSection"; 

import { useState } from "react";


export default function AboutDesign({ hero, about, cards, teams, leadership, investors, endSectionData }: { hero: any, about: any, cards: any, teams: any, leadership: any, investors: any, endSectionData: any }) {
const tabs = ["Our Team", "Our Leadership", "Our Investors"];
const [activeTab, setActiveTab] = useState("Our Team");


// const getMembers = () => {
// if (activeTab === "Our Team") return teams;
// if (activeTab === "Our Leadership") return leadership;
// return investors;
// };


// return (
// <div className="w-full">
// <HeroSection hero={hero} />
// <AboutSection about={about} />
// <CardsSection cards={cards} />


// <h1 className="text-center text-4xl font-bold my-20"> Peaklyft</h1>


// <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 pb-20">
// {/* Tabs */}
// <div className="w-full md:w-1/4 flex md:flex-col gap-5">
// {tabs.map((tab) => (
// <button
// key={tab}
// onClick={() => setActiveTab(tab)}
// className={`px-6 py-5 rounded-2xl text-left font-medium text-lg transition-all shadow-sm ${
// activeTab === tab
// ? "bg-secondary/90 text-white shadow-lg"
// : "bg-white hover:bg-gray-100 border text-black"
// }`}
// >
// {tab}
// </button>
// ))}
// </div>


// {/* Carousel Component */}
// <MemberCarousel members={getMembers()} />
// </div>


// <EndSection endSectionData={endSectionData} />
// </div>
// );
// }
}