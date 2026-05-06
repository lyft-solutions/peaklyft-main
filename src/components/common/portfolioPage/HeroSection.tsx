"use client"

import { STATS } from "@/utils/utils";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0f172a] overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Blue Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        {/* Orange Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row gap-16 items-center">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Our Work & Case Studies
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Digital Products That Drive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8640A] to-[#ff9f43]">
              Real Business
            </span>{" "}
            Outcomes
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
            From FinTech SaaS platforms to HealthTech apps — explore how
            Peaklyft Solutions engineers scalable, secure, and high-performance
            digital products for businesses worldwide.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="group relative px-8 py-4 bg-[#E8640A] text-white rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(232,100,10,0.6)] hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 border border-slate-600 text-white rounded-xl font-semibold text-base hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1">
              Start a Project
            </button>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div className="flex-1 w-full max-w-lg z-10">
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-white group-hover:text-[#E8640A] transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}