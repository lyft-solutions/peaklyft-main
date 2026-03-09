import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTabs } from "@/utils/academyTabsData";
import { brandSections, heroSections, webSections } from "@/utils/Hero";
import { whatsNewDefaultData2 } from "@/utils/utils";
import { whyChoosePeaklyft } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={webSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyft.title}
          title2={whyChoosePeaklyft.title2}
          description={whyChoosePeaklyft.description}
        />
        <AcademyTabs
          title="Explore Web Developement Offerings"
          tabs={salesAcademyTabs}
          image="/explore2.jpeg"
        />

        <WhatsNewCards data={whatsNewDefaultData2} />
      </div>
    </>
  );
}
