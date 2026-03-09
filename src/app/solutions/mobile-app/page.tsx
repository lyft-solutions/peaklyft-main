import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab } from "@/utils/academyTabsData";

import { brandSections, mobileSections } from "@/utils/Hero";
import { whatsNewDefaultData2 } from "@/utils/utils";
import { whyChoosePeaklyftMobile } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={mobileSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftMobile.title}
          title2={whyChoosePeaklyftMobile.title2}
          description={whyChoosePeaklyftMobile.description}
        />
        <AcademyTabs
          title="Explore Mobile App Development Offerings"
          tabs={salesAcademyTab}
          image="/explore2.jpeg"
        />
        <WhatsNewCards data={whatsNewDefaultData2} />
      </div>
    </>
  );
}
