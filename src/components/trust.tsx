"use client";

const trustPoints = [
  {
    title: "Founder-Led Architecture",
    description:
      "All major technical decisions are reviewed at leadership level to ensure scalability and long-term system integrity.",
  },
  {
    title: "Senior-Only Engineers",
    description:
      "We work with experienced engineers focused on clean architecture, system design, and production-grade delivery.",
  },
  {
    title: "AI-Augmented Workflow",
    description:
      "AI-assisted development, automated testing, and intelligent tooling to deliver faster without compromising quality.",
  },
  {
    title: "Cloud-Native & DevOps Driven",
    description:
      "Built on scalable infrastructure with CI/CD, monitoring, and performance optimization at the core.",
  },
];

export default function Trust() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why trust <span className="text-primary">Peaklyft</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          A compact, high-performance engineering team combining
          architecture-first thinking and AI-powered execution.
        </p>
      </div>

      {/* Compact Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {trustPoints.map((point, index) => (
          <div
            key={index}
            className="p-5 rounded-xl shadow-md bg-gradient-to-r from-[#163A74] to-[#FF7A2F] text-white"
          >
            <h3 className="text-base font-semibold mb-2">
              {point.title}
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}