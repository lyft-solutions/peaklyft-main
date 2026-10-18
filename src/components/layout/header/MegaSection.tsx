import Link from "next/link";
import Image from "next/image";
import type { MenuSectionItem } from "./MenuItem";

const MegaSection = ({ item }: { item: MenuSectionItem }) => {
  return (
    <Link href={item.href} className="flex items-start gap-4 group">
      <Image
        src={`/icons/${item.icon}.png`}
        alt={item.title}
        width={36}
        height={36}
        className="opacity-90 group-hover:opacity-100 transition mt-1"
      />

      <div>
        <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-tight">
          {item.title}
        </h3>

        <p className="text-[15px] text-[#555] leading-[22px] mt-1 w-[280px]">
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default MegaSection;
