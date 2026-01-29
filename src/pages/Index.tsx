import AnnouncementBanner from "@/components/landing/AnnouncementBanner";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProductCards from "@/components/landing/ProductCards";
import FeatureSection from "@/components/landing/FeatureSection";
import MarqueeSection from "@/components/landing/MarqueeSection";
import DeveloperSection from "@/components/landing/DeveloperSection";
import StatsSection from "@/components/landing/StatsSection";
import WhatsNewSection from "@/components/landing/WhatsNewSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import ImpactSection from "@/components/landing/ImpactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Navigation - positioned over hero */}
      <div className="gradient-hero">
        <Navbar />
        <HeroSection />
      </div>

      {/* Product Cards Section */}
      <ProductCards />

      {/* What's New Section */}
      <WhatsNewSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Feature Highlight Sections */}
      <FeatureSection />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Infinite Marquee Section */}
      <MarqueeSection />

      {/* Developer / API Showcase */}
      <DeveloperSection />

      {/* Stats / Trust Section */}
      <StatsSection />

      {/* Large Multi-column Footer */}
      <Footer />
    </div>
  );
};

export default Index;
