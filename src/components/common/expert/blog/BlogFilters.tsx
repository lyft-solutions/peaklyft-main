"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BlogFilters() {
  const industries = [
    "All Industries",
    "Agnostic",
    "Financial Services",
    "Technology",
  ];

  const solutions = [
    "All Solutions",
    "Training",
    "Consulting",
    "Learning Paths",
  ];

  const functions = [
    "All Functions",
    "HR",
    "Sales",
    "Marketing",
    "Leadership",
  ];

  const [industry, setIndustry] = useState(industries[0]);
  const [solution, setSolution] = useState(solutions[0]);
  const [func, setFunc] = useState(functions[0]);

  const selectBox =
    "flex items-center justify-between bg-[#E5E5E5] px-6 py-3 rounded-md min-w-[260px] cursor-pointer font-medium text-[16px]";

  return (
    <div className="w-full px-10 py-10 flex flex-col sm:flex-row items-center gap-6">
      <p className="font-semibold text-[22px] whitespace-nowrap">
        Filter By:
      </p>

      {/* INDUSTRY */}
      <div className={selectBox}>
        <select
          className="bg-transparent outline-none w-full appearance-none cursor-pointer"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          {industries.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <ChevronDown size={20} />
      </div>

      {/* SOLUTION */}
      <div className={selectBox}>
        <select
          className="bg-transparent outline-none w-full appearance-none cursor-pointer"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        >
          {solutions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <ChevronDown size={20} />
      </div>

      {/* FUNCTION */}
      <div className={selectBox}>
        <select
          className="bg-transparent outline-none w-full appearance-none cursor-pointer"
          value={func}
          onChange={(e) => setFunc(e.target.value)}
        >
          {functions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <ChevronDown size={20} />
      </div>
    </div>
  );
}
