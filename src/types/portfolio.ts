export type PortfolioCategory =
  | "web-development"
  | "app-development"
  | "blockchain"
  | "extensions";

export interface TechStack {
  name: string;
  icon?: string; // optional icon URL or name
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  category: PortfolioCategory;
  title: string;
  shortDescription: string;
  overview: string;
  thumbnailImage: string; // shown on card
  mockupImage: string; // shown on detail hero
  images: ProjectImage[]; // gallery
  techStack: TechStack[];
  keyFeatures: KeyFeature[];
  challenges: Challenge[];
  liveUrl?: string;
  duration?: string;
  client?: string;
  year?: string;
}
