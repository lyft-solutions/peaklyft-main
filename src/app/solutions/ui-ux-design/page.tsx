import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab4 } from "@/utils/academyTabsData";

import { brandSections, uiSections } from "@/utils/Hero";
import { whatsNewDefaultData } from "@/utils/utils";
import { whyChoosePeaklyft, whyChoosePeaklyftUIUX } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={uiSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftUIUX.title}
          title2={whyChoosePeaklyftUIUX.title2}
          description={whyChoosePeaklyftUIUX.description}
        />
        <AcademyTabs
          title="Explore UI/UX Design Offerings"
          tabs={salesAcademyTab4}
          image="/spider-charts/UX.jpg"
        />
        {/* <WhatsNewCards data={whatsNewDefaultData} /> */}
      </div>
    </>
  );
}
