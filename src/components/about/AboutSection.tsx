export default function AboutSection({ about }: { about: any }) {
return (
<section className="py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-20">
<div className="md:w-1/2">
<img src={about.image} className="w-full rounded-[20px] shadow-xl border border-gray-200" />
</div>

        {/* RIGHT TEXT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {about.title}
          </h2>

          <p className="text-base md:text-lg text-black leading-[1.8] mb-6">
            {about.description1}
          </p>

          <p className="text-base md:text-lg text-black leading-[1.8]">
            {about.description2}
          </p>
        </div>

    </section>
  );
}
