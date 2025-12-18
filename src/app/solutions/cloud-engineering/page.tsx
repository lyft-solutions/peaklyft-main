import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import ExpertsGrid from "@/src/components/common/SalesSection/expert/expert";
import OnboardingSection from "@/src/components/common/SalesSection/SalesSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChooseAntWalk from "@/src/components/whychoosePeaklyft/WhyChooseAntWalk";
import { salesAcademyTab3, salesAcademyTab5, salesAcademyTabs } from "@/utils/academyTabsData";
import { expertsData } from "@/utils/expertsData";

import { brandSections, cloudSections, customerSections, heroSections } from "@/utils/Hero";
import { whatsNewDefaultData2 } from "@/utils/utils";
import { whyChooseAntWalkData } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">  
        <Hero
          heroData={cloudSections["sales-academy"]}
          brandData={brandSections.default}
        />
        <WhyChooseAntWalk
          title={whyChooseAntWalkData.title}
          description={whyChooseAntWalkData.description}
        />  
        <AcademyTabs
          title="Explore Cloud Engineering Offerings!!"
          tabs={salesAcademyTab5}
          image="/explore.png"
        />
         
        
        {/* <OnboardingSection
          title={onboardingSectionData.title}
          subtitle={onboardingSectionData.subtitle}
          taglines={onboardingSectionData.taglines}
          desc={onboardingSectionData.desc}
          cards={onboardingSectionData.cards}
          buttonText={onboardingSectionData.buttonText}
          variant="left"
        />
        <OnboardingSection
          title={onboardingSection.title}
          subtitle={onboardingSection.subtitle}
          taglines={onboardingSection.taglines}
          desc={onboardingSection.desc}
          cards={onboardingSection.cards}
          buttonText={onboardingSection.buttonText}
          variant="right"
        />
        <OnboardingSection
          title={onboardingSectionData.title}
          subtitle={onboardingSectionData.subtitle}
          taglines={onboardingSectionData.taglines}
          desc={onboardingSectionData.desc}
          cards={onboardingSectionData.cards}
          buttonText={onboardingSectionData.buttonText}
          variant="left"
        /> */}
        <ExpertsGrid data={expertsData} />
        <WhatsNewCards data={whatsNewDefaultData2} showHeader={false} />
        
    
      </div>
    </>
  );
}
