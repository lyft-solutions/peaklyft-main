import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab } from "@/utils/academyTabsData";

import { brandSections, qaSections } from "@/utils/Hero";
import { whatsNewDefaultData } from "@/utils/utils";
import { whyChoosePeaklyftQaTesting } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={qaSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftQaTesting.title}
          title2={whyChoosePeaklyftQaTesting.title2}
          description={whyChoosePeaklyftQaTesting.description}
        />
        <AcademyTabs
          title="Explore QA & Testing Solutions"
          tabs={salesAcademyTab}
          image="/spider-charts/QA-Testing.jpg"
        />

        <WhatsNewCards data={whatsNewDefaultData} />
      </div>
    </>
  );
}
