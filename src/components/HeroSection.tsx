import { Link } from "react-router-dom";
import heroVideo from "@/assets/1226.mp4";
import heroVideoMobile from "@/assets/1226_mobile.mp4";

interface HeroSectionProps {
  ctaLink?: string;
}

export const HeroSection = ({ 
  ctaLink = "/category/shapewear"
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-secondary">
      {/* Video background - Desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Video background - Mobile */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src={heroVideoMobile} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 section-padding">
        <div className="text-center animate-slide-up">
          {/* Shop Now Button */}
          <Link
            to={ctaLink}
            className="inline-block px-8 py-3 bg-background text-foreground text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};