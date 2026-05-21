export type PortfolioCategory = "web" | "mobile" | "graphic";

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: PortfolioCategory;
  image: string;
  tags?: string[];
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Web Development
  {
    id: 1,
    title: "All-In",
    description:
      "Learn popular Modern Foreign Languages (MFL) and English as Additional Language (EAL). All-in offers access to a comprehensive language learning platform.",
    category: "web",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Sports Gear Swag",
    description:
      "Sports Gear Swag (SGS) believes that people deserve high-quality sports gear and an effortless style. SGS crafts elite jerseys and accessories.",
    category: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["Next.js", "Shopify", "Tailwind"],
  },
  {
    id: 3,
    title: "Mav3rik",
    description:
      "Mav3rik, a forward-thinking IT solutions provider, required a dynamic platform to showcase their case studies, team expertise, and more.",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: 4,
    title: "Candy Coin",
    description:
      "Candy Coin brings you deliciously tangy, eye-catching confectionery with a vibrant digital storefront that captures the brand's playful energy.",
    category: "web",
    image: "https://images.unsplash.com/photo-1550029402-226115b7c579?w=600&q=80",
    tags: ["React", "Firebase", "Stripe"],
  },
  {
    id: 5,
    title: "Body Drench",
    description:
      "Body Drench is a leading brand in skincare and wellness, offering premium products through an elegant and conversion-focused e-commerce experience.",
    category: "web",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    tags: ["Next.js", "Sanity CMS", "Vercel"],
  },
  {
    id: 6,
    title: "Cofax",
    description:
      "Cofax Business Systems is a premier provider of next-generation HP flow technology solutions for enterprise document management.",
    category: "web",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tags: ["WordPress", "PHP", "MySQL"],
  },

  // Mobile App Development
  {
    id: 7,
    title: "Tandem",
    description:
      "Tandem is a language learning app designed to connect users with native speakers for language exchange, helping them improve their speaking skills.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    tags: ["React Native", "Firebase", "WebRTC"],
  },
  {
    id: 8,
    title: "Troom",
    description:
      "The Troom App is a sophisticated private driver booking platform designed specifically for residents and travelers in Belgium.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
    tags: ["Flutter", "Google Maps", "Stripe"],
  },
  {
    id: 9,
    title: "We Are One",
    description:
      "World of We Are One is an immersive mobile app designed to inspire global unity, mindfulness, and emotional well-being through exploration.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    tags: ["React Native", "Redux", "Node.js"],
  },
  {
    id: 10,
    title: "QualityMind",
    description:
      "QualityMind is a mental wellness app that helps users build positive habits, track moods, and achieve mindfulness through guided meditation.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    tags: ["Swift", "Kotlin", "AWS"],
  },
  {
    id: 11,
    title: "FoodDash",
    description:
      "FoodDash delivers delicious food from your favorite restaurants right to your table. A seamlessly crafted ordering experience for foodies.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 12,
    title: "AppointPro",
    description:
      "AppointPro helps you manage your appointments efficiently with smart notifications and a seamless scheduling experience for professionals.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    tags: ["Flutter", "Firebase", "Calendly API"],
  },

  // Graphic Design
  {
    id: 13,
    title: "Ecommerce Website Landing Page",
    description:
      "A bold, conversion-optimized landing page for a large online marketplace featuring sleek product showcases and compelling CTAs.",
    category: "graphic",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    tags: ["Illustrator", "Figma"],
  },
  {
    id: 14,
    title: "Web Agency Landing Page UI Design",
    description:
      "Truly flexible digital marketing agency UI design showcasing services, case studies, and client testimonials in an engaging layout.",
    category: "graphic",
    image: "https://images.unsplash.com/photo-1611532736559-5ac5b30e2e5c?w=600&q=80",
    tags: ["Figma", "Adobe XD"],
  },
  {
    id: 15,
    title: "Dance Website Home Page",
    description:
      "A striking, editorial-style home page for a dance studio with dynamic imagery, program highlights, and event showcases.",
    category: "graphic",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&q=80",
    tags: ["Figma", "Photoshop"],
  },
  {
    id: 16,
    title: "Furniture Design Landing Page",
    description:
      "A luxurious, minimal landing page for a premium furniture brand featuring curated collections and immersive lifestyle photography.",
    category: "graphic",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    tags: ["Illustrator", "Figma"],
  },
  {
    id: 17,
    title: "Interior Design Showcase",
    description:
      "A beautifully crafted multi-page design concept for an interior design firm, highlighting portfolio projects and services.",
    category: "graphic",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    tags: ["Adobe XD", "Photoshop"],
  },
  {
    id: 18,
    title: "TravelIO App UI Design",
    description:
      "Make your travel memorable with TravelIO — a comprehensive travel booking app UI with destination discovery and itinerary planning.",
    category: "graphic",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
    tags: ["Figma", "Principle"],
  },
];

export const categories = [
  { id: "web" as PortfolioCategory, label: "Web Development" },
  { id: "mobile" as PortfolioCategory, label: "Mobile App Development" },
  { id: "graphic" as PortfolioCategory, label: "Graphic Design" },
];