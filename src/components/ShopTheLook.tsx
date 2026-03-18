import f1Image from "@/assets/f1.webp";
import f2Image from "@/assets/f2.webp";
import f3Image from "@/assets/f3.webp";
import f4Image from "@/assets/f4.webp";

const lookItems = [
  { imageUrl: f1Image },
  { imageUrl: f2Image },
  { imageUrl: f3Image },
  { imageUrl: f4Image }
];

export const ShopTheLook = () => {
  return (
    <section className="section-padding py-12">
      <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 tracking-wide">Styled #MissBatti Looks</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {lookItems.map((item, index) => (
          <div key={index} className="relative aspect-[3/4] overflow-hidden">
            <img 
              src={item.imageUrl} 
              alt={`Look ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};