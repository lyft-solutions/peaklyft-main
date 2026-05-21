// utils/sectionsData.ts

export interface OnboardingCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface OnboardingSectionContent {
  title: string;
  subtitle: string;
  taglines: string[];
  desc: string;
  cards: OnboardingCard[];
  buttonText: string;
  variant?: "left" | "right"; 
}

export const onboardingSectionData: OnboardingSectionContent = {
  title: "Onboarding",
  subtitle: "Get new hires up to speed faster",
  taglines: ["Account Executive", "Sales Manager", "Sales Director"],
  desc: "Identify skill gaps in your salesforce to design focused training programs. Align development efforts with your revenue goals.",

  buttonText: "Explore all solutions",

  cards: [
    {
      id: 1,
      title: "Accelerate Onboarding for Bank Relationship Managers",
      description: "Loan Advisors",
      image: "/slider.png",
    },
    {
      id: 2,
      title: "Onboarding for High-Impact Loan Advisors",
      description: "Wealth Associates",
      image: "/slider.png",
    },
    {
      id: 3,
      title: "New hire induction program for wealth associates",
      description: "Sales Executives",
      image: "/slider.png",
    },
    {
      id: 4,
      title: "Power Packed Self-Paced Onboarding for Home Finance",
      description: "Field Managers",
      image: "/slider.png",
    },
  ],
};

export const onboardingSection: OnboardingSectionContent = {
  title: "Learning Need Analysis",
  subtitle: "Identify gaps for targeted growth",
  taglines: ["Account Executive", "Sales Manager", "Sales Director"],
  desc: "Boost sales efficiency and close rates with advanced tools and techniques. Equip your team to achieve more in less time.",

  buttonText: "Explore all solutions",

  cards: [
    {
      id: 1,
      title: "Accelerate Onboarding for Bank Relationship Managers",
      description: "Loan Advisors",
      image: "/slider.png",
    },
    {
      id: 2,
      title: "Onboarding for High-Impact Loan Advisors",
      description: "Wealth Associates",
      image: "/slider.png",
    },
    {
      id: 3,
      title: "New hire induction program for wealth associates",
      description: "Sales Executives",
      image: "/slider.png",
    },
    {
      id: 4,
      title: "Power Packed Self-Paced Onboarding for Home Finance",
      description: "Field Managers",
      image: "/slider.png",
    },
  ],
};
