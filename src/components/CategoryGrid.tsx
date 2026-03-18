import { Link } from "react-router-dom";
import bestsellerImage from "@/assets/bestseller.webp";
import frenchImage from "@/assets/french.webp";
import newImage from "@/assets/new.webp";
import inspiredImage from "@/assets/inspired.webp";

export const CategoryGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
        {/* Best Seller */}
        <Link
          to="/category/best-seller"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={bestsellerImage} 
            alt="Best Seller"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Best Seller
            </span>
          </div>
        </Link>

        {/* French */}
        <Link
          to="/category/french"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={frenchImage} 
            alt="French"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              French
            </span>
          </div>
        </Link>

        {/* New Releases */}
        <Link
          to="/category/new-releases"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={newImage} 
            alt="New Releases"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              New Releases
            </span>
          </div>
        </Link>

        {/* Inspired */}
        <Link
          to="/category/inspired"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={inspiredImage} 
            alt="Inspired"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              Inspired
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};
