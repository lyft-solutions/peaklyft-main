import { Challenge } from "@/src/types/portfolio";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function ChallengesSection({
  challenges,
}: {
  challenges: Challenge[];
}) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Challenges & Solutions
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm"
            >
              {/* Challenge Side */}
              <div className="w-full md:w-1/2 p-8 lg:p-12 bg-red-50/40 border-b md:border-b-0 md:border-r border-[#E2E8F0]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600 shadow-sm">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    The Challenge
                  </h3>
                </div>
                <p className="text-[#475569] leading-relaxed">
                  {item.challenge}
                </p>
              </div>

              {/* Solution Side */}
              <div className="w-full md:w-1/2 p-8 lg:p-12 bg-blue-50/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg text-[#1D4ED8] shadow-sm">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Our Solution
                  </h3>
                </div>
                <p className="text-[#475569] leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
