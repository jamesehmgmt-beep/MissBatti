import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FreeShippingBar } from "@/components/FreeShippingBar";
import { fetchProducts, formatPrice, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

// Import subcategory images
import shortsImage from "@/assets/shorts1.png";
import pantiesImage from "@/assets/panties1.png";
import jumpsuitsImage from "@/assets/jumpsuits1.png";
import bodysuitImage from "@/assets/bodysuits1.png";
import rompersImage from "@/assets/rompers1.png";

// Subcategory circles configuration
const subcategoryCircles = [
  { title: "Shorts", link: "/category/shorts", image: shortsImage },
  { title: "Panties", link: "/category/panties", image: pantiesImage },
  { title: "Jumpsuits", link: "/category/jumpsuits", image: jumpsuitsImage },
  { title: "Bodysuits", link: "/category/bodysuits", image: bodysuitImage },
  { title: "Rompers", link: "/category/romper", image: rompersImage },
];

// Category configuration
const categoryConfig: Record<string, { title: string; description: string; query?: string }> = {
  "best-seller": {
    title: "Best Sellers",
    description: "Our most loved shapewear pieces, trusted by thousands.",
    query: undefined,
  },
  "shapewear": {
    title: "All Shapewear",
    description: "Discover our complete collection of sculpting essentials.",
    query: undefined,
  },
  "shorts": {
    title: "BATTI© Shorts",
    description: "Sculpting shorts for a seamless silhouette.",
    query: "Shorts",
  },
  "panties": {
    title: "BATTI© Panties",
    description: "Shaping panties for everyday comfort.",
    query: "Panty",
  },
  "jumpsuits": {
    title: "BATTI© Jumpsuits",
    description: "Full-body sculpting jumpsuits.",
    query: "Jumpsuit",
  },
  "bodysuits": {
    title: "BATTI© Bodysuits",
    description: "Seamless bodysuits for complete control.",
    query: "Bodysuit",
  },
  "romper": {
    title: "BATTI© Rompers",
    description: "Stylish rompers with built-in shaping.",
    query: "Romper",
  },
  "why-us": {
    title: "Why Choose BATTI©?",
    description: "Quality, comfort, and confidence in every piece.",
    query: undefined,
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  const config = category ? categoryConfig[category] || { title: category.replace(/-/g, " ").toUpperCase(), description: "" } : categoryConfig["shapewear"];

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      let allProducts = await fetchProducts(50);
      
      if (config.query) {
        allProducts = allProducts.filter((p) => 
          p.node.title.toLowerCase().includes(config.query!.toLowerCase()) ||
          p.node.description?.toLowerCase().includes(config.query!.toLowerCase())
        );
      }
      
      setProducts(allProducts);
      setLoading(false);
    };
    loadProducts();
  }, [category, config.query]);

  const handleQuickAdd = (product: ShopifyProduct) => {
    const firstVariant = product.node.variants.edges[0]?.node;
    if (!firstVariant) return;

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions,
    });

    toast.success("Added to cart!", {
      description: `${product.node.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Free Shipping Bar */}
      <div className="pt-24">
        <FreeShippingBar />
      </div>

      {/* Hero Section with Title */}
      <div className="py-8 px-4 md:px-8 lg:px-16 text-center border-b border-border">
        <h1 className="text-3xl md:text-4xl font-medium mb-2">
          {config.title}
        </h1>
        {config.description && (
          <p className="text-muted-foreground">{config.description}</p>
        )}
      </div>

      {/* Subcategory Circles */}
      <div className="py-8 px-4 md:px-8 lg:px-16 border-b border-border">
        <div className="flex justify-center gap-6 md:gap-10 overflow-x-auto pb-2">
          {subcategoryCircles.map((sub) => (
            <Link
              key={sub.link}
              to={sub.link}
              className="flex flex-col items-center gap-2 group flex-shrink-0"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/50 border border-border flex items-center justify-center overflow-hidden group-hover:border-foreground transition-colors">
                <img src={sub.image} alt={sub.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-center">{sub.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-16 py-4 border-b border-border">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{config.title}</span>
        </nav>
      </div>

      {/* Products Grid */}
      <div className="px-4 md:px-8 lg:px-16 py-8">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-secondary/50 mb-4" />
                <div className="h-4 bg-secondary/50 mb-2 w-3/4" />
                <div className="h-4 bg-secondary/50 w-1/2" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">No products found in this category.</p>
            <Link to="/">
              <button className="text-sm font-medium uppercase tracking-wider underline underline-offset-4 hover:no-underline">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => {
              const firstImage = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;
              
              return (
                <div key={product.node.id} className="group">
                  <Link to={`/product/${product.node.handle}`}>
                    <div className="relative aspect-[3/4] bg-secondary/30 overflow-hidden mb-3">
                      {firstImage ? (
                        <img
                          src={firstImage.url}
                          alt={firstImage.altText || product.node.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                          No image
                        </div>
                      )}
                      
                      {/* Quick Add Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleQuickAdd(product);
                        }}
                        className="absolute bottom-3 left-3 right-3 bg-foreground text-background py-2.5 text-xs font-medium uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Quick Add
                      </button>
                    </div>
                  </Link>
                  
                  <div className="space-y-1">
                    <Link to={`/product/${product.node.handle}`}>
                      <h3 className="text-sm leading-tight hover:underline line-clamp-2">
                        {product.node.title}
                      </h3>
                    </Link>
                    <p className="text-sm font-medium">
                      {formatPrice(price.amount, price.currencyCode)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
