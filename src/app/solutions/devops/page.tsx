import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { salesAcademyTab7 } from "@/utils/academyTabsData";

import { brandSections, devopsSections } from "@/utils/Hero";
import { whatsNewDefaultData } from "@/utils/utils";
import { whyChoosePeaklyft, whyChoosePeaklyftDevops } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={devopsSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftDevops.title}
          title2={whyChoosePeaklyftDevops.title2}
          description={whyChoosePeaklyftDevops.description}
        />
        <AcademyTabs
          title="Explore Customer Software Development Offerings!"
          tabs={salesAcademyTab7}
          image="/explore2.jpeg"
        />

        <WhatsNewCards data={whatsNewDefaultData} />
      </div>
    </>
  );
}
