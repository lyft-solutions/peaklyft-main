import Hero from "../components/Hero/Hero";
import AcademiesSection from "../components/AcademiesSection";
import UniqueSection from "../components/UniqueSection";
import Methodology from "../components/Methodology";
import ComparisonTable from "../components/ComparisonTable";
import { brandSections, heroSections } from "@/utils/Hero";
import Trust from "../components/trust";
import WhatsNew from "../components/common/WhatsNew";
import { academiesData } from "@/utils/AcademiesData";
import { uniqueSectionContent } from "@/utils/uniqueSection";
import { uniqueTabs } from "@/utils/uniqueTabs";
import { comparisonData } from "@/utils/comparisonData";
import { whatsNewDefaultContent, whatsNewDefaultData } from "@/utils/utils";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <div className="md:px-0 px-2.5" style={{background: "radial-gradient(at top right, #4E5FF545 20%, #DBDFFF00 50%)"}}>
      <Hero 
      heroData={heroSections.default}
      brandData={brandSections.default}
    />

      <AcademiesSection data={academiesData} defaultCategory="growth" />
      <UniqueSection 
        tabs={uniqueTabs}
        sectionContent={uniqueSectionContent}
      />
      <Methodology />
      <ComparisonTable data={comparisonData} />
      <Trust />
       <Testimonials />
      {/* <WhatsNew content={whatsNewDefaultContent} data={whatsNewDefaultData} showHeader={true} /> */}
    </div>
  );
}
