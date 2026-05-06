interface SectionHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 max-w-5xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
        {title} <span className="text-secondary">{highlight}</span>
      </h2>
      <div
        className={`w-100 h-1.5 bg-secondary rounded-full mb-6 ${centered ? "mx-auto" : ""}`}
      ></div>
      {subtitle && <p className="text-lg text-[#475569]">{subtitle}</p>}
    </div>
  );
}
