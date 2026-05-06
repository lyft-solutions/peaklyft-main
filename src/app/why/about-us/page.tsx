
import HeroSection from "@/src/components/about/HeroSection" 
import AboutSection from "@/src/components/about/AboutSection" 
import CardsSection from "@/src/components/about/CardsSection" 
import EndSection from "@/src/components/about/EndSection" 

import { heroData } from "@/utils/heros" 
import { aboutData } from "@/utils/about" 
import { cardsData } from "@/utils/cards" 
import { endSectionData } from "@/utils/Aboutend"

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection hero={heroData} />
      <AboutSection about={aboutData} />
      <CardsSection cards={cardsData} />
      {/* <EndSection endSectionData={endSectionData} /> */}
    </div>
  );
}
