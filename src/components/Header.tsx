import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "./CartDrawer";
import battiLogo from "@/assets/batti-logo.webp";
import { useAuth } from "@/hooks/useAuth";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const mainNavItems = [
  { title: "BEST SELLER", link: "/category/best-seller" },
  { title: "THE SET", link: "/category/the-set" },
  { title: "PREMIUM", link: "/category/premium" },
];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const handleAccountClick = () => {
    if (user) {
      navigate("/account");
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        isScrolled
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-secondary/95 backdrop-blur-sm shadow-lg rounded-full px-4 lg:px-8 mx-auto max-w-[1800px]">
        <nav className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - Left */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-foreground hover:opacity-70 transition-opacity p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.link}
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Left Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="text-sm font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={battiLogo} alt="MissBatti" className="h-[90px] lg:h-[118px] w-auto mt-2" />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button 
              onClick={handleAccountClick}
              className="text-foreground hover:opacity-70 transition-opacity"
            >
              <User className={`w-5 h-5 ${user ? 'fill-foreground' : ''}`} />
            </button>
            <CartDrawer>
              <button className="relative text-foreground hover:opacity-70 transition-opacity">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </CartDrawer>
          </div>
        </nav>
      </div>
    </header>
  );
};