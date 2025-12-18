// utils/blog.ts

export interface BlogPost {
  id?: string;
  image: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  slug?: string;
  featured?: boolean;
}

export const blogHeroData = {
  type: "simple",
  badge: "Blog",
  simpleTitle: "Explore, Learn, and stay informed with our blog section",
  image: "https://www.antwalk.com/wp-content/uploads/2024/05/9084-copy-1.png",
};

export const blogs: BlogPost[] = [
  {
    id: '1',
    image: "/images/A-104-2048x1152-1.png",
    category: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    date: "January 29, 2025",
    excerpt: "As businesses accelerate their digital transformation, the DevOps landscape…",
    slug: "devops-skills-2025"
  },
  {
    id: '2',
    image: "/images/image33.webp",
    category: "Uncategorized",
    title: "Turbocharging Sales for SaaS and X-Tech Companies: Leveraging Key Competencies",
    date: "January 29, 2025",
    excerpt: "In today's dynamic SaaS and X-Tech landscape, organizations face…",
    slug: "saas-sales-competencies"
  },
  {
    id: '3',
    image: "/images/image 2.jpg",
    category: "Uncategorized",
    title: "The Future of Tech: Emerging Trends in 2025",
    date: "January 30, 2025",
    excerpt: "Discover the latest trends shaping the technology landscape in 2025…",
    slug: "tech-trends-2025"
  }
];
