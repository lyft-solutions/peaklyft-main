// Hero content ======================>
export const heroSections = {
  default: {
    type: "complex",
    topTagline: "We Don’t Just Build Apps — We Build Business-Ready Systems",
    title: {
      line1Start: "Build,",
      highlight1: "Launch, and Scale",
      line1End: "Digital Products",
      line2Start: "with Confidence",
      highlight2: "",
      line2End: "",
    },
    description:
      "Peaklyft Solutions <b>designs and develops scalable web, mobile,</b> and custom software products that help businesses launch faster, operate efficiently, and grow with confidence.",
    button: { label: "Schedule a Demo!" },
    heroImage: "/Home-Hero.png",
  } as const,

  growth: {
    type: "complex",
    topTagline: "Accelerate Organizational Growth",
    title: {
      line1Start: "Elevate Your",
      highlight1: "Growth Teams",
      line1End: "",
      line2Start: "with",
      highlight2: "High-Impact Academies",
      line2End: "",
    },
    description: "Specialized capability academies designed...",
    button: { label: "Explore Growth" },
    heroImage: "/growth-Home-Hero.png",
  } as const,

  people: {
    type: "complex",
    topTagline: "Transform Your Workforce",
    title: {
      line1Start: "Build Strong",
      highlight1: "People Leaders",
      line1End: "",
      line2Start: "with",
      highlight2: "Leadership Academies",
      line2End: "",
    },
    description: "Leadership, talent and HR academies built...",
    button: { label: "Explore People" },
    heroImage: "/people-Home-Hero.png",
  } as const,

  "sales-academy": {
    type: "simple",
    badge: "Peaklyft Marketing Academy",
    simpleTitle: "Close More Deals, Faster!",
    description:
      "Transform your salesforce with a dedicated Sales Capability Academy that builds skills, drives consistency, and accelerates revenue growth.",
    buttonText: "Schedule a Demo!",
    image: "/images/sales.png",
  } as const,

  "marketing-academy": {
    type: "simple",
    badge: " Peaklyft Marketing Academy",
    simpleTitle: "Grow Your Brand, Smarter!",
    description:
      "Boost your marketing performance with structured capability building...",
    buttonText: "Talk to Experts",
    image: "/images/marketing-academy.png",
  } as const,
} as const;

//////////////////////////////////////////
export const brandSections = {
  default: {
    title: "Modern Technologies Powering Peaklyft Solutions",
    brands: [
      { name: "HTML", logo: "/icons/Java-Script.svg" },
      { name: "fastapi", logo: "/icons/FastAPI.svg" },
      { name: "Javascript", logo: "/icons/Next.js.svg" },
      { name: "angular", logo: "/icons/Angular.svg" },
      { name: "php", logo: "/icons/Express-js.svg" },
      { name: "nextjs", logo: "/icons/Css.svg" },
    ],
  },

  finance: {
    title: "Trusted by Finance Leaders",
    brands: [
      { name: "HDFC", logo: "/hdfc.png" },
      { name: "ICICI", logo: "/icici.png" },
      { name: "Axis Bank", logo: "/axis.png" },
    ],
  },

  healthcare: {
    title: "Trusted by Healthcare Organizations",
    brands: [
      { name: "Apollo", logo: "/apollo.png" },
      { name: "Fortis", logo: "/fortis.png" },
      { name: "Manipal", logo: "/manipal.png" },
    ],
  },
};

export const heroSectionsData = {
  default: {
    type: "complex",
    topTagline: "We Don’t Just Build Apps — We Build Business-Ready Systems",
    title: {
      line1Start: "Build, Launch",
      highlight1: "and Scale Digital Products",
      line1End: "",
      line2Start: "with Confidence",
      highlight2: "",
      line2End: "",
    },
  } as const,

  growth: {
    type: "complex",
    topTagline: "Accelerate Organizational Growth",
    title: {
      line1Start: "Elevate Your",
      highlight1: "Growth Teams",
      line1End: "",
      line2Start: "with",
      highlight2: "High-Impact Academies",
      line2End: "",
    },
    description: "Specialized capability academies designed...",
    button: { label: "Explore Growth" },
    heroImage: "/growth-Home-Hero.png",
  } as const,

  people: {
    type: "complex",
    topTagline: "Transform Your Workforce",
    title: {
      line1Start: "Build Strong",
      highlight1: "People Leaders",
      line1End: "",
      line2Start: "with",
      highlight2: "Leadership Academies",
      line2End: "",
    },
    description: "Leadership, talent and HR academies built...",
    button: { label: "Explore People" },
    heroImage: "/people-Home-Hero.png",
  } as const,

  blog: {
    type: "simple",
    badge: "Blog",
    simpleTitle:
      "Explore, Learn, and stay </br> informed with our blog section",
    description: "",
    image: "https://www.antwalk.com/wp-content/uploads/2024/05/9084-copy-1.png",
  } as const,

  "marketing-academy": {
    type: "simple",
    badge: " Peaklyft Marketing Academy",
    simpleTitle: "Grow Your Brand, Smarter!",
    description:
      "Boost your marketing performance with structured capability building...",
    buttonText: "Talk to Experts",
    image: "/images/marketing-academy.png",
  } as const,
} as const;

export const aiSections = {
  type: "simple",
  badge: "Peaklyft AI Development",
  simpleTitle: "Build Intelligent AI-Powered Solutions",
  description:
    "Harness the power of Artificial Intelligence to automate processes, unlock insights, and create smarter digital products. We design and develop AI-driven applications, machine learning models, and intelligent systems that help businesses innovate faster and make data-driven decisions.",
  buttonText: "Schedule a Demo!",
  image: "/images/AI-Development.png",
} as const;

