"use client"

import { TECH_STACK } from "@/utils/utils";

export default function TechStackSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E8640A] bg-orange-50 px-4 py-1.5 rounded-full mb-3">
            Our Stack
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a3564] tracking-tight">
            Technologies Powering{" "}
            <span className="text-[#E8640A]">Peaklyft</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((group) => (
            <div
              key={group.cat}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <span className="inline-block text-xs font-bold bg-[#1a3564] text-white px-3 py-1.5 rounded-lg mb-4">
                {group.cat}
              </span>
              <div className="flex flex-col divide-y divide-gray-50">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 py-2.5 text-sm text-gray-600 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8640A] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}