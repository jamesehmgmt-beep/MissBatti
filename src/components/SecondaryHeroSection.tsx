import hero2Image from "@/assets/hero2.png";

interface SecondaryHeroSectionProps {
  className?: string;
}

export const SecondaryHeroSection = ({ className }: SecondaryHeroSectionProps) => {
  return (
    <section className={`relative w-full overflow-hidden bg-secondary aspect-[21/9] ${className || ''}`}>
      <img 
        src={hero2Image} 
        alt="Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};
