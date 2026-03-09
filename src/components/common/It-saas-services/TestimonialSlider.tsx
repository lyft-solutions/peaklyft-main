import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "The training sessions were extremely practical and engaging. Our team gained valuable insights that we could immediately apply to our ongoing projects.",
    name: "Amit Verma",
    role: "Digital Transformation Lead",
    company: "TechNova Solutions",
    logo: "TECHNOVA",
    initial: "A",
  },
  {
    quote:
      "A very well-organized program with real-world examples and interactive discussions. It helped our team better understand modern product development strategies.",
    name: "Sneha Iyer",
    role: "Product Manager",
    company: "InnovateX Labs",
    logo: "INNOVATEX",
    initial: "S",
  },
  {
    quote:
      "The sessions were insightful and inspiring. Our engineers walked away with practical frameworks and a fresh perspective on building scalable systems.",
    name: "Rahul Desai",
    role: "Engineering Manager",
    company: "CloudBridge Technologies",
    logo: "CLOUDBRIDGE",
    initial: "R",
  },
  {
    quote:
      "Excellent learning experience for our leadership team. The case studies and collaborative exercises made the sessions highly impactful.",
    name: "Neha Kulkarni",
    role: "Head of Learning & Development",
    company: "FutureEdge Consulting",
    logo: "FUTUREEDGE",
    initial: "N",
  },
  {
    quote:
      "One of the most valuable training programs we have attended. The structured approach and industry insights made it truly beneficial for our organization.",
    name: "Karan Malhotra",
    role: "Operations Director",
    company: "NextWave Systems",
    logo: "NEXTWAVE",
    initial: "K",
  },
];

const BLUE = "#0a4891";

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const goTo = (idx: number) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); }, 350);
  };

  const t = testimonials[active];

  return (
    <section
      className="relative overflow-hidden py-28 px-6"
      style={{ background: "#f8faff", fontFamily: "'Georgia', serif" }}
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: `radial-gradient(circle, ${BLUE}, transparent)` }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-5"
          style={{ background: `radial-gradient(circle, ${BLUE}, transparent)` }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(${BLUE} 1.5px, transparent 1.5px)`,
            backgroundSize: "32px 32px",
          }} />
      </div>

      <div
        className="relative z-10 w-full container mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-sans font-semibold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ color: BLUE, background: `rgba(10,72,145,0.08)`, border: `1px solid rgba(10,72,145,0.15)` }}
          >
            ✦ Trusted Worldwide ✦
          </span>
          <h2
            className="text-[#0d1b36] font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
          >
            Client Testimonials<br />
            <span className="relative inline-block" style={{ color: BLUE }}>
              You Can Trust
              <span className="absolute left-0 -bottom-1.5 w-full h-[3px] rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)` }} />
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-sans">The proof is in the results.</p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "#ffffff",
            border: `1px solid rgba(10,72,145,0.1)`,
            boxShadow: `0 25px 80px rgba(10,72,145,0.1), 0 4px 20px rgba(10,72,145,0.06)`,
          }}
        >
          <div className="grid md:grid-cols-2 min-h-[440px]">

            {/* LEFT: Quote */}
            <div className="p-12 flex flex-col justify-between relative">
              {/* Big quote decoration */}
              <div
                className="absolute top-6 right-8 text-[110px] leading-none select-none font-serif"
                style={{ color: `rgba(10,72,145,0.06)` }}
              >"</div>

              <div
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateX(-16px)" : "translateX(0)",
                  transition: "all 0.35s ease",
                }}
              >
                {/* Company logo */}
                <div className="mb-8">
                  <span
                    className="text-3xl font-black tracking-widest"
                    style={{ color: BLUE, fontFamily: "'Arial Black', sans-serif" }}
                  >
                    {t.logo}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" fill={BLUE} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-[#1e2d4a] text-lg leading-relaxed mb-10 relative z-10"
                  style={{ fontStyle: "italic", lineHeight: "1.8" }}
                >
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 font-sans"
                    style={{ background: `linear-gradient(135deg, ${BLUE}, #1a6cd4)` }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-[#0d1b36] font-bold text-sm font-sans">{t.name}</p>
                    <p className="text-gray-400 text-xs font-sans">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2.5 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="rounded-full border-0 cursor-pointer transition-all duration-300"
                    style={{
                      width: i === active ? "28px" : "10px",
                      height: "10px",
                      background: i === active ? BLUE : `rgba(10,72,145,0.2)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: Stats panel */}
            <div
              className="relative overflow-hidden flex items-center justify-center p-10"
              style={{ background: `linear-gradient(145deg, ${BLUE} 0%, #1560c8 60%, #0d3a7a 100%)` }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-10 border-2 border-white" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10 border border-white" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-5 border border-white" />

              {/* Dot pattern overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }} />

              <div className="relative z-10 w-full max-w-xs">
                {/* Avatars row */}
                <div className="flex justify-center gap-2 mb-8">
                  {["N", "R", "P", "M", "K"].map((l, i) => (
                    <div
                      key={i}
                      className="rounded-full flex items-center justify-center text-white text-xs font-bold font-sans flex-shrink-0 transition-all duration-300"
                      style={{
                        width: i === 2 ? "50px" : "38px",
                        height: i === 2 ? "50px" : "38px",
                        background: i === 2 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.12)",
                        border: i === 2 ? "2.5px solid white" : "1.5px solid rgba(255,255,255,0.3)",
                        marginTop: i === 2 ? "-6px" : "0",
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>

                <p className="text-center text-white/70 text-xs font-sans tracking-wider uppercase mb-8">
                  Our Trained Professionals
                </p>

                {/* Stat cards */}
                <div className="space-y-3">
                  {[
                    { label: "Training Sessions", value: "200+", pct: "85%" },
                    { label: "Satisfaction Rate",  value: "98%",  pct: "98%" },
                    { label: "Companies Trained",  value: "50+",  pct: "72%" },
                  ].map((s, i) => (
                    <div key={i} className="rounded-2xl p-4"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/60 text-xs font-sans uppercase tracking-wider">{s.label}</span>
                        <span className="text-white font-bold text-sm font-sans">{s.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: visible ? s.pct : "0%",
                            background: "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.5))",
                            transition: `width 1.3s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.2}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex justify-center">
          <div className="h-px w-40 rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)` }} />
        </div>
      </div>
    </section>
  );
}