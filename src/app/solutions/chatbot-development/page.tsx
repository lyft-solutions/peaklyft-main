import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import ExpertsGrid from "@/src/components/common/SalesSection/expert/expert";
import OnboardingSection from "@/src/components/common/SalesSection/SalesSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab3 } from "@/utils/academyTabsData";

import { brandSections, chatbotSections, heroSections } from "@/utils/Hero";
import { whatsNewDefaultData } from "@/utils/utils";
import { whyChoosePeaklyftChatbotDevelopment } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero
          heroData={chatbotSections}
          brandData={brandSections.default}
        />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftChatbotDevelopment.title}
          title2={whyChoosePeaklyftChatbotDevelopment.title2}
          description={whyChoosePeaklyftChatbotDevelopment.description}
        />
        <AcademyTabs
          title="Explore Customer Software Development Offerings!"
          tabs={salesAcademyTab3}
          image="/spider-charts/Chatbot-Developments.jpg"
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
        {/* <ExpertsGrid data={expertsData} /> */}

        {/* <WhatsNewCards data={whatsNewDefaultData} /> */}


      </div>
    </>
  );
}
