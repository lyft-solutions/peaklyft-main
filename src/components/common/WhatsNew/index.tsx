"use client";

import Image from "next/image";
import Link from "next/link";

interface WhatsNewContentType {
  title: {
    normalStart: string;
    highlight: string;
    normalEnd: string;
  };
  subtitle: string;
  description: string;
}

interface NewsItem {
  image: string;
  tag: string;
  title: string;
  desc: string;
  link: string;
}

interface Props {
  content?: WhatsNewContentType;
  data: NewsItem[];
  showHeader?: boolean;
}

const WhatsNewCards = ({ content, data, showHeader = true }: Props) => {
  return (
    <section className="w-full pb-12 sm:pb-16 md:pb-20">
      {showHeader && (
        <div
          className="w-full h-[180px] sm:h-[200px] md:h-[200px] lg:h-[220px] bg-cover bg-center relative"
          style={{ backgroundImage: "url('/banner2.png')" }}
        >
          <div className="w-full h-full bg-secondary opacity-70"></div>
        </div>
      )}

      <div
        className={`container mx-auto ${
          showHeader
            ? "mt-[-140px] sm:-mt-40 md:mt-[-180px] lg:mt-[-190px]"
            : ""
        } relative z-20`}
      >
        <div
          className={`flex ${
            showHeader ? "flex-col xl:flex-row lg:items-center" : ""
          } items-start gap-4 sm:gap-5 md:gap-6 lg:gap-0`}
        >
          {showHeader && content && (
            <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px]">
              <h2 className="text-white text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-extrabold leading-tight">
                {content.title.normalStart} <br />
                {content.title.highlight}
                {content.title.normalEnd}
              </h2>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                {content.subtitle}
              </h3>

              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-5 sm:leading-6">
                {content.description}
              </p>
            </div>
          )}

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 w-full ${
              showHeader ? "xl:w-auto" : ""
            }`}
          >
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] sm:rounded-[20px] md:rounded-[22px] shadow-md hover:shadow-xl transition p-3 sm:p-4 pb-5 sm:pb-6 w-full sm:w-[calc(50%-8px)] md:w-[300px] lg:w-[317px]"
              >
                <div className="bg-white border-0 border-solid rounded-[3px] h-full flex flex-col min-height-full overflow-hidden relative transition-all duration-250 w-full">
                  
                  <div className="relative w-full h-[160px] sm:h-[170px] md:h-[180px] lg:h-[189px] rounded-[3px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    <span className="absolute text-[11px] sm:text-[12px] font-medium top-2 sm:top-3 right-2 sm:right-3 bg-primary text-white px-2.5 sm:px-3 py-1.5 sm:py-[7px] rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div className="px-2 sm:px-2.5 flex flex-col items-end">
                    <h4 className="mt-3 sm:mt-4 text-sm sm:text-base font-medium leading-5 sm:leading-6">
                      {item.title}
                    </h4>

                    <p className="text-[#706B6B] text-[9px] sm:text-[10px] font-normal leading-3.5 sm:leading-4 mt-1">
                      {item.desc}
                    </p>

                    {!showHeader && (
                      <Link
                        href={item.link}
                        className="inline-block w-full rounded-[8px] mt-3 text-[11px] sm:text-[15px] text-center font-semibold text-primary border border-primary px-3 py-1.5 hover:bg-primary hover:text-white transition"
                      >
                        READ MORE »
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsNewCards;
