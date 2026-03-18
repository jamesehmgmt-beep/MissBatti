import { Link } from "react-router-dom";
export const CategoryButtons = () => {
  return <section className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Give your body all it needs.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Seamless smoothing and supportive compression that disappears under anything.</p>
          <Link to="/category/shapewear" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop Shapewear</Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Elevated essentials, on repeat.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Soft, clean staples designed to fit right and wear even better—day to night.</p>
          <Link to="/apparel" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop Apparel </Link>
        </div>
      </div>
    </section>;
};