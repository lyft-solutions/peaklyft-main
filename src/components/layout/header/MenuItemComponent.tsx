"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { MenuItemType } from "./MenuItem";

const MenuItem = ({ item }: { item: MenuItemType }) => {
  const [open, setOpen] = useState(false);
  const isSolution = item.label === "Solution";

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-[17px] font-medium hover:text-secondary transition py-6">
        {item.label}
      </button>

      {item.type === "mega" && open && (
        <div
          className="
            fixed left-1/2 top-[100px] -translate-x-1/2
            bg-white shadow-xl p-8 z-50
            grid grid-cols-3 gap-14
            border-t-4 border-secondary
          "
          style={{ width: isSolution ? 1150 : 900 }}
        >
          {item.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              {section.title && (
                <h3 className="text-[20px] font-semibold text-secondary">
                  {section.title}
                </h3>
              )}

              <ul className="space-y-4">
                {section.items.map((menu, idx) => (
                  <li key={idx}>
                    <Link
                      href={menu.href}
                      className="flex items-start gap-3"
                    >
                      {menu.icon && (
                        <Image
                          src={`/icons/${menu.icon}.svg`}
                          alt={menu.title}
                          width={32}
                          height={32}
                        />
                      )}

                      <div>
                        <h4 className="text-[16px] text-black">
                          {menu.title}
                        </h4>
                        {menu.description && (
                          <p className="text-[13px] text-gray-600">
                            {menu.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
