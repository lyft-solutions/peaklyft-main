"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const footerData = {
  offices: [
    {
      flag: "/india.svg",
      title: "India Corporate Office",
      lines: [
        " C210B, Phase 8B, Industrial Area, Sector 74, ",
        "Sahibzada Ajit Singh Nagar, Punjab 140307",
      ],
    },
  ],
  columns: [
    {
      title: "Build With Peaklyft",
      links: [
        { name: "Web Development", href: "/solutions/sales-academy" },
        { name: "Mobile App Development", href: "/solutions/mobile-app" },
        {
          name: "Customer Software Development",
          href: "/solutions/custom-software",
        },
        { name: "UI/UX Design", href: "/solutions/ui-ux-design" },
        { name: "Cloud Engineering", href: "/solutions/cloud-engineering" },
      ],
    },

    {
      title: "Emerging Tech",
      links: [
        { name: "Web Development", href: "E:/solutions/mobile-app" },
        { name: "Blochain", href: "/solutions/ui-ux-design" },
        { name: "Chatbot Development", href: "/solutions/cloud-engineering" },
      ],
    },
    {
      title: "Scale With Peaklyft",
      links: [
        { name: "Product Engineering", href: "/solutions/ui-ux-design" },
        { name: "MVP->Product Scaling", href: "/solutions/cloud-engineering" },
        { name: "DevOps & Automation", href: "/solutions/ui-ux-design" },
        { name: "QA & Testing", href: "/solutions/mobile-app" },
        { name: "Maintenance & Support", href: "/solutions/sales-academy" },
        { name: "Product Engineering", href: "/solutions/ui-ux-design" },
        { name: "MVP->Product Scaling", href: "/solutions/cloud-engineering" },
      ],
    },
    {
      title: "Industries",
      links: [
        {
          name: " FinTech & Financial Services",
          href: "/industries/saas-it-services",
        },
        { name: "E-Commerce & Retail", href: "/industries/saas-it-services" },
        { name: "Saas & Technology", href: "/industries/saas-it-services" },
      ],
    },
    {
      title: "Why Peaklyft?",
      links: [
        { name: "About us", href: "/solutions/cloud-engineering" },
        {
          name: "Technology/ IT Services",
          href: "/solutions/cloud-engineering",
        },
      ],
    },

    {
      title: "Resources",
      links: [{ name: "Blogs", href: "#" }],
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
      className="text-white min-h-[450px] lg:min-h-[550px]"
      style={{
        background:
          "radial-gradient(at center center, #04438bff 0%, #252b5eff 100%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex relative right-2 justify-end px-10 pt-10 pb-8 border-b border-[#11ABEE40]">
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
              <span className="text-[16px] font-medium">Contact Us</span>
            </Link>
          </Button>
        </div>

        <div className="px-2.5 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="lg:pr-8 lg:border-r lg:border-white/20">
              {footerData.offices.map((office, i) => (
                <div key={i} className="mb-8">
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
                    className="border border-[#FFFFFF25] flex justify-center items-center p-2 rounded-full w-[40px] h-[30px]"
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
                © Peaklyft Inc. All rights reserved
              </p>
            </div>

            <div className="flex-1 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 md:gap-4 lg:gap-2 lg:pl-2">
              <div className="flex-1 lg:pr-8 lg:border-r lg:border-white/20">
                <h3 className="text-[#FAA843] font-semibold mb-4">
                  {footerData.columns[0].title}
                </h3>
                <ul className="space-y-4">
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
                <ul className="space-y-4">
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
