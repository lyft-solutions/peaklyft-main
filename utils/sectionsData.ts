export interface OnboardingCard1 {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface OnboardingSectionContent1 {
  title: string;
  subtitle: string;
  taglines: string[];
  desc: string;
   points: string[];
  cards: OnboardingCard1[];
  buttonText: string;
  variant?: "left" | "right"; 
}

export const  onboardingLeft: OnboardingSectionContent1 = {
  title: "Improve Resource Utilization",
  subtitle: "Boost your team efficiency",
  taglines: ["Data Engineers", "Project Managers"],

  desc: "",

  points: [
    "Right people boost project success by 40%.",
    "Accurate skill profiles Increase productivity by 25%.",
    "Save 50% on recruitment through internal mobility.",
  ],

  buttonText: "Explore all solutions",
  variant: "left",

  cards: [
    { id: 1, title: "Advanced Endpoint Security Configuration & Management", description: "", image: "/slider.png" },
    { id: 2, title: "Advanced Offensive Security: Tools, Techniques, and Patch Management", description: "", image: "/slider.png" },
    { id: 3, title: "Azure Proficiency for Senior Data Engineers", description: "", image: "/slider.png" },
    { id: 4, title: "Building Core Skills with ECIH: IAM, Application Security", description: "", image: "/slider.png" },
  ],
};
