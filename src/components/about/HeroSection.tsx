export default function HeroSection({ hero }: { hero: any }) {
  return (
    <section
      className="
        relative 
        h-[80vh] md:h-[80vh] 
        w-full 
        bg-cover bg-center md:bg-left bg-no-repeat
        flex items-center 
        px-6 md:px-16
      "
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-secondary/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight merri">
          {hero.title}
        </h1>

        <p className="text-xl md:text-2xl mt-3 font-semibold merri">
          {hero.subtitle}
        </p>

        <p className="mt-3 text-base md:text-lg opacity-90 leading-relaxed max-w-xl merri">
          {hero.description}
        </p>

        <button className="mt-6 px-6 md:px-10 py-3 border border-primary rounded-lg text-primary font-semibold text-base md:text-lg shadow-lg hover:bg-secondary hover:text-white hover:border-secondary transition cursor-pointer">
          {hero.buttonText}
        </button>
      </div>
    </section>
  );
}
