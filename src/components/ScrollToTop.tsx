import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ttqPageView } from "@/lib/tiktokPixel";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // TikTok Pixel: track page view on every SPA route change
    ttqPageView();
  }, [pathname]);

  return null;
};
