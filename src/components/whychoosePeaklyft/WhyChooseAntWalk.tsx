"use client";

interface Props {
  title: string;
  description: string;
}

export default function WhyChooseAntWalk({ title, description }: Props) {
  return (
    <section className="py-16 text-center max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Why Choose <span className="text-blue-600">PeakLyft</span> Sales Academy?
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </section>
  );
}
