import AcademiesSection from "@/src/components/AcademiesSection";
import { academiesData } from "@/utils/AcademiesData";

export default function GrowthPage() {
  return (
    <AcademiesSection
      data={[academiesData.find(cat => cat.id === "growth")!]}
      defaultCategory="growth"
    />
  );
}
