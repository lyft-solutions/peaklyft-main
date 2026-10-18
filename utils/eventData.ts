// utils/eventData.ts

export interface EventItem {
  tag: string;
  image: string;
  title: string;
  description: string;
  dateText: string;
  ctaText: string;
}

export const eventsData: EventItem[] = [
  {
    tag: "On-Demand Webinar",
    image: "/business-ai.png",
    title: "Business Transformation powered by AI & the widening skills gap",
    description:
      "Discover how AI is reshaping business strategies and overcoming skill challenges.",
    dateText: "Aug 21, 08:00 PM",
    ctaText: "Watch Now",
  },
  
  {
    tag: "Live",
    image: "/ai-elevate.png",
    title: "AI Elevate: Driving Customer Centricity in Customer Success Roles",
    description:
      "Explore how AI is transforming Customer Success strategies and applications.",
    dateText: "06th SEP 07:00 PM",
    ctaText: "Register Now",
  },
   {
    tag: "On-Demand Webinar",
    image: "/cyber-ai.png",
    title: "Cyber AI: Defending the Digital Frontier",
    description:
      "Unlock the power of AI to secure your organization’s digital future.",
    dateText: "Aug 09, 09:00 PM",
    ctaText: "Watch Now",
  },
  {
    tag: "Live",
    image: "/ai-elevate.png",
    title: "AI Elevate: Driving Customer Centricity in Customer Success Roles",
    description:
      "Explore how AI is transforming Customer Success strategies and applications.",
    dateText: "06th SEP 07:00 PM",
    ctaText: "Register Now",
  },
   
];
