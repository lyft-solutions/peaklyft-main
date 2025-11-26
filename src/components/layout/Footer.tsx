"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const footerData = {
  offices: [
    {
      flag: "/us.svg",
      title: "Corporate Headquarters",
      lines: [
        "© AntWalk Inc.",
        "1521 Concord Pike Ste 301 #250 Wilmington, DE",
        "19803",
      ],
    },
    {
      flag: "/india.svg",
      title: "India Corporate Office",
      lines: [
        "3rd Floor, Building No. 380, 23rd Cross, 9th Main Rd,",
        "Sector 7, HSR Layout, Bengaluru, Karnataka 560102",
      ],
    },
  ],
  columns: [
    {
      title: "Why AntWalk?",
      links: [
        { name: "Why AntWalk - AntWalk Difference", href: "#" },
        { name: "Why Capability Academy?", href: "#" },
        { name: "Choose the right Assessment for team", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "About us", href: "#" },
        { name: "Careers at AntWalk", href: "#" },
      ],
    },
    {
      title: "Industries",
      links: [
        { name: "Financial Services", href: "#" },
        { name: "Technology", href: "#" },
        { name: "Manufacturing", href: "#" },
      ],
    },
    {
      title: "Academies",
      links: [
        { name: "Sales Academy", href: "#" },
        { name: "Customer Success Academy", href: "#" },
        { name: "Finance Academy", href: "#" },
        { name: "Leadership & EI Academy", href: "#" },
        { name: "Human Resource Academy", href: "#" },
        { name: "PowerSkills Academy", href: "#" },
        { name: "Data and AI Academy", href: "#" },
        { name: "Cybersecurity Academy", href: "#" },
        { name: "Software Engineering Academy", href: "#" },
        { name: "Cloud & Infrastructure Academy", href: "#" },
        { name: "Product & Design Academy", href: "#" },
        { name: "Gen AI Academy", href: "#" },
      ],
    },
    {
      title: "Initiatives",
      links: [
        { name: "Financial Services", href: "#" },
        { name: "Technology/ IT Services", href: "#" },
        { name: "Manufacturing", href: "#" },
      ],
    },
    {
      title: "Partners",
      links: [
        { name: "Knowledge Partners", href: "#" },
        { name: "Content Partners", href: "#" },
        { name: "Integration Partners", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs", href: "#" },
        { name: "eBook", href: "#" },
        { name: "Podcasts", href: "#" },
        { name: "Newsletters", href: "#" },
        { name: "Events", href: "#" },
        { name: "Case Studies", href: "#" },
      ],
      bottomLinks: [
        { name: "Terms and conditions", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        background:
          "radial-gradient(at center center, #0a4891 0%, #101D96 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-end px-4 pt-11 pb-11 border-b border-[#11ABEE40]">
          <Button
            variant="default"
            className="py-2 bg-transparent hover:bg-transparent rounded-md font-medium flex items-center gap-2 transition-colors"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src="/contact.svg"
                alt="contact"
                className="w-6 h-6"
              />
              <span className="text-[18px] font-medium">Contact Us</span>
            </Link>
          </Button>
        </div>

        <div className="px-2.5 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="lg:pr-8 lg:border-r lg:border-white/20">
              {footerData.offices.map((office, i) => (
                <div key={i} className="mb-5">
                  <h3 className="text-[#FAA843] text-base font-medium mb-[5px] leading-[25px] flex items-center gap-2.5">
                    <Image
                      width={35}
                      height={23}
                      src={office.flag}
                      alt="flag"
                      className="w-[35px] h-[23.33px] object-contain"
                    />

                    {office.title}
                  </h3>
                  {office.lines.map((line, j) => (
                    <p
                      key={j}
                      className="text-[13px] text-[#D5D8FF] leading-[20px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}

              <div className="flex gap-2.5 items-center">
                <p className="text-[#FAA843] font-medium">Let's connect:</p>
                <div className="flex gap-2.5 py-2.5 pl-2.5">
                  <Link
                    href="#"
                    className="border border-[#FFFFFF25] flex justify-center items-center rounded-full w-[30px] h-[30px]"
                  >
                    <Image src="/mail.svg" alt="mail" width={15} height={15} />
                  </Link>
                  <Link
                    href="#"
                    className="border border-[#FFFFFF25] flex justify-center items-center rounded-full w-[30px] h-[30px]"
                  >
                    <Image
                      src="/fb.svg"
                      alt="fb"
                      width={15}
                      height={15}
                      className="w-[15px] h-[15px]"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="border border-[#FFFFFF25] flex justify-center items-center p-2 rounded-full w-[30px] h-[30px]"
                  >
                    <Image src="/in.svg" alt="in" width={15} height={15} />
                  </Link>
                  <Link
                    href="#"
                    className="border border-[#FFFFFF25] flex justify-center items-center p-2 rounded-full w-[30px] h-[30px]"
                  >
                    <Image
                      src="/twitter.svg"
                      alt="twitter"
                      width={15}
                      height={15}
                    />
                  </Link>
                </div>
              </div>

              <p className="text-[15px] font-medium text-white">
                © AntWalk Inc. All rights reserved
              </p>
            </div>

            <div className="flex-1 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 md:gap-4 lg:gap-2 lg:pl-2">
              <div className="flex-1 lg:pr-8 lg:border-r lg:border-white/20">
                <h3 className="text-[#FAA843] font-semibold mb-4">
                  {footerData.columns[0].title}
                </h3>
                <ul className="space-y-2">
                  {footerData.columns[0].links.map((link, idx) => (
                    <li key={idx} className="m-0">
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#D5D8FF] hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-[#FAA843] font-semibold mb-2 mt-5">
                  {footerData.columns[1].title}
                </h3>
                <ul className="space-y-2">
                  {footerData.columns[1].links.map((link, idx) => (
                    <li key={idx} className="m-0 h-[20.5px]">
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#D5D8FF] hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 lg:min-w-[200px] lg:px-2.5 lg:border-r lg:border-white/20">
                <h3 className="text-[#FAA843] font-semibold mb-4">
                  {footerData.columns[2].title}
                </h3>
                <ul className="space-y-2">
                  {footerData.columns[2].links.map((link, idx) => (
                    <li key={idx} className="m-0 h-[20.5px]">
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#D5D8FF] hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-[#FAA843] font-semibold mb-4 mt-3">
                  {footerData.columns[3].title}
                </h3>
                <ul className="space-y-2">
                  {footerData.columns[3].links.map((link, idx) => (
                    <li key={idx} className="m-0 h-[20.5px]">
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#D5D8FF] hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 lg:min-w-[200px] lg:pl-2.5">
                <h3 className="text-[#FAA843] font-semibold mb-4">
                  {footerData.columns[4].title}
                </h3>
                <ul className="space-y-2 mb-8">
                  {footerData.columns[4].links.map((link, idx) => (
                    <li key={idx} className="m-0 h-[20.5px]">
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#D5D8FF] hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="text-[#FAA843] font-semibold mb-4">
                  {footerData.columns[5].title}
                </h3>
                <ul className="space-y-2 mb-8 grid grid-cols-2">
                  {footerData.columns[5].links.map((link, idx) => (
                    <li key={idx} className="m-0 h-[20.5px]">
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#D5D8FF] hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/20">
                  <ul className="space-y-2">
                    {footerData.columns[5].bottomLinks?.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-[#D5D8FF] hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
