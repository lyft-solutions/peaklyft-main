import ProjectGrid from "./ProjectGrid";
import SectionHeading from "../common/SectionHeading";

interface PortfolioSectionProps {
  className?: string;
}

export default function PortfolioSection({
  className = "",
}: PortfolioSectionProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our"
          highlight="Latest Work"
        // subtitle="Explore our recent projects and see how we help businesses achieve their goals through innovative technology solutions."
        />
        <ProjectGrid />
      </div>
    </section>
  );
}
