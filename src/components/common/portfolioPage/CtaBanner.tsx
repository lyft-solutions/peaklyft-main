"use client"

export default function CTABanner() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1a3564] rounded-3xl px-10 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
              Ready to Build Your Next{" "}
              <span className="text-[#E8640A]">Digital Product?</span>
            </h2>
            <p className="text-white/65 text-base max-w-lg leading-relaxed">
              Tell us about your challenge. Our engineering team will get back
              to you within 24 hours with a tailored approach.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/schedule-demo"
              className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm text-center"
            >
              Schedule a Demo
            </a>
            <a
              href="/contact"
              className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-bold text-sm text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}