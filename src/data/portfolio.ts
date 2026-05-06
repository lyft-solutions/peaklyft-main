import { PortfolioProject } from "../types/portfolio";

export const portfolioCategories = [
  { id: "web-development", label: "Web Development" },
  { id: "app-development", label: "App Development" },
  { id: "blockchain", label: "Blockchain" },
  { id: "extensions", label: "Extensions" },
] as const;

export const portfolioProjects: PortfolioProject[] = [
  // Web Development
  {
    id: "web-1",
    slug: "nexacommerce",
    category: "web-development",
    title: "NexaCommerce",
    shortDescription:
      "A headless ecommerce platform designed for high-growth D2C brands. It delivers lightning-fast performance and seamless integrations.",
    overview:
      "NexaCommerce is an innovative, headless B2B and B2C ecommerce solution. We engineered the platform from the ground up to support massive scale, flexible storefronts, and seamless integration with existing ERP and CRM systems. This project revolutionized how mid-market brands handle high-volume sales events without downtime.",
    thumbnailImage: "/Long-term.png",
    mockupImage: "/Long-term.png",
    images: [
      {
        src: "/Long-term.png",
        alt: "NexaCommerce Storefront",
      },
      {
        src: "/Long-term.png",
        alt: "NexaCommerce Dashboard",
      },
      {
        src: "/Long-term.png",
        alt: "NexaCommerce Checkout",
      },
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
      { name: "Stripe" },
      { name: "AWS" },
    ],
    keyFeatures: [
      {
        title: "Headless Architecture",
        description:
          "Decoupled frontend for superior performance and flexibility.",
      },
      {
        title: "Omnichannel Ready",
        description: "Unified data layer for web, mobile, and in-store POS.",
      },
      {
        title: "AI-Powered Search",
        description:
          "Intelligent product recommendations and semantic search capabilities.",
      },
      {
        title: "Advanced Analytics",
        description:
          "Real-time dashboards for tracking sales, inventory, and user behavior.",
      },
      {
        title: "Custom Checkout Flow",
        description:
          "Optimized, multi-step checkout to reduce cart abandonment.",
      },
    ],
    challenges: [
      {
        challenge: "Handling massive traffic spikes during flash sales.",
        solution:
          "Implemented edge caching and a scalable microservices architecture using Kubernetes.",
      },
      {
        challenge: "Integrating with legacy inventory management systems.",
        solution:
          "Built custom middleware to synchronize data asynchronously via webhooks.",
      },
    ],
    liveUrl: "https://nexacommerce.example.com",
    duration: "6 Months",
    client: "Nexa Retail Group",
    year: "2023",
  },
  {
    id: "web-2",
    slug: "flowhr",
    category: "web-development",
    title: "FlowHR",
    shortDescription:
      "Modern HR management system automating onboarding, payroll, and performance reviews. Designed for remote-first teams.",
    overview:
      "FlowHR simplifies human resources for distributed teams. The platform provides a centralized hub for employee data, automated workflows for onboarding, and a comprehensive suite for performance tracking. We focused on creating an intuitive user experience that reduces administrative overhead.",
    thumbnailImage: "/saas.png",
    mockupImage: "/saas.png",
    images: [
      { src: "/saas.png", alt: "FlowHR Dashboard" },
      {
        src: "/saas.png",
        alt: "FlowHR Employee Profile",
      },
      {
        src: "/saas.png",
        alt: "FlowHR Payroll Module",
      },
    ],
    techStack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "GraphQL" },
      { name: "MongoDB" },
      { name: "Docker" },
    ],
    keyFeatures: [
      {
        title: "Automated Onboarding",
        description: "Self-serve portals for new hires to submit documents.",
      },
      {
        title: "Payroll Integration",
        description: "Seamless syncing with major payroll providers.",
      },
      {
        title: "Performance Reviews",
        description: "Customizable templates for 360-degree feedback.",
      },
      {
        title: "Time Off Tracking",
        description: "Visual calendars for managing team availability.",
      },
      {
        title: "Compliance Reporting",
        description: "Automated generation of essential HR reports.",
      },
    ],
    challenges: [
      {
        challenge: "Securing sensitive employee data.",
        solution:
          "Implemented end-to-end encryption and strict role-based access controls.",
      },
      {
        challenge: "Managing complex PTO accrual policies.",
        solution:
          "Developed a robust rule engine to calculate balances dynamically.",
      },
    ],
    duration: "4 Months",
    client: "Global Tech Solutions",
    year: "2024",
  },
  {
    id: "web-3",
    slug: "medvault",
    category: "web-development",
    title: "MedVault",
    shortDescription:
      "HIPAA-compliant patient portal for telemedicine and medical record management. Ensures data privacy and accessibility.",
    overview:
      "MedVault bridges the gap between healthcare providers and patients. It offers a secure platform for scheduling virtual appointments, accessing lab results, and managing prescriptions. Our primary focus was adhering strictly to healthcare compliance standards while delivering a modern UI.",
    thumbnailImage: "/3D-1.jpg",
    mockupImage: "/3D-1.jpg",
    images: [
      { src: "/3D-1.jpg", alt: "MedVault Portal Home" },
      {
        src: "/3D-1.jpg",
        alt: "MedVault Appointments",
      },
      { src: "/3D-1.jpg", alt: "MedVault Records" },
    ],
    techStack: [
      { name: "Vue.js" },
      { name: "Python" },
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "WebRTC" },
    ],
    keyFeatures: [
      {
        title: "Telehealth Integration",
        description: "Secure video conferencing within the browser.",
      },
      {
        title: "Secure Messaging",
        description: "Encrypted communication between doctors and patients.",
      },
      {
        title: "Record Management",
        description: "Centralized access to medical history and lab reports.",
      },
      {
        title: "Prescription Refills",
        description: "Automated request system for continuous care.",
      },
      {
        title: "Appointment Scheduling",
        description: "Real-time calendar sync with clinic systems.",
      },
    ],
    challenges: [
      {
        challenge: "Ensuring strict HIPAA compliance.",
        solution:
          "Conducted rigorous security audits and implemented data masking.",
      },
      {
        challenge: "High-quality video calls on low-bandwidth networks.",
        solution:
          "Optimized WebRTC configurations for adaptive bitrate streaming.",
      },
    ],
    liveUrl: "https://medvault.example.com",
    duration: "8 Months",
    client: "HealthFirst Network",
    year: "2023",
  },
  {
    id: "web-4",
    slug: "Townbolt",
    category: "web-development",
    title: "Townbolt",
    shortDescription:
      "Townbolt is a comprehensive platform designed to streamline the process of submitting planning applications to local government authorities. It provides a user-friendly interface for applicants to upload necessary documents, track the status of their applications, and communicate with planning officers, while offering robust tools for council staff to manage, review, and process these applications efficiently.",
    overview:
      "Townbolt streamlines the planning application process for both applicants and local government authorities. It provides a user-friendly interface for applicants to upload necessary documents, track the status of their applications, and communicate with planning officers, while offering robust tools for council staff to manage, review, and process these applications efficiently.",
    thumbnailImage: "/custom.png",
    mockupImage: "/custom.png",
    images: [
      { src: "/custom.png", alt: "FlowHR Dashboard" },
      {
        src: "/custom.png",
        alt: "FlowHR Employee Profile",
      },
      {
        src: "/custom.png",
        alt: "FlowHR Payroll Module",
      },
    ],
    techStack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "GraphQL" },
      { name: "MongoDB" },
      { name: "Docker" },
    ],
    keyFeatures: [
      {
        title: "Automated Onboarding",
        description: "Self-serve portals for new hires to submit documents.",
      },
      {
        title: "Payroll Integration",
        description: "Seamless syncing with major payroll providers.",
      },
      {
        title: "Performance Reviews",
        description: "Customizable templates for 360-degree feedback.",
      },
      {
        title: "Time Off Tracking",
        description: "Visual calendars for managing team availability.",
      },
      {
        title: "Compliance Reporting",
        description: "Automated generation of essential HR reports.",
      },
    ],
    challenges: [
      {
        challenge: "Securing sensitive employee data.",
        solution:
          "Implemented end-to-end encryption and strict role-based access controls.",
      },
      {
        challenge: "Managing complex PTO accrual policies.",
        solution:
          "Developed a robust rule engine to calculate balances dynamically.",
      },
    ],
    duration: "4 Months",
    client: "Global Tech Solutions",
    year: "2024",
  },

  // App Development
  {
    id: "app-1",
    slug: "swiftride",
    category: "app-development",
    title: "SwiftRide",
    shortDescription:
      "Urban mobility app for electric scooter sharing. Features real-time tracking, secure payments, and smart routing.",
    overview:
      "SwiftRide is revolutionizing last-mile transportation in metropolitan areas. The mobile application allows users to locate, unlock, and pay for electric scooters seamlessly. We developed native-like performance to ensure a snappy user experience even in poor network conditions.",
    thumbnailImage: "/image2.png",
    mockupImage: "/image2.png",
    images: [
      { src: "/image2.png", alt: "SwiftRide Map View" },
      { src: "/image2.png", alt: "SwiftRide Scanner" },
      {
        src: "/image2.png",
        alt: "SwiftRide Ride History",
      },
    ],
    techStack: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Firebase" },
      { name: "Google Maps API" },
      { name: "Stripe" },
    ],
    keyFeatures: [
      {
        title: "Real-Time Map",
        description: "Live tracking of available scooters nearby.",
      },
      {
        title: "QR Code Unlocking",
        description: "Instant ride activation via camera scanner.",
      },
      {
        title: "Wallet Integration",
        description: "In-app balance management for quick payments.",
      },
      {
        title: "Ride History",
        description: "Detailed logs of past routes and expenses.",
      },
      {
        title: "Geo-fencing",
        description: "Automated speed limits and parking zone enforcement.",
      },
    ],
    challenges: [
      {
        challenge: "Accurate location tracking in dense urban areas.",
        solution:
          "Combined GPS data with cell tower triangulation for higher precision.",
      },
      {
        challenge: "Minimizing battery consumption.",
        solution:
          "Optimized background location updates and API polling intervals.",
      },
    ],
    duration: "5 Months",
    client: "Urban Motion Inc.",
    year: "2024",
  },
  {
    id: "app-2",
    slug: "nutritrack",
    category: "app-development",
    title: "NutriTrack",
    shortDescription:
      "AI-driven personalized nutrition and fitness tracker. Analyzes dietary habits to provide actionable health insights.",
    overview:
      "NutriTrack helps users achieve their health goals through smart tracking. The app leverages machine learning to analyze food photos, track macronutrients, and suggest personalized meal plans. We created a visually engaging interface to keep users motivated and consistent.",
    thumbnailImage: "/images/ai.png",
    mockupImage: "/images/ai.png",
    images: [
      { src: "/images/ai.png", alt: "NutriTrack Dashboard" },
      {
        src: "/images/ai.png",
        alt: "NutriTrack Food Scanner",
      },
      { src: "/images/ai.png", alt: "NutriTrack Progress" },
    ],
    techStack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "AWS" },
    ],
    keyFeatures: [
      {
        title: "Food Recognition AI",
        description: "Identify meals and estimate portions from photos.",
      },
      {
        title: "Macro Tracking",
        description: "Detailed breakdown of daily nutritional intake.",
      },
      {
        title: "Custom Meal Plans",
        description: "AI-generated recipes based on dietary preferences.",
      },
      {
        title: "Wearable Integration",
        description: "Syncs data with Apple Health and Google Fit.",
      },
      {
        title: "Progress Analytics",
        description: "Visual charts for weight and body composition trends.",
      },
    ],
    challenges: [
      {
        challenge: "Accurate food recognition from varied images.",
        solution:
          "Trained a custom computer vision model on a massive dataset of meals.",
      },
      {
        challenge: "Creating a smooth cross-platform experience.",
        solution:
          "Utilized Flutter to ensure consistent 60fps animations on iOS and Android.",
      },
    ],
    liveUrl: "https://nutritrack.example.com",
    duration: "7 Months",
    client: "FitLife Startup",
    year: "2023",
  },
  {
    id: "app-3",
    slug: "mindease",
    category: "app-development",
    title: "MindEase",
    shortDescription:
      "Mental wellness app offering guided meditations, mood tracking, and cognitive behavioral therapy exercises.",
    overview:
      "MindEase provides a sanctuary for mental well-being in the digital world. The app features a library of audio meditations, daily mood check-ins, and interactive CBT exercises. The design focuses on calming aesthetics, using soft colors and fluid animations to create a relaxing environment.",
    thumbnailImage: "/images/qa.png",
    mockupImage: "/images/qa.png",
    images: [
      { src: "/images/qa.png", alt: "MindEase Home" },
      {
        src: "/images/qa.png",
        alt: "MindEase Audio Player",
      },
      {
        src: "/images/qa.png",
        alt: "MindEase Mood Journal",
      },
    ],
    techStack: [
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
    keyFeatures: [
      {
        title: "Audio Library",
        description: "Hundreds of guided meditations categorized by goal.",
      },
      {
        title: "Mood Journaling",
        description: "Daily logging with emotion tags and notes.",
      },
      {
        title: "Offline Mode",
        description: "Download content for listening without internet access.",
      },
      {
        title: "Progress Streaks",
        description: "Gamified consistency tracking to build habits.",
      },
      {
        title: "Emergency Resources",
        description: "Quick access to crisis helplines and support.",
      },
    ],
    challenges: [
      {
        challenge: "Seamless audio playback with background support.",
        solution:
          "Implemented native audio players optimized for long-duration streaming.",
      },
      {
        challenge: "Designing a non-intrusive notification system.",
        solution:
          "Created customizable, silent reminders based on user schedules.",
      },
    ],
    duration: "4 Months",
    client: "Wellness Co.",
    year: "2024",
  },

  // Blockchain
  {
    id: "bc-1",
    slug: "chainpay",
    category: "blockchain",
    title: "ChainPay",
    shortDescription:
      "Decentralized payment gateway enabling merchants to accept cryptocurrency with instant fiat conversion.",
    overview:
      "ChainPay bridges the gap between traditional commerce and Web3. It allows businesses to seamlessly integrate crypto payments without exposure to volatility. We built a robust smart contract infrastructure backed by a sleek merchant dashboard for comprehensive transaction management.",
    thumbnailImage: "/3D-1.jpg",
    mockupImage: "/3D-1.jpg",
    images: [
      {
        src: "/3D-1.jpg",
        alt: "ChainPay Merchant Dashboard",
      },
      {
        src: "/3D-1.jpg",
        alt: "ChainPay Checkout Widget",
      },
      { src: "/3D-1.jpg", alt: "ChainPay Analytics" },
    ],
    techStack: [
      { name: "Solidity" },
      { name: "React" },
      { name: "Ethers.js" },
      { name: "Node.js" },
      { name: "Polygon" },
    ],
    keyFeatures: [
      {
        title: "Multi-Chain Support",
        description: "Accepts payments on Ethereum, Polygon, and BSC.",
      },
      {
        title: "Instant Conversion",
        description: "Auto-swaps crypto to stablecoins to avoid volatility.",
      },
      {
        title: "Merchant API",
        description: "Easy integration with Shopify and custom platforms.",
      },
      {
        title: "Non-Custodial",
        description: "Funds flow directly to merchant wallets.",
      },
      {
        title: "Transaction Analytics",
        description: "Real-time dashboard for volume and settlement tracking.",
      },
    ],
    challenges: [
      {
        challenge: "Mitigating high gas fees on Ethereum.",
        solution:
          "Integrated Layer 2 solutions and optimized smart contracts for lower computational costs.",
      },
      {
        challenge: "Handling transaction finality delays.",
        solution:
          "Implemented a robust webhook system to notify merchants instantly upon confirmation.",
      },
    ],
    liveUrl: "https://chainpay.example.com",
    duration: "6 Months",
    client: "FinTech Innovations",
    year: "2023",
  },
  {
    id: "bc-2",
    slug: "nftvault",
    category: "blockchain",
    title: "NFTVault",
    shortDescription:
      "Premium marketplace and portfolio tracker for high-value digital collectibles and generative art.",
    overview:
      "NFTVault caters to serious collectors in the digital art space. The platform offers a curated marketplace, advanced portfolio valuation tools, and secure escrow services. We focused on delivering a visually stunning interface that highlights the art while ensuring rock-solid security.",
    thumbnailImage: "/3D-1.jpg",
    mockupImage: "/3D-1.jpg",
    images: [
      { src: "/3D-1.jpg", alt: "NFTVault Marketplace" },
      {
        src: "/3D-1.jpg",
        alt: "NFTVault Asset Details",
      },
      { src: "/3D-1.jpg", alt: "NFTVault Portfolio" },
    ],
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Hardhat" },
      { name: "IPFS" },
      { name: "The Graph" },
    ],
    keyFeatures: [
      {
        title: "Curated Drops",
        description: "Exclusive access to premium NFT collections.",
      },
      {
        title: "Portfolio Valuation",
        description:
          "Real-time estimates based on floor prices and historical sales.",
      },
      {
        title: "Secure Escrow",
        description: "Trustless smart contracts for high-value OTC trades.",
      },
      {
        title: "Rarity Rankings",
        description: "Integrated trait analysis for generative collections.",
      },
      {
        title: "Fiat On-Ramp",
        description: "Credit card purchasing options for smooth onboarding.",
      },
    ],
    challenges: [
      {
        challenge: "Indexing massive amounts of on-chain data quickly.",
        solution:
          "Built custom subgraphs using The Graph for instant data retrieval.",
      },
      {
        challenge: "Ensuring image permanence for minted assets.",
        solution:
          "Utilized IPFS and decentralized storage solutions for all metadata.",
      },
    ],
    duration: "5 Months",
    client: "ArtBlock Capital",
    year: "2024",
  },
  {
    id: "bc-3",
    slug: "defilend",
    category: "blockchain",
    title: "DeFiLend",
    shortDescription:
      "Algorithmic money market protocol allowing users to lend and borrow digital assets with dynamic interest rates.",
    overview:
      "DeFiLend is a decentralized finance protocol designed for capital efficiency. Users can supply assets to earn passive yield or borrow against their collateral. We prioritized security through rigorous smart contract auditing and created a transparent, user-friendly frontend interface.",
    thumbnailImage: "/3D-1.jpg",
    mockupImage: "/3D-1.jpg",
    images: [
      { src: "/3D-1.jpg", alt: "DeFiLend Markets" },
      {
        src: "/3D-1.jpg",
        alt: "DeFiLend Borrow Dashboard",
      },
      { src: "/3D-1.jpg", alt: "DeFiLend Governance" },
    ],
    techStack: [
      { name: "Solidity" },
      { name: "React" },
      { name: "Web3.js" },
      { name: "Foundry" },
      { name: "Arbitrum" },
    ],
    keyFeatures: [
      {
        title: "Dynamic Rates",
        description:
          "Interest rates adjust algorithmically based on utilization.",
      },
      {
        title: "Over-collateralized Loans",
        description: "Secure borrowing with automated liquidation mechanisms.",
      },
      {
        title: "Flash Loans",
        description:
          "Uncollateralized loans for developers executing arbitrage.",
      },
      {
        title: "Governance Portal",
        description:
          "Token-based voting for protocol upgrades and parameter changes.",
      },
      {
        title: "Real-time Risk Metrics",
        description:
          "Clear display of health factors and liquidation thresholds.",
      },
    ],
    challenges: [
      {
        challenge: "Preventing smart contract exploits and flash loan attacks.",
        solution:
          "Integrated decentralized oracles (Chainlink) and underwent multiple independent audits.",
      },
      {
        challenge: "Designing an intuitive UI for complex financial actions.",
        solution:
          "Created simplified transaction flows with clear visual indicators of risk.",
      },
    ],
    liveUrl: "https://defilend.example.com",
    duration: "9 Months",
    client: "DeFi Protocol DAO",
    year: "2023",
  },

  // Extensions
  {
    id: "ext-1",
    slug: "tabflow",
    category: "extensions",
    title: "TabFlow",
    shortDescription:
      "Intelligent browser workspace manager that groups, saves, and suspends tabs to optimize memory usage.",
    overview:
      "TabFlow solves the modern problem of tab overload. This browser extension intelligently categorizes tabs into workspaces, automatically suspends inactive pages to save RAM, and provides a powerful search interface. We focused on lightweight performance and seamless browser integration.",
    thumbnailImage: "/3D-1.jpg",
    mockupImage: "/3D-1.jpg",
    images: [
      {
        src: "/3D-1.jpg",
        alt: "TabFlow Workspace View",
      },
      { src: "/3D-1.jpg", alt: "TabFlow Search Bar" },
      { src: "/3D-1.jpg", alt: "TabFlow Settings" },
    ],
    techStack: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Chrome Extension API" },
      { name: "IndexedDB" },
      { name: "Tailwind CSS" },
    ],
    keyFeatures: [
      {
        title: "Workspace Grouping",
        description: "Organize tabs by project or context.",
      },
      {
        title: "Memory Optimization",
        description: "Auto-suspend background tabs to free up resources.",
      },
      {
        title: "Omnibox Search",
        description: "Quickly find open or saved tabs via keyboard shortcuts.",
      },
      {
        title: "Session Sync",
        description: "Backup and restore workspaces across multiple devices.",
      },
      {
        title: "Link Sharing",
        description: "Export entire workspaces as a single shareable link.",
      },
    ],
    challenges: [
      {
        challenge:
          "Managing state across different extension contexts (background, popup, content scripts).",
        solution:
          "Implemented a robust message-passing architecture using Redux.",
      },
      {
        challenge: "Ensuring minimal performance overhead on the browser.",
        solution:
          "Optimized rendering cycles and heavily utilized native browser APIs.",
      },
    ],
    liveUrl: "https://chrome.google.com/webstore/detail/tabflow",
    duration: "3 Months",
    client: "Internal Project",
    year: "2024",
  },
  {
    id: "ext-2",
    slug: "pagelens",
    category: "extensions",
    title: "PageLens",
    shortDescription:
      "Developer tool extension for real-time CSS inspection, layout debugging, and accessibility auditing.",
    overview:
      "PageLens is an essential tool for frontend developers and designers. It provides an overlay interface to inspect DOM elements, visualize spacing/margins, and simulate different color vision deficiencies. We built it to be instantly responsive and visually unobtrusive.",
    thumbnailImage: "/3D-1.jpg",
    mockupImage: "/3D-1.jpg",
    images: [
      { src: "/3D-1.jpg", alt: "PageLens Inspector" },
      {
        src: "/3D-1.jpg",
        alt: "PageLens Accessibility Mode",
      },
      {
        src: "/3D-1.jpg",
        alt: "PageLens Typography Tools",
      },
    ],
    techStack: [
      { name: "TypeScript" },
      { name: "Svelte" },
      { name: "Web Components" },
      { name: "CSSOM" },
    ],
    keyFeatures: [
      {
        title: "Visual Box Model",
        description: "Highlight padding, margins, and dimensions on hover.",
      },
      {
        title: "Accessibility Audit",
        description: "Check contrast ratios and ARIA labels instantly.",
      },
      {
        title: "Typography Inspector",
        description: "Extract font families, weights, and line heights.",
      },
      {
        title: "Color Palette Extractor",
        description: "Generate a cohesive palette from any webpage.",
      },
      {
        title: "Ruler & Guides",
        description: "On-screen measuring tools for pixel-perfect alignments.",
      },
    ],
    challenges: [
      {
        challenge: "Avoiding conflicts with host page styles.",
        solution: "Encapsulated the entire extension UI within a Shadow DOM.",
      },
      {
        challenge: "Accurately calculating computed styles dynamically.",
        solution:
          "Leveraged CSS Object Model (CSSOM) APIs for precise measurements.",
      },
    ],
    duration: "4 Months",
    client: "Design Tools Inc.",
    year: "2023",
  },
  {
    id: "ext-3",
    slug: "formfill",
    category: "extensions",
    title: "FormFill",
    shortDescription:
      "Secure AI assistant for automating repetitive form filling, data extraction, and CRM data entry.",
    overview:
      "FormFill increases productivity for sales and recruiting teams. The extension uses natural language processing to extract relevant information from text and automatically populate complex web forms or CRM databases. Security and data privacy were our top priorities during development.",
    thumbnailImage: "/3D-1.jpg",
    mockupImage: "/3D-1.jpg",
    images: [
      { src: "/3D-1.jpg", alt: "FormFill Extraction" },
      {
        src: "/3D-1.jpg",
        alt: "FormFill Auto-populate",
      },
      { src: "/3D-1.jpg", alt: "FormFill Mappings" },
    ],
    techStack: [
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "OpenAI API" },
      { name: "AES Encryption" },
      { name: "Playwright (for testing)" },
    ],
    keyFeatures: [
      {
        title: "AI Data Extraction",
        description:
          "Parse names, emails, and phone numbers from unstructured text.",
      },
      {
        title: "One-Click Fill",
        description:
          "Map extracted data to standard form fields automatically.",
      },
      {
        title: "Custom CRM Profiles",
        description:
          "Save specific mapping templates for Salesforce or HubSpot.",
      },
      {
        title: "Secure Vault",
        description:
          "Store sensitive snippets locally with AES-256 encryption.",
      },
      {
        title: "Keyboard Shortcuts",
        description: "Execute macros entirely via keyboard commands.",
      },
    ],
    challenges: [
      {
        challenge:
          "Handling highly varied and non-standard HTML form structures.",
        solution:
          "Developed a robust heuristic engine to identify inputs based on context and attributes.",
      },
      {
        challenge: "Ensuring API keys and user data remained secure.",
        solution:
          "Implemented local-only storage architectures and rigorous content security policies (CSP).",
      },
    ],
    liveUrl: "https://formfill.example.com",
    duration: "5 Months",
    client: "SaaS Automation Co.",
    year: "2024",
  },
];
