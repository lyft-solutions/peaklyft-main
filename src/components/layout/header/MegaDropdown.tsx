import MegaSection from "./MegaSection";
import Image from "next/image";
import { MegaSectionType } from "@/utils/Header";

const MegaDropdown = ({
  sections,
  image,
}: {
  sections: MegaSectionType[];
  image?: string;
}) => {
  return (
    <div
      className="
        absolute left-1/2 top-full hidden group-hover:flex
        -translate-x-1/3
        bg-white shadow-lg rounded-xl border border-gray-200
        w-[1000px] p-10 z-50 gap-16 text-[14px]
        border-t-[6px] border-t-[#4E5FF5]
      "
    >
      {/* LEFT CONTENT */}
      {sections?.map((section, index) => (
        <div key={index} className="w-1/2">
          
          {section.title && (
            <h2 className="text-[17px] font-semibold text-[#4E5FF5] mb-10">
              {section.title}
            </h2>
          )}

          <div className="flex flex-col gap-8">
            {(section.items ?? []).map((item, i) => (
              <MegaSection key={i} item={item} />
            ))}
          </div>
        </div>
      ))}

      {/* RIGHT IMAGE */}
      {image && (
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={image}
            alt="promo"
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default MegaDropdown;
