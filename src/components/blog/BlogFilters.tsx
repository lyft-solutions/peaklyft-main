"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const industries = ["All Industries", "Agnostic", "Financial Services", "Technology"];
const solutions = ["All Solutions", "Training", "Consulting", "Learning Paths"];
const functions = ["All Functions", "HR", "Sales", "Marketing", "Leadership"];

export default function BlogFilters() {
  const [industry, setIndustry] = useState("All Industries");
  const [solution, setSolution] = useState("All Solutions");
  const [func, setFunc] = useState("All Functions");

  const selectBox =
    "flex items-center justify-between bg-[#E5E5E5] px-6 py-3 rounded-md min-w-[260px] cursor-pointer font-medium text-[18px]";

  return (
    <div className="w-full px-10 py-10 flex items-center gap-6">
      
      <p className="font-semibold text-[22px] pl-70 whitespace-nowrap">Filter By:</p>

   
      <div className={selectBox}>
        <select
          className="bg-transparent outline-none w-full appearance-none cursor-pointer"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          {industries.map((item) => (
            <option key={item} className="text-black">
              {item}
            </option>
          ))}
        </select>
        <ChevronDown className="ml-2" size={20} />
      </div>

   
      <div className={selectBox}>
        <select
          className="bg-transparent outline-none w-full appearance-none cursor-pointer"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        >
          {solutions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <ChevronDown className="ml-2" size={20} />
      </div>

 
      <div className={selectBox}>
        <select
          className="bg-transparent outline-none w-full appearance-none cursor-pointer"
          value={func}
          onChange={(e) => setFunc(e.target.value)}
        >
          {functions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <ChevronDown className="ml-2" size={20} />
      </div>
    </div>
  );
}
