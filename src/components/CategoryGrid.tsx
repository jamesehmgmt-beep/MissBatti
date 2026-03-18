import { Link } from "react-router-dom";
import braImage from "@/assets/bra.png";
import bodysuitImage from "@/assets/bodysuit.png";
import shortsImage from "@/assets/shorts.png";

export const CategoryGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
        {/* Bestsellers */}
        <Link
          to="/category/shapewear"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src="https://cdn.shopify.com/s/files/1/0650/1629/9579/files/a0aca61a-af25-400e-b88e-2295e6bcea10_0.jpg?v=1766718341" 
            alt="Bestsellers"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Bestsellers
            </span>
          </div>
        </Link>

        {/* Bra's */}
        <Link
          to="/product/batti©-posturefix"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={braImage} 
            alt="Bra's"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Bra's
            </span>
          </div>
        </Link>

        {/* Bodysuits */}
        <Link
          to="/category/bodysuits"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={bodysuitImage} 
            alt="Bodysuits"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Bodysuits
            </span>
          </div>
        </Link>

        {/* Shorts */}
        <Link
          to="/category/shorts"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={shortsImage} 
            alt="Shorts"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Shorts
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};
