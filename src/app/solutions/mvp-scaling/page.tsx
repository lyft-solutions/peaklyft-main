import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab6 } from "@/utils/academyTabsData";

import { brandSections, mvpSections } from "@/utils/Hero";
import { whatsNewDefaultData } from "@/utils/utils";
import { whyChoosePeaklyftMvpScaling } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={mvpSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftMvpScaling.title}
          title2={whyChoosePeaklyftMvpScaling.title2}
          description={whyChoosePeaklyftMvpScaling.description}
        />
        <AcademyTabs
          title="Explore MVP → Product Scaling Offerings"
          tabs={salesAcademyTab6}
          image="/spider-charts/MVP-Scaling.jpg"
        />
        {/* <WhatsNewCards data={whatsNewDefaultData} /> */}
      </div>
    </>
  );
}
