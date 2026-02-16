"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type MenuSectionItem = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
};

export type MenuSection = {
  title?: string;
  items: MenuSectionItem[];
};

export type MenuItemType = {
  label: string;
  type: "mega" | "link";
  href?: string;
  image?: string;
  sections: MenuSection[];
};

const MenuItem = ({ item }: { item: MenuItemType }) => {
  const [open, setOpen] = useState(false);

  const isSolution = item.label === "Solution";

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* TOP BUTTON */}
      <button className="text-[17px] font-medium hover:text-secondary transition py-6">
        {item.label}
      </button>

      {/* MEGA MENU */}
      {item.type === "mega" && open && (
        <div
          className="
            absolute left-1/2 top-[60px] -translate-x-1/3 mt-3
            bg-white shadow-xl p-8 z-999 
            grid grid-cols-3 gap-15
            animate-fadeIn border-t-6 border-secondary
          "
          style={{
            width: isSolution ? 1150 : 900,
            // height:isSolution? 750:500
          }}
        >
          {isSolution ? (
            <>
              {item.sections.map((section, index) => (
                <div key={index} className="space-y-5">
                  {section.title && (
                    <h3 className="text-[20px] font-semibold text-secondary ">
                      {section.title}
                    </h3>
                  )}

                  <ul className="space-y-4">
                    {section.items.map((menu, idx) => (
                      <li key={idx}>
                        <Link
                          href={menu.href}
                          onClick={() => setOpen(false)}
                          className="flex items-start gap-3 group/item"
                        >
                          <Image
                            src={`/icons/${menu.icon}.svg`}
                            alt={menu.title}
                            width={32}
                            height={32}
                            className="opacity-70 group-hover/item:opacity-100 transition"
                          />

                          <div>
                            <h4 className="text-[16px] text-black  ">
                              {menu.title}
                            </h4>
                            <p className="text-[13px] text-black-900 leading-snug top-2">
                              {menu.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="col-span-2 space-y-5">
                {item.sections.map((section, index) => (
                  <div key={index}>
                    {section.title && (
                      <h3 className="text-[20px] font-semibold text-secondary mb-4">
                        {section.title}
                      </h3>
                    )}

                    <ul className="space-y-4">
                      {section.items.map((menu, idx) => (
                        <li key={idx}>
                          <Link
                            href={menu.href}
                            onClick={() => setOpen(false)}
                            className="flex items-start gap-3 group/item"
                          >
                            <Image
                              src={`/icons/${menu.icon}.svg`}
                              alt={menu.title}
                              width={32}
                              height={32}
                              className="opacity-70 group-hover/item:opacity-100 transition"
                            />

                            <div>
                              <h4 className="text-[16px] text-black">
                                {menu.title}
                              </h4>
                              <p className="text-[13px] text-black-500 leading-snug">
                                {menu.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-end items-start">
                <Image
                  src="/icons/ebook.png"
                  alt="ebook"
                  width={380}
                  height={480}
                  className="object-contain"
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
