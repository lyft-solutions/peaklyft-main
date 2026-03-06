import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab8 } from "@/utils/academyTabsData";

import { brandSections, productEngineeringSections } from "@/utils/Hero";
import { whatsNewDefaultData2 } from "@/utils/utils";
import { whyChoosePeaklyft } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">  
        <Hero
          heroData={productEngineeringSections}
          brandData={brandSections.default}
        />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyft.title}
          description={whyChoosePeaklyft.description}
        />
        <AcademyTabs
          title="Build, Scale, and Innovate with Product Engineering"
          tabs={salesAcademyTab8}
          image="/explore2.jpeg"
        />
        <WhatsNewCards data={whatsNewDefaultData2}  />
        
    
      </div>
    </>
  );
}
