"use client";

import { useState } from "react";
import { demoPageContent } from "@/utils/scheduleDemo.data";
import { DemoFormData } from "../../components/common/schedule-type/scheduleDemo.types";

export default function ScheduleDemo() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Demo request submitted!");
    }, 1500);
  };

  return (
<section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8 md:p-12">

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {demoPageContent.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {demoPageContent.description}
          </p>

          <ul className="space-y-3 text-gray-700">
            {demoPageContent.benefits.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="email"
            required
            placeholder="Work Email"
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2"
          />

          <select className="w-full border rounded-lg px-4 py-2">
            {demoPageContent.interests.map((interest, index) => (
              <option key={index}>{interest}</option>
            ))}
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Scheduling..." : "Schedule a Demo"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We’ll contact you within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}
