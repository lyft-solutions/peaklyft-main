import Image from "next/image";
import { Button } from "../../ui/button";
import BrandSlider from "../../common/Slider";

interface ComplexHero {
  type: "complex";
  topTagline?: string;
  badge?: string;

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
  badge?: string;
  simpleTitle: string;
  description: string;
  buttonText?: string;
  image: string;
}

type HeroData = ComplexHero | SimpleHero;

interface HeroProps {
  heroData: HeroData;
  brandData?: {
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
            {/* Top tagline — only shown if provided */}
            {heroData.type === "complex" && heroData.topTagline && (
              <p className="text-[#3D3D3D] underline text-[15px] mb-3">
                {heroData.topTagline}
              </p>
            )}
            {/* Badge — only shown if provided */}
            {heroData.badge && (
              <span className="text-sm font-medium text-secondary mb-3 block">
                {heroData.badge}
              </span>
            )}

            {heroData.type === "complex" ? (
              <>
                <h1 className="font-poppins text-black font-bold text-[32px] sm:text-[42px] leading-[42px] sm:leading-[52px] max-w-[590px]">
                  {heroData.title.line1Start && `${heroData.title.line1Start} `}
                  {heroData.title.highlight1 && (
                    <span className="text-secondary">
                      {heroData.title.highlight1}
                    </span>
                  )}
                  {heroData.title.line1End && ` ${heroData.title.line1End}`}

                  {(heroData.title.line2Start || heroData.title.highlight2) && (
                    <>
                      <br />
                      {heroData.title.line2Start &&
                        `${heroData.title.line2Start} `}
                      {heroData.title.highlight2 && (
                        <span className="text-secondary">
                          {heroData.title.highlight2}
                        </span>
                      )}
                      {heroData.title.line2End && ` ${heroData.title.line2End}`}
                    </>
                  )}
                </h1>

                <p
                  className="text-[#4A4848] text-[16px] sm:text-[18px] mt-5 max-w-[620px]"
                  dangerouslySetInnerHTML={{ __html: heroData.description }}
                />
              </>
            ) : (
              <>
                {/* Badge — only shown if provided */}
                {heroData.badge && (
                  <span className="text-sm font-medium text-secondary mb-3 block">
                    {heroData.badge}
                  </span>
                )}

                <h1 className="text-black text-[32px] sm:text-[42px] font-bold max-w-[600px]">
                  {heroData.simpleTitle}
                </h1>

                {heroData.description && (
                  <p
                    className="text-[#4A4848] text-[18px] mt-5 max-w-[620px]"
                    dangerouslySetInnerHTML={{ __html: heroData.description }}
                  />
                )}
              </>
            )}

            {/* Button — only shown if label/text is provided */}
            {((heroData.type === "complex" && heroData.button?.label) ||
              (heroData.type === "simple" && heroData.buttonText)) && (
              <Button className="mt-7 w-[210px] py-[18px] bg-linear-to-r from-[#FF802C] to-[#994D1A] text-white">
                {heroData.type === "complex"
                  ? heroData.button.label
                  : heroData.buttonText}
              </Button>
            )}
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

      {brandData && (
        <BrandSlider title={brandData.title} brands={brandData.brands} />
      )}
    </section>
  );
};

export default Hero;
