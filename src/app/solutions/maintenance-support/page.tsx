import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab9 } from "@/utils/academyTabsData";

import { brandSections, maintenanceSupportSections } from "@/utils/Hero";
import { whatsNewDefaultData2 } from "@/utils/utils";
import { whyChoosePeaklyftMaintenanceSupport } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero
          heroData={maintenanceSupportSections}
          brandData={brandSections.default}
        />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftMaintenanceSupport.title}
          title2={whyChoosePeaklyftMaintenanceSupport.title2}
          description={whyChoosePeaklyftMaintenanceSupport.description}
        />
        <AcademyTabs
          title="Explore Maintenance & Support Services!"
          tabs={salesAcademyTab9}
          image="/explore2.jpeg"
        />
        <WhatsNewCards data={whatsNewDefaultData2} />
      </div>
    </>
  );
}
