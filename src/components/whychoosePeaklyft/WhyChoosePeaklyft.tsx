"use client";

interface Props {
  title: string;
  title2: string;
  description: string;
}

export default function WhyChoosePeaklyft({ title, title2, description }: Props) {
  return (
    <section className="py-16 text-center container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        {title}
        <span className="text-secondary">{title2}</span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </section>
  );
}
