import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ScrollToTop } from "@/components/ScrollToTop";
import { lazy, Suspense } from "react";

// Eager load the homepage (most visited)
import Index from "./pages/Index";

// Lazy load all other routes
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ApparelPage = lazy(() => import("./pages/ApparelPage"));
const TrackOrderPage = lazy(() => import("./pages/TrackOrderPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const RewardsPage = lazy(() => import("./pages/RewardsPage"));
const DeliveryPage = lazy(() => import("./pages/DeliveryPage"));
const SizeGuidePage = lazy(() => import("./pages/SizeGuidePage"));
const ReturnsPage = lazy(() => import("./pages/ReturnsPage"));
const GiftCardsPage = lazy(() => import("./pages/GiftCardsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const SustainabilityPage = lazy(() => import("./pages/SustainabilityPage"));
const SocialPage = lazy(() => import("./pages/SocialPage"));
const PressPage = lazy(() => import("./pages/PressPage"));
const StoresPage = lazy(() => import("./pages/StoresPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:handle" element={<ProductPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/apparel" element={<ApparelPage />} />
              <Route path="/track-order" element={<TrackOrderPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/account/orders" element={<OrdersPage />} />
              <Route path="/account/wishlist" element={<WishlistPage />} />
              <Route path="/account/settings" element={<SettingsPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/delivery" element={<DeliveryPage />} />
              <Route path="/size-guide" element={<SizeGuidePage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/gift-cards" element={<GiftCardsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/team" element={<TeamPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;