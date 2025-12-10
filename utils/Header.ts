export interface MegaItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface MegaSectionType {
  title?: string;
  items: MegaItem[];
}

export interface MenuItemType {
  label: string;
  type: "link" | "mega";
  href?: string;
  image?: string;
  sections?: MegaSectionType[];
}

export const headerMenu: MenuItemType[] = [
  {
    label: "Solution",
    type: "mega",
    sections: [
      {
        title: "Academies",
        items: [
          {
            title: "Sales Academy",
            description:
              "Transform your salesforce into high-performing teams that close deals faster and smarter.",
            href: "/solutions/sales-academy",
            icon: "sales",
          },
        ],
      },
      {
        title: "Initiatives",
        items: [
          // {
          //   title: "Succession Planning",
          //   description:
          //     "Prepare future leaders with a structured pathway to fill critical roles.",
          //   href: "/initiatives/succession-planning",
          //   icon: "succession",
          // },
        ],
      },
    ],
  },

  {
    label: "Industries",
    type: "mega",
    image: "/icons/ebook.png",
    sections: [
      {
        items: [
          {
            title: "IT Services",
            description: "Structured capability-building programs.",
            href: "/industries/saas-it-services",
            icon: "it",
          },
        ],
      },
    ],
  },

  {
    label: "Why Peaklyft?",
    type: "mega",
    image: "/icons/ebook.png",
    sections: [
      {
        items: [
          // {
          //   title: "Our Process",
          //   description: "Discover how Peaklyft powers capability building.",
          //   href: "/why/process",
          //   icon: "process",
          // },
          // {
          //   title: "Impact Stories",
          //   description: "Success stories from global teams.",
          //   href: "/why/stories",
          //   icon: "stories",
          // },
          {
            title: "About Us",
            description:
              "Learn more about our mission to empower workforces through innovative learning experiences",
            href: "/why/about-us",
            icon: "about",
          },
        ],
      },
    ],
  },
  {
    label: "Research Center",
    type: "mega",
    image: "/icons/ebook.png",
    sections: [
      {
        items: [
          {
            title: "Blog",
            description: "Success stories from global teams.",
            href: "/research-center/blog",
            icon: "blog",
          },
          {
            title: "Contact us",
            description: "Get in touch with our team and discuss your specific needs",
            href: "contact",
            icon: "blog",
          },
        ],
      },
    ],
  },
];
