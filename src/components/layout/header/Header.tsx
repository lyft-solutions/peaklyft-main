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
        className={`w-full transition-all duration-300 ${
          isFixed
            ? "fixed top-0 left-0 bg-white shadow-md z-50"
            : "relative bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between p-[10px]">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/peaklyft1.svg"
                alt="Logo"
                className="w-[180px] md:w-[180px]"
                width={180}
                height={63}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <DesktopMenu />

          <Link
            href="/schedule-demo"
            className="hidden sm:block bg-primary text-[14px] font-medium text-white border border-primary rounded-[4px] hover:bg-primary hover:text-white hover:border-primary py-[8px] px-5"
          >
            <Button className="hidden sm:block bg-primary cursor-pointer text-[14px] font-medium hover:bg-primary hover:border-primary rounded-[4px] py-[8px] px-5">
              Schedule a Demo
            </Button>
          </Link>

          <button onClick={() => setOpen(true)} className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 20 16"
              fill="none"
            >
              <rect y="7" width="20" height="2" rx="1" fill="#0a4891"></rect>
              <rect y="14" width="20" height="2" rx="1" fill="#0a4891"></rect>
              <rect width="20" height="2" rx="1" fill="#0a4891"></rect>
            </svg>
          </button>
        </div>

        <MobileMenu open={open} setOpen={setOpen} />
      </header>
    </>
  );
}
