import { Headset } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#040829] hidden sm:block">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between p-2.5">
        <p className="font-poppins text-sm font-medium leading-[25px] text-main">
          Work With Peaklyft | Opportunities for Developers & Innovators
          {/* <Link href="/schedule-demo" className="text-primary hover:underline">
            Register Now
          </Link> */}
        </p>
        <Link href="/contact" className="flex items-center gap-1 font-poppins cursor-pointer text-[15px] font-normal leading-[25px] text-main hover:text-primary">
          <Headset className="h-4 w-4" />
          <span>Support</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;