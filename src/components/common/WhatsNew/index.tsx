"use client";

import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  image: string;
  tag: string;
  title: string;
  desc: string;
  link: string;
}

interface Props {
  data: NewsItem[];
}

const WhatsNewCards = ({ data }: Props) => {
  return (
    <section className="container mx-auto py-16 px-4 max-w-6xl">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Engineering Insights at{" "}
          <span className="text-primary">Peaklyft</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Case studies, AI experiments, and real-world product engineering
          stories from our team.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <span className="text-xs text-primary font-semibold uppercase">
                {item.tag}
              </span>

              <h4 className="mt-2 font-semibold text-lg leading-snug">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>

              <Link
                href={item.link}
                className="inline-block mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
};

export default WhatsNewCards;