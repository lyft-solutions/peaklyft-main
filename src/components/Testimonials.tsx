"use client";

import { testimonialsData } from "@/utils/testimonial";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by <span className="text-primary">Founders & CTOs</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We partner with ambitious teams to build scalable, high-performance
            digital products backed by architecture-first thinking.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE — FEATURED VIDEO */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://tbi-web.s3.us-east-1.amazonaws.com/testimonial_linda.mp4"
              title="Client Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
          </div>

          {/* RIGHT SIDE — WRITTEN TESTIMONIALS */}
          <div className="space-y-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  “{item.feedback}”
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold text-primary">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {item.role} — {item.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;