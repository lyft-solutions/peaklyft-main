import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export type Expert = {
  id: string | number;
  name: string;
  title: string;
  image: string;
  profile?: string;
};

type Props = {
  data: Expert[];
  className?: string;
};

export default function ExpertsGrid({ data, className = "" }: Props) {
  return (
    <section className={`w-full my-20 ${className}`}>
      <div className="container mx-auto">
        <div className="py-10">
          <h2 className="font text-center">
            World’s Best Sales Experts and Coaches
          </h2>
          <p className="text-center text-muted-foreground mt-2 mb-8">
            Ants who have Been There Done That
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end md:my-0 my-28">
          {data.map((d) => (
            <article key={d.id} className="relative my-5">
              <div className="group transition-transform duration-300 hover:-translate-y-4 relative">
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 -top-30 w-[170px] md:w-[200px] lg:w-[220px]"
                >
                  <div className="rounded-full overflow-hidden w-full h-full aspect-3/4 mx-auto mt-12">
                    <Image
                      src={d.image}
                      alt={d.name}
                      width={222}
                      height={222}
                      className="object-contain w-[222px] h-[222px]"
                    />
                  </div>
                </div>

                <div className="rounded-2xl bg-secondary p-0 pt-14 pb-6">
                  <div className="mx-6 bg-white/80 backdrop-blur-xs rounded-lg mt-8 pb-6 text-center relative">
                    <h3 className="text-lg font-semibold">{d.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{d.title}</p>

                    <div className="mt-5 mb-1 flex justify-center">
                      {d.profile ? (
                        <a
                          href={d.profile}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${d.name} LinkedIn`}
                        >
                          <div className="w-8 h-8 rounded bg-white/90 flex items-center justify-center shadow-sm">
                            <Linkedin className="w-4 h-4 text-secondary" />
                          </div>
                        </a>
                      ) : (
                        <div className="w-8 h-8 rounded bg-white/90 flex items-center justify-center shadow-sm">
                          <Linkedin className="w-4 h-4 text-secondary" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
