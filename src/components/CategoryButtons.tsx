import { Link } from "react-router-dom";
export const CategoryButtons = () => {
  return <section className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Give your nails all they deserve.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Premium press-on nails that look and feel like a salon manicure — ready in minutes.</p>
          <Link to="/category/the-set" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop The Set</Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Elevated nail art, on repeat.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Luxury designs crafted for every mood and occasion — from classic to bold.</p>
          <Link to="/category/premium" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop Premium</Link>
        </div>
      </div>
    </section>;
};