import AcademiesSection from "@/src/components/AcademiesSection";
import { academiesData } from "@/utils/AcademiesData";

export default function PeoplePage() {
  return (
    <AcademiesSection
      data={[academiesData.find(cat => cat.id === "people")!]}
      defaultCategory="people"
    />
  );
}
