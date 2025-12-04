import React from "react";
import Image from "next/image";

interface Props {
  tag: string;
  image: string;
  title: string;
  description: string;
  dateText: string;
  ctaText: string;
}

const EventCard: React.FC<Props> = ({ tag, image, title, description, dateText, ctaText }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden relative
                  w-[380px] max-w-full h-[580px] mx-auto sm:w-[350px]">

    <div className="absolute right-0 top-0 bg-[#D7EEFF] px-3 py-2 text-sm font-semibold
                    uppercase tracking-wide text-gray-700 shadow-md">
      {tag}
    </div>

    <div className="w-full h-[320px] relative">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-xl"
        priority
      />
    </div>

    <div className="p-4">
      <h3 className="font-bold text-xl">{title}</h3>

      <p className="text-gray-600 mt-1 leading-relaxed">
        {description}
      </p>

      <div className="flex justify-between items-center mt-5">
        <button className="text-blue-600 font-semibold hover:underline transition-all">
          {ctaText} →
        </button>
        <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          {dateText}
        </span>
      </div>
    </div>
  </div>
);

export default EventCard;
