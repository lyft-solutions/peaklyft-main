import { Metadata } from "next";
import PortfolioHero from "../../components/portfolio/PortfolioHero";
import PortfolioSection from "../../components/portfolio/PortfolioSection";

export const metadata: Metadata = {
  title: "Portfolio | Peaklyft Solutions",
  description:
    "Explore our latest work across Web Development, App Development, Blockchain, and Browser Extensions.",
  openGraph: {
    title: "Portfolio | Peaklyft Solutions",
    description:
      "Explore our latest work across Web Development, App Development, Blockchain, and Browser Extensions.",
    url: "https://peaklyft.com/portfolio",
    siteName: "Peaklyft Solutions",
    images: [
      {
        url: "/images/og-portfolio.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PortfolioHero />
      <PortfolioSection />
    </main>
  );
}
