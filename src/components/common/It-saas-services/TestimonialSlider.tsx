"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Item {
  logo: string;
  content: string;
  name: string;
  company: string;
}

interface Props {
  testimonials: Item[];
  rightImage: string;
}

const TestimonialSlider: React.FC<Props> = ({ testimonials, rightImage }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div className="text-center">
          <Image
            src={testimonials[index].logo}
            alt={testimonials[index].name}
            width={100}
            height={100}
            className="mx-auto h-14 w-auto object-contain"
          />

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            {testimonials[index].content}
          </p>

          <h3 className="mt-6 text-2xl font-merriweather font-bold">
            {testimonials[index].name}
          </h3>

          <p className="text-gray-500">{testimonials[index].company}</p>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all 
                  ${index === i ? "bg-orange-500" : "bg-gray-300"}`}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <Image
            src={rightImage}
            alt="testimonial image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-[90%] h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;
