import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogCard({
  image,
  category,
  title,
  date,
  excerpt,
}: BlogCardProps) {
  return (
    <div className="
      bg-white rounded-xl shadow-md overflow-hidden 
      w-full 
      hover:shadow-lg transition-all duration-200
    ">
      
      <div className="w-full h-[200px] sm:h-[230px] md:h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
       
        <span className="
          text-[13px] bg-gray-200 
          px-3 py-[4px] rounded-md 
          font-medium text-gray-700
        ">
          {category}
        </span>

        <h2 className="
          text-[18px] sm:text-[20px] md:text-[22px] 
          font-bold text-black mt-3 leading-snug
        ">
          {title}
        </h2>

   
        <p className="text-gray-600 text-[14px] mt-3">{date}</p>

  
        <p className="text-gray-600 text-[15px] mt-2 leading-relaxed line-clamp-3">
          {excerpt}
        </p>

     
        <button className="
          text-[#FF802C] font-semibold flex items-center 
          gap-1 mt-4 hover:gap-2 transition-all
        ">
          Read More <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
