"use client";

import Image from "next/image";

export default function BlogHero() {
  return (
    <section
      className="
        w-full
        px-4 sm:px-10
        py-16 sm:py-24
        flex flex-col sm:flex-row
        items-center
        justify-between
      "
    >
      {/* LEFT CONTENT */}
      <div className="max-w-xl sm:text-left text-center">
        <p className="text-[20px] sm:text-[24px] text-primary font-merriweather font-bold italic">
          Blog
        </p>

        <h1 className="mt-3 text-[32px] sm:text-[48px] font-bold leading-tight text-[#1C1C1C]">
          Explore, Learn, and stay <br className="hidden sm:block" />
          informed with our blog section
        </h1>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-10 sm:mt-0">
        <Image
          src="/images/blog/typewriter.png"
          alt="Blog Hero"
          width={480}
          height={360}
          className="w-[300px] sm:w-[480px] object-contain"
          priority
        />
      </div>
    </section>
  );
}
