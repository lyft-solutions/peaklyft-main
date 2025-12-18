import Image from "next/image";
import { Button } from "../../ui/button";
import BrandSlider from "../../common/Slider";

interface ComplexHero {
  type: "complex";
  topTagline: string;
  title: {
    line1Start: string;
    highlight1: string;
    line1End: string;
    line2Start: string;
    highlight2: string;
    line2End: string;
  };
  description: string;
  button: { label: string };
  heroImage: string;
}

interface SimpleHero {
  type: "simple";
  badge: string;
  simpleTitle: string;
  description: string;
  buttonText: string;
  image: string;
}

type HeroData = ComplexHero | SimpleHero;

interface HeroProps {
  heroData: HeroData;
  brandData: {
    title: string;
    brands: { name: string; logo: string }[];
  };
}

const Hero: React.FC<HeroProps> = ({ heroData, brandData }) => {
  return (
    <section
      className="w-full px-2.5"
      style={{
        background:
          heroData.type === "simple"
            ? "none"
            : "radial-gradient(at top right, #4E5FF545 0%, #DBDFFF00 10%)",
      }}
    >
      <div className={`container flex ${heroData.type === "simple" ? "flex-col sm:flex-row" : "flex-col-reverse sm:flex-row"} justify-between items-center pt-5`}>
        <div className="w-full flex flex-col sm:text-left text-left sm:gap-2.5 mt-[70px] mb-[30px]">
          {heroData.type === "simple" && (
            <p className="text-primary font-merriweather sm:text-[24px] text-[20px] font-bold italic sm:leading-[30px]">
              {heroData.badge}
            </p>
          )}

          {heroData.type === "complex" && (
            <p className="text-[#4A4848] font-poppins sm:text-[14px] text-[12px] font-medium italic underline sm:leading-5">
              {heroData.topTagline}
            </p>
          )}

          {heroData.type === "complex" ? (
            <h1 className="text-[#1C1C1C] font-poppins sm:text-[40px] text-[26px] font-semibold sm:leading-[60px]">
              {heroData.title.line1Start}{" "}
              <span className="text-secondary">
                {heroData.title.highlight1}
              </span>{" "}
              {heroData.title.line1End}
              <br />
              {heroData.title.line2Start}{" "}
              <span className="text-secondary">
                {heroData.title.highlight2}
              </span>{" "}
              {heroData.title.line2End}
            </h1>
          ) : (
            <h1 className="text-[#1C1C1C] font-poppins text-[45px] font-semibold sm:leading-[60px]">
              {heroData.simpleTitle}
            </h1>
          )}
          {heroData.type === "simple" && (
            <p
              className="text-[#4A4848] font-poppins text-[20px] font-medium leading-[27px]"
              dangerouslySetInnerHTML={{ __html: heroData.description }}
            />
          )}
          {heroData.type === "complex" && (
            <p
              className="text-[#4A4848] font-poppins sm:text-[18px] text-[14px] font-medium leading-[30px]"
              dangerouslySetInnerHTML={{ __html: heroData.description }}
            />
          )}

          <div className="mt-5">
            <Button
              variant="destructive"
              className="rounded-[4px] mb-[30px] py-[22.5px] shadow-[0px_14.13px_29.01px_0px_rgba(0,0,0,0.18)] text-main font-poppins text-[15px] font-medium leading-[30px] w-[208px] transition-all cursor-pointer bg-gradient-to-r from-[#FF802C] via-[#FF802C] to-[#994D1A] bg-blend-normal hover:bg-secondary hover:bg-blend-multiply"
            >
              {heroData.type === "complex"
                ? heroData.button.label
                : heroData.buttonText}
            </Button>
          </div>
        </div>

        <div className="flex justify-center w-full md:pl-1.5 pt-[10.5px]">
          <Image
            src={
              heroData.type === "complex" ? heroData.heroImage : heroData.image
            }
            alt="hero"
            width={heroData.type === "simple" ? 552 : 635}
            height={heroData.type === "simple" ? 399 : 562}
            className={
              heroData.type === "simple"
                ? "w-[335px] h-[242px] sm:w-[552px] sm:h-[399px]"
                : "sm:w-[635px] sm:h-[562px] w-[335px] h-[296px]"
            }
          />
        </div>
      </div>

      <BrandSlider title={brandData.title} brands={brandData.brands} />
    </section>
  );
};

export default Hero;