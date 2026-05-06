import { TechStack } from "@/src/types/portfolio";

export default function TechStackCarousel({
  techStack,
}: {
  techStack: TechStack[];
}) {
  // Triplicate array for seamless looping marquee effect
  const loopingTech = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-20 bg-[#0F172A] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Technologies Used
        </h2>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full flex">
        {/* Gradients for fade effect on left and right edges */}
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-fit animate-marquee hover:pause whitespace-nowrap py-4">
          {loopingTech.map((tech, index) => (
            <div
              key={index}
              className="mx-4 flex items-center justify-center px-8 py-4 bg-[#1E293B] border border-white/10 rounded-full shadow-lg transition-transform hover:scale-105 cursor-default"
            >
              <span className="text-white font-medium text-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.333%)); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
