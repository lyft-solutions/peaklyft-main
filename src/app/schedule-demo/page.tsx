"use client";

import { useState } from "react";
import { demoPageContent } from "@/utils/scheduleDemo.data";

export default function ScheduleDemo() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      formType: "demo",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="py-10 sm:py-16 md:py-24 bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1B2A4E] mb-3">Request Received!</h2>
          <p className="text-gray-500">We'll contact you within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-[1280px] mx-auto w-full grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8 md:p-12">

        <div>
          <h1 className="text-4xl font-bold mb-4">{demoPageContent.title}</h1>
          <p className="text-gray-600 mb-6">{demoPageContent.description}</p>
          <ul className="space-y-3 text-gray-700">
            {demoPageContent.benefits.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            required
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Work Email"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2"
          />
          <select name="interest" className="w-full border rounded-lg px-4 py-2">
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
            We'll contact you within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}