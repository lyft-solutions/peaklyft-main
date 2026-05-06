import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab5 } from "@/utils/academyTabsData";

import { brandSections, cloudSections } from "@/utils/Hero";
import { whatsNewDefaultData } from "@/utils/utils";
import { whyChoosePeaklyftCloudEngineering } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={cloudSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftCloudEngineering.title}
          title2={whyChoosePeaklyftCloudEngineering.title2}
          description={whyChoosePeaklyftCloudEngineering.description}
        />
        <AcademyTabs
          title="Explore Cloud Engineering Offerings!!"
          tabs={salesAcademyTab5}
          image="/spider-charts/Cloud-Engineering.jpg"
        />
        {/* <WhatsNewCards data={whatsNewDefaultData} /> */}
      </div>
    </>
  );
}
