
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

const Hero: React.FC<HeroProps> = ({
  heroData,
  brandData,
  variant = "default",
}) => {
  // ✅ SAFE IMAGE RESOLUTION (LOCAL + URL + FALLBACK)
  const resolvedImage =
    heroData.type === "complex"
      ? heroData.heroImage || "/hero.png"
      : heroData.image || "/hero.png";

  return (
    <section
      className="w-full"
      style={{
        background:
          variant === "blog" || heroData.type === "simple"
            ? "none"
            : "radial-gradient(at top right, #4E5FF545 0%, #DBDFFF00 10%)",
      }}
    >
      {variant !== "blog" && (
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center pt-16 gap-12">
          {/* LEFT */}
          <div className="w-full sm:w-[52%] text-left">
            {heroData.type === "complex" && (
              <p className="text-[#3D3D3D] underline text-[15px] mb-3">
                Product Engineering for Modern Businesses
              </p>
            )}

            {heroData.type === "complex" ? (
              <>
                <h1 className="font-poppins text-black font-bold text-[32px] sm:text-[42px] leading-[42px] sm:leading-[52px] max-w-[590px]">
                  Build{" "}
                  <span className="text-secondary">
                    Scalable
                  </span>
                  <br />
                  <span className="text-secondary">
                   Digital Products with Peaklyft Solutions
                  </span>
                </h1>

                <p
                  className="text-[#4A4848] text-[16px] sm:text-[18px] mt-5 max-w-[620px]"
                  dangerouslySetInnerHTML={{
                    __html: heroData.description,
                  }}
                />
              </>
            ) : (
              <>
                <h1 className="text-black text-[32px] sm:text-[42px] font-bold max-w-[600px]">
                  {heroData.simpleTitle}
                </h1>

                <p
                  className="text-[#4A4848] text-[18px] mt-5 max-w-[620px]"
                  dangerouslySetInnerHTML={{
                    __html: heroData.description,
                  }}
                />
              </>
            )}

            <Button className="mt-7 w-[210px] py-[18px] bg-gradient-to-r from-[#FF802C] to-[#994D1A] text-white">
              {heroData.type === "complex"
                ? heroData.button.label
                : heroData.buttonText}
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full sm:w-[48%] flex justify-center sm:justify-end">
            <Image
              src={resolvedImage}
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

