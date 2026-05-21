"use client";

import { useEffect, useRef, useState } from "react";
import { RESULTS } from "@/utils/utils";

// Parses "150+", "99.9%", "2×", "40%" → { number: 150, suffix: "+" }
function parseValue(raw: string): { number: number; suffix: string } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return {
    number: parseFloat(match[1]),
    suffix: match[2] ?? "",
  };
}

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    setCount(0);
    let startTime: number | null = null;
    const isDecimal = !Number.isInteger(target);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

interface StatCardProps {
  icon: string;
  raw: string;   // e.g. "150+", "99.9%"
  label: string;
  active: boolean;
  delay: number;
}

function StatCard({ icon, raw, label, active, delay }: StatCardProps) {
  const { number, suffix } = parseValue(raw);
  const count = useCountUp(number, 1800, active);
  const isDecimal = !Number.isInteger(number);
  const display = isDecimal ? count.toFixed(1) : count;

  return (
    <div
      className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center transition-all duration-700"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-3xl font-extrabold text-[#E8640A] tracking-tight leading-none">
        {display}{suffix}
      </div>
      <div className="text-white/55 text-xs mt-2 font-medium leading-snug">
        {label}
      </div>
    </div>
  );
}

export default function ResultsBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-[#1a3564] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E8640A] bg-white/5 border border-orange-400/20 px-4 py-1.5 rounded-full mb-3">
            By The Numbers
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Outcomes That{" "}
            <span className="text-[#E8640A]">Speak for Themselves</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {RESULTS.map((item, i) => (
            <StatCard
              key={item.l}
              icon={item.icon}
              raw={item.n}
              label={item.l}
              active={hasAnimated}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}