"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { headerMenu } from "@/utils/Header";
import Image from "next/image";
import Link from "next/link";
import {  MegaSectionType, MenuItemType } from "./menu.types";

const MobileMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [activeMain, setActiveMain] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
      <div className="flex items-center justify-between p-5 border-b">
        <Image src="/peaklyft.svg" alt="Logo" width={167} height={57} />
        <button onClick={() => setOpen(false)} className="p-2">
          <X size={15} />
        </button>
      </div>

      <button
        onClick={() => {
          setActiveMain(null);
          setActiveSub(null);
        }}
        className="flex items-center gap-1 px-4 py-3 text-[10px] font-medium"
      >
        <ArrowLeft size={12} /> Back
      </button>

      <div className="px-4 py-2">
        {headerMenu.map((item: MenuItemType) => {
          const isMainOpen = activeMain === item.label;

          return (
            <div key={item.label} className="border-b py-3">
              <div
                onClick={() => item.type === "mega" && setActiveMain(isMainOpen ? null : item.label)}
                className="flex items-center justify-between text-[12px] font-semibold"
              >
                {item.label}

                {item.type === "mega" &&
                  (isMainOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
              </div>

              {item.type === "mega" && (
                <div
                  className={`overflow-hidden transition-all ml-2 ${
                    isMainOpen ? "max-h-[800px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.sections.map((section: MegaSectionType) => {
                    const isSubOpen = activeSub === section.title;

                    return (
                      <div key={section.title} className="mb-2">
                        <div
                          onClick={() => setActiveSub(isSubOpen ? null : section.title ?? "")}
                          className="flex items-center justify-between py-2 text-[16px] font-medium"
                        >
                          {section.title}
                          {isSubOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                        </div>

                        <div
                          className={`overflow-hidden border-l pl-3 transition-all ${
                            isSubOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          {section.items.map((i: any) => (
                            <Link
                              key={i.href}
                              href={i.href}
                              className="block py-1 text-[14px] text-gray-700"
                            >
                              {i.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
