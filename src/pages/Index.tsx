import { brandSections, heroSections } from "@/utils/Hero";
import Header from "../components/layout/header/Header";
import Hero from "@/src/components/Hero/Hero";

const Index = () => {
  return (
    <div>
      <Header />
      <Hero heroData={heroSections.default} brandData={brandSections.default} />
    </div>
  );
};

export default Index;
