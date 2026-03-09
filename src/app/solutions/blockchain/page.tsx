import AcademyTabs from "@/src/components/common/AcademyTabsSection";
import WhatsNewCards from "@/src/components/common/WhatsNew";
import Hero from "@/src/components/Hero/Hero";
import WhyChoosePeaklyft from "@/src/components/whychoosePeaklyft/WhyChoosePeaklyft";
import { blockchainTab } from "@/utils/academyTabsData";

import { blockchainSections, brandSections } from "@/utils/Hero";
import { whatsNewDefaultData2 } from "@/utils/utils";
import { whyChoosePeaklyftBlockchain } from "@/utils/whychoosePeaklyft";

export default function SalesAcademyPage() {
  return (
    <>
      <div className="px-2.5">
        <Hero heroData={blockchainSections} brandData={brandSections.default} />
        <WhyChoosePeaklyft
          title={whyChoosePeaklyftBlockchain.title}
          title2={whyChoosePeaklyftBlockchain.title2}
          description={whyChoosePeaklyftBlockchain.description}
        />
        <AcademyTabs
          title="Explore Blockchain Engineering Offerings!!"
          tabs={blockchainTab}
          image="/explore2.jpeg"
        />
        <WhatsNewCards data={whatsNewDefaultData2} />
      </div>
    </>
  );
}
