interface Academy {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TitleStructure {
  normalStart: string;
  highlight: string;
  normalEnd: string;
}

interface Category {
  id: string;
  name: string;
  title?: TitleStructure;
  subtitle?: string;
  academies: Academy[];
}

export const academiesData: Category[] = [
  {
    id: "growth",
    name: "Product Engineering",

    title: {
      normalStart: "Build Scalable",
      highlight: "Digital Products",
      normalEnd: "with Modern Engineering",
    },

    subtitle:
      "Design, develop, and scale secure, high-performance digital solutions aligned with evolving business goals.",

    academies: [
      {
        id: "sales",
        title: "Web Application Development",
        description:
          "Develop scalable, secure, and high-performance web applications using modern frontend and backend technologies tailored to business needs.",
        icon: "wrench",
      },
      {
        id: "customer-success",
        title: "Mobile App Development",
        description:
          "Build seamless and performance-optimized mobile applications for iOS and Android platforms with intuitive user experiences.",
        icon: "wrench",
      },
      {
        id: "finance",
        title: "Custom Software Solutions",
        description:
          "Create tailored software systems that streamline operations, improve efficiency, and support long-term scalability.",
        icon: "wrench",
      },
      {
        id: "marketing",
        title: "UI/UX Design & Prototyping",
        description:
          "Design intuitive and user-centric interfaces that enhance engagement and ensure exceptional digital experiences.",
        icon: "wrench",
      },
      {
        id: "business-dev",
        title: "API & Backend Architecture",
        description:
          "Develop secure APIs and scalable backend systems using optimized database structures and modular architecture patterns.",
        icon: "wrench",
      },
      {
        id: "revenue-ops",
        title: "Quality Assurance & Testing",
        description:
          "Ensure product reliability and performance through comprehensive testing strategies and continuous quality monitoring.",
        icon: "wrench",
      },
    ],
  },

  {
    id: "people",
    name: "AI & Emerging Technologies",

    title: {
      normalStart: "Innovate with",
      highlight: "AI & Emerging Tech",
      normalEnd: "for Competitive Advantage",
    },

    subtitle:
      "Leverage intelligent systems and next-generation technologies to automate workflows and unlock new opportunities.",

    academies: [
      {
        id: "leadership",
        title: "AI Development",
        description:
          "Design and implement AI-powered applications including machine learning models and intelligent automation systems.",
        icon: "wrench",
      },
      {
        id: "hr",
        title: "Chatbot & Automation Solutions",
        description:
          "Enhance customer engagement and operational efficiency with AI-driven chatbots and workflow automation tools.",
        icon: "wrench",
      },
      {
        id: "talent",
        title: "Blockchain Development",
        description:
          "Build decentralized applications, secure smart contracts, and scalable blockchain infrastructures.",
        icon: "wrench",
      },
      {
        id: "culture",
        title: "Data Engineering & Analytics",
        description:
          "Transform raw data into actionable insights through advanced analytics dashboards and optimized data pipelines.",
        icon: "wrench",
      },
      {
        id: "diversity",
        title: "Business Process Automation",
        description:
          "Automate repetitive processes and integrate systems to improve efficiency and reduce operational overhead.",
        icon: "wrench",
      },
      {
        id: "change-management",
        title: "Technology Strategy & Innovation",
        description:
          "Identify and implement forward-thinking technology strategies aligned with long-term business growth.",
        icon: "wrench",
      },
    ],
  },

  {
    id: "technology",
    name: "Cloud & DevOps Engineering",

    title: {
      normalStart: "Scale with",
      highlight: "Cloud & DevOps",
      normalEnd: "Infrastructure",
    },

    subtitle:
      "Deploy, manage, and optimize cloud-native applications using secure and automated infrastructure systems.",

    academies: [
      {
        id: "digital",
        title: "Cloud Architecture & Migration",
        description:
          "Design and migrate systems to scalable cloud environments using modern infrastructure best practices.",
        icon: "wrench",
      },
      {
        id: "data",
        title: "DevOps & CI/CD Implementation",
        description:
          "Implement automated deployment pipelines and monitoring systems for faster, reliable product releases.",
        icon: "wrench",
      },
      {
        id: "agile",
        title: "Containerization & Orchestration",
        description:
          "Utilize Docker and orchestration tools to build efficient, portable, and scalable application environments.",
        icon: "wrench",
      },
      {
        id: "cloud",
        title: "Cloud Security & Compliance",
        description:
          "Strengthen infrastructure security with proactive monitoring, threat detection, and compliance strategies.",
        icon: "wrench",
      },
      {
        id: "cybersecurity",
        title: "Performance Optimization",
        description:
          "Enhance system performance through infrastructure tuning, caching strategies, and scalable architecture design.",
        icon: "wrench",
      },
      {
        id: "ai-ml",
        title: "Maintenance & Long-Term Support",
        description:
          "Provide ongoing monitoring, updates, and proactive support to ensure stability and continuous improvement.",
        icon: "wrench",
      },
    ],
  },
];
