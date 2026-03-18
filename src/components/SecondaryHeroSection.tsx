import hero4Image from "@/assets/hero4.webp";

interface SecondaryHeroSectionProps {
  className?: string;
}

export const SecondaryHeroSection = ({ className }: SecondaryHeroSectionProps) => {
  return (
    <section className={`relative w-full overflow-hidden bg-secondary aspect-[21/9] ${className || ''}`}>
      <img 
        src={hero4Image} 
        alt="Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};
