import Link from "next/link";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-[#0F172A] overflow-hidden pt-24 pb-12">
      {/* Subtle animated gradient or mesh pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0F172A]/0 to-transparent animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-0 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-[#0F172A]/0 to-transparent animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_forwards]">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8 flex items-center justify-center space-x-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white font-medium">Portfolio</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Our Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Explore our latest projects across Web, Mobile, Blockchain &amp;
          Extensions
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
