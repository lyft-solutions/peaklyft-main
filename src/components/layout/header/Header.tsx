"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import { Button } from "../../ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > 20) setIsFixed(true);
      else setIsFixed(false);

      if (current > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = current <= 0 ? 0 : current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <Navbar />
      </div>

      <header
        className={`w-full lg:p-0 p-2.5 transition-all duration-300 ${
          isFixed
            ? "fixed top-0 left-0 bg-white shadow-md z-50"
            : "relative bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between sm:py-2">
          <div className="flex items-center gap-2.5">
            <Link href="/">
              <Image
                src="/peaklyft1.svg"
                alt="Logo"
                className="lg:w-[200px] w-[106.48px]"
                width={190}
                height={63}
              />
            </Link>

            {/* <Button
              variant={"main"}
              className="gap-2.5 h-[39.5px] w-[109px] hidden sm:flex"
            >
              Explore{" "}
              <svg
                aria-hidden="true"
                fill="#fff"
                className="text-main h-[15px]! w-[15px]!"
                viewBox="0 0 448 512"
                height={14}
                width={14}
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </Button> */}
          </div>

          <DesktopMenu />

          <Button className="hidden sm:block bg-[#FF802C00] font-[Poppins] text-[14px] font-medium fill-secondary text-secondary border border-secondary hover:bg-primary hover:text-main hover:border-primary rounded-[4px] pt-[9px] pb-[29px] px-5">
            Schedule a Demo
          </Button>

          <button onClick={() => setOpen(true)} className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 20 16"
              fill="none"
            >
              <rect y="7" width="20" height="2" rx="1" fill="#4E5FF5"></rect>
              <rect y="14" width="20" height="2" rx="1" fill="#4E5FF5"></rect>
              <rect width="20" height="2" rx="1" fill="#4E5FF5"></rect>
            </svg>
          </button>
        </div>

        <MobileMenu open={open} setOpen={setOpen} />
      </header>
    </>
  );
}
