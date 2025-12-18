"use client";


import Image from "next/image";
import { Button } from "../ui/button";
import BrandSlider from "../common/Slider";

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
  variant?: "default" | "blog";
}

const Hero: React.FC<HeroProps> = ({ heroData, brandData, variant = "default" }) => {
  return (
    <section
      className="w-full"
      style={{
        background:
          variant === "blog"
            ? "none"
            : heroData.type === "simple"
            ? "none"
            : "radial-gradient(at top right, #4E5FF545 0%, #DBDFFF00 10%)",
      }}
    >
      {/* BLOG HERO — FULLY RESPONSIVE */}
      {variant === "blog" && (
        <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-5 py-16">

          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2 text-left">
            <h1
              className="
                font-poppins font-bold
                text-[26px] sm:text-[32px] md:text-[38px]
                leading-[34px] sm:leading-[42px] md:leading-[48px]
                max-w-[520px]
              "
            >
              Explore, Learn, and stay informed <br className="hidden sm:block" />
              with our blog section
            </h1>
          </div>

          {/* RIGHT IMAGE */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end">

</div>

        </div>
      )}

      {/* ⭐ DEFAULT / COMPLEX HERO */}
      {variant !== "blog" && (
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center pt-16 gap-12">

          {/* LEFT SIDE */}
          <div className="w-full sm:w-[52%] text-left">

            {/* Tagline */}
            {heroData.type === "complex" && (
              <p className="text-[#3D3D3D] underline text-[15px] mb-3 leading-tight">
                {heroData.topTagline}
              </p>
            )}

            {/* Heading */}
            {heroData.type === "complex" ? (
              <>
                <h1
                  className="
                    font-poppins text-black font-bold
                    text-[32px] sm:text-[42px]
                    leading-[42px] sm:leading-[52px]
                    tracking-tight max-w-[590px]
                  "
                >
                  Build{" "}
                  <span className="text-secondary">Capability Academies</span>
                  <br />
                  to achieve{" "}
                  <span className="text-secondary">Strategic Objectives</span>
                </h1>

                <p
                  className="
                    text-[#4A4848] font-poppins
                    text-[16px] sm:text-[18px]
                    leading-[28px] sm:leading-[30px]
                    mt-5 max-w-[620px]
                  "
                  dangerouslySetInnerHTML={{ __html: heroData.description }}
                />
              </>
            ) : (
              <>
                <h1 className="text-black font-poppins text-[32px] sm:text-[42px] font-bold leading-[1.2] max-w-[600px]">
                  {heroData.simpleTitle}
                </h1>

                <p
                  className="text-[#4A4848] font-poppins text-[18px] leading-[30px] mt-5 max-w-[620px]"
                  dangerouslySetInnerHTML={{ __html: heroData.description }}
                />
              </>
            )}

            {/* Button */}
            <Button
              className="
                rounded-[6px] mt-7 w-[210px] py-[18px]
                text-white font-poppins text-[15px] font-medium
                bg-gradient-to-r from-[#FF802C] to-[#994D1A]
                shadow-[0px_12px_26px_rgba(0,0,0,0.18)]
              "
            >
              {heroData.type === "complex"
                ? heroData.button.label
                : heroData.buttonText}
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full sm:w-[48%] flex justify-center sm:justify-end">
            <Image
              src={heroData.type === "complex" ? heroData.heroImage : heroData.image}
              alt="hero"
              width={650}
              height={650}
              priority
              className="object-contain w-full max-w-[650px]"
            />
          </div>
        </div>
      )}

      <BrandSlider title={brandData.title} brands={brandData.brands} />
    </section>
  );
};

export default Hero;

