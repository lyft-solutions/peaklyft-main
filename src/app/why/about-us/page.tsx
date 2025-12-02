import AboutDesign from "@/src/components/common/AboutDesign/AboutDesign";
import { aboutData, cardsData, heroData, investors, leadership, teamSection } from "@/utils/about";

export default function Page() {
  return (
    <AboutDesign
      hero={heroData}
      about={aboutData}
      cards={cardsData}
      teams={teamSection}
      leadership={leadership}
      investors={investors}
    />
  );
}