export const mobileSections = {
  type: "simple",
  badge: " Peaklyft mobile development",
  simpleTitle: "Build Powerful Mobile Apps  Faster!",
  description:
    "Transform your ideas into high-performance mobile applications with our expert Mobile App Development services. We design, develop, and scale secure Android & iOS apps that deliver seamless user experiences and drive business growth.",
  buttonText: "Talk to Experts",
  image: "/images/mobile-app.png",
} as const;

export const customerSections = {
  type: "simple",
  badge: " Peaklyft Custom Software Development",
  simpleTitle: "Build Custom Software That Scales!",
  description:
    "Transform your business with tailor-made software solutions designed to match your workflows, scale with growth, and deliver long-term value. We build secure, high-performance applications that solve real business challenges.",
  buttonText: "Schedule a Demo!",
  image: "/images/Custom-Software-Development.png",
} as const;

export const uiSections = {
  type: "simple",
  badge: " Peaklyft UI/UX Design",
  simpleTitle: "Design That Users Remember!",
  description:
    "Create intuitive, engaging, and user-centric digital experiences with our UI/UX design services. We blend research, usability, and modern design principles to craft interfaces that improve engagement, boost conversions, and strengthen brand trust.",
  buttonText: "Schedule a Demo!",
  image: "/images/UX-Design.png",
} as const;

export const cloudSections = {
  type: "simple",
  badge: " Peaklyft Cloud Engineering",
  simpleTitle: "Build Smarter, Scale Faster with Cloud",
  description:
    "Leverage secure, scalable cloud solutions to modernize your infrastructure and accelerate innovation. We design, migrate, and optimize cloud architectures that improve performance, reduce costs, and ensure high availability across your systems.",
  buttonText: "Schedule a Demo!",
  image: "/images/Cloud-Engineering.png",
} as const;

export const blockchainSections = {
  type: "simple",
  badge: "Peaklyft Blockchain Development",
  simpleTitle: "Build Secure & Decentralized Solutions",
  description:
    "Unlock the power of blockchain technology to build secure, transparent, and decentralized applications. We develop smart contracts, decentralized platforms, and scalable blockchain solutions that enhance trust, security, and efficiency in digital systems.",
  buttonText: "Schedule a Demo!",
  image: "/images/Blockchain1.png",
} as const;

export const chatbotSections = {
  type: "simple",
  badge: "Peaklyft Chatbot Development",
  simpleTitle: "Build Intelligent Chatbot Solutions",
  description:
    "Create intelligent, conversational chatbot solutions that enhance customer engagement and streamline operations. We design and develop AI-powered chatbots that provide instant support, automate workflows, and deliver personalized user experiences across web and mobile platforms.",
  buttonText: "Schedule a Demo!",
  image: "/images/Chatbot-section.jpg",
} as const;

export const webSections = {
  type: "complex",
  badge1: "Peaklyft Web Development",

  title: {
    line1Start: "Build Powerful",
    highlight1: "Scalable Websites",
    line1End: "with Peaklyft",
    line2Start: "Solutions",
    highlight2: "",
    line2End: "",
  },
  description:
    "Peaklyft Solutions Web Development Services help businesses establish a strong digital presence by delivering responsive, secure, and high-performance websites through modern technologies and end-to-end development solutions.",
  button: { label: "Schedule a Demo!" },
  heroImage: "/images/WEb-development.png",
} as const;

export const qaSections = {
  type: "simple",
  badge: "Peaklyft QA & Testing",
  simpleTitle: "Ship with Confidence, Every Time!",
  description:
    "Ensure flawless software delivery with our comprehensive QA & Testing services. We design and execute manual, automated, and performance testing strategies that catch bugs early, reduce risk, and accelerate your release cycles.",
  buttonText: "Schedule a Demo!",
  image: "/images/QA-&-Testing.jpg",
} as const;

export const devopsSections = {
  type: "simple",
  badge: "Peaklyft DevOps & Automation",
  simpleTitle: "Deploy Faster, Scale Smarter!",
  description:
    "Streamline your development pipeline with our end-to-end DevOps & Automation services. We build CI/CD pipelines, infrastructure-as-code, and automated workflows that reduce manual effort, eliminate bottlenecks, and accelerate delivery at scale.",
  buttonText: "Schedule a Demo!",
  image: "/images/Devops.jpg",
} as const;

export const mvpSections = {
  type: "simple",
  badge: "Peaklyft MVP → Product Scaling",
  simpleTitle: "From Idea to Scale, Without the Chaos!",
  description:
    "Launch your MVP fast and scale it with confidence. We help startups and enterprises validate ideas quickly, ship production-ready products, and build the scalable architecture needed to grow from your first user to your millionth.",
  buttonText: "Schedule a Demo!",
  image: "/images/MVP-Scaling.jpg",
} as const;

export const productEngineeringSections = {
  type: "simple",
  badge: "Peaklyft Product Engineering",
  simpleTitle: "Build Scalable Digital Products!",
  description:
    "Transform your ideas into powerful digital products with our end-to-end Product Engineering services. We design, develop, and scale secure, high-performance software solutions that help businesses innovate faster and deliver exceptional user experiences.",
  buttonText: "Schedule a Demo!",
  image: "/images/Product-Engineering.jpg",
} as const;

export const maintenanceSupportSections = {
  type: "simple",
  badge: "Peaklyft Maintenance & Support",
  simpleTitle: "Keep Your Systems Running Smoothly!",
  description:
    "Ensure your applications stay secure, reliable, and high-performing with our Maintenance & Support services. We provide continuous monitoring, timely updates, bug fixes, and performance optimization to keep your digital products running without disruptions.",
  buttonText: "Schedule a Demo!",
  image: "/images/Maintenance-&-Support.jpg",
} as const;
