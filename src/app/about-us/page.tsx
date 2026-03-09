
import HeroSection from "@/src/components/about/HeroSection" 
import AboutSection from "@/src/components/about/AboutSection" 
import CardsSection from "@/src/components/about/CardsSection" 
import TeamTabsSection from "@/src/components/about/AboutDesign/TeamTabsSection" 
import EndSection from "@/src/components/about/EndSection" 

import { heroData } from "@/utils/heros" 
import { aboutData } from "@/utils/about" 
import { cardsData } from "@/utils/cards" 
import { teamSection } from "@/utils/team" 
import { leadership } from "@/utils/leadership" 
import { investors } from "@/utils/investors" 
import { endSectionData } from "@/utils/Aboutend"

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection hero={heroData} />
      <AboutSection about={aboutData} />
      <CardsSection cards={cardsData} />
      <TeamTabsSection
        teams={teamSection}
        leadership={leadership}
        investors={investors}
      />
      <EndSection endSectionData={endSectionData} />
    </div>
  );
}
