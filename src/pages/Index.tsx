import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { lazy, Suspense } from "react";

// Lazy load below-the-fold components
const SecondaryHeroSection = lazy(() => import("@/components/SecondaryHeroSection").then(m => ({ default: m.SecondaryHeroSection })));
const CategoryButtons = lazy(() => import("@/components/CategoryButtons").then(m => ({ default: m.CategoryButtons })));
const CategoryGrid = lazy(() => import("@/components/CategoryGrid").then(m => ({ default: m.CategoryGrid })));
const VideoHeroSection = lazy(() => import("@/components/VideoHeroSection").then(m => ({ default: m.VideoHeroSection })));
const ShopTheLook = lazy(() => import("@/components/ShopTheLook").then(m => ({ default: m.ShopTheLook })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Above the fold — loads instantly */}
      <Header />
      <HeroSection />
      
      {/* Below the fold — lazy loaded as user scrolls */}
      <Suspense fallback={<div className="h-screen" />}>
        <SecondaryHeroSection />
        <CategoryButtons />
        <CategoryGrid />
        <VideoHeroSection />
        <ShopTheLook />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;