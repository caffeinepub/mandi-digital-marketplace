import { useEffect, useRef, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import AboutBuyerPage from "./pages/AboutBuyerPage";
import AboutCattleFarmerPage from "./pages/AboutCattleFarmerPage";
import AboutSellerPage from "./pages/AboutSellerPage";
import AboutServiceProviderPage from "./pages/AboutServiceProviderPage";
import AuctionsPage from "./pages/AuctionsPage";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import LivestockPage from "./pages/LivestockPage";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import BuyerDashboard from "./pages/dashboards/BuyerDashboard";
import FarmDashboard from "./pages/dashboards/FarmDashboard";
import SellerDashboard from "./pages/dashboards/SellerDashboard";

export type AppPage =
  | "/"
  | "/auth"
  | "/profile"
  | "/auctions"
  | "/livestock"
  | "/dashboard/buyer"
  | "/dashboard/seller"
  | "/dashboard/farm"
  | "/dashboard/admin"
  | "/about/buyer"
  | "/about/seller"
  | "/about/cattle-farmer"
  | "/about/service-provider";

export const navigate = (page: AppPage) => {
  window.history.pushState({}, "", page);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export default function App() {
  const [path, setPath] = useState<string>(window.location.pathname);
  const [transitioning, setTransitioning] = useState(false);
  const prevPathRef = useRef(path);
  const { identity, isInitializing } = useInternetIdentity();
  const isAuthenticated =
    identity !== undefined && !identity.getPrincipal().isAnonymous();

  useEffect(() => {
    const handler = () => {
      const newPath = window.location.pathname;
      if (newPath !== prevPathRef.current) {
        setTransitioning(true);
        setTimeout(() => {
          prevPathRef.current = newPath;
          setPath(newPath);
          setTransitioning(false);
        }, 180);
      }
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  if (isInitializing) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#F4EFE3" }}
      >
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full border-4 border-[#E2D6C3]" />
            <div className="absolute inset-0 rounded-full border-4 border-[#173B2A] border-t-transparent animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">
              🐂
            </div>
          </div>
          <p className="text-[#173B2A] font-semibold">Loading Mandi...</p>
          <p className="text-[#5E6660] text-xs mt-1">
            Pakistan's Digital Livestock Marketplace
          </p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    if (path === "/auth") return <Auth />;
    if (path === "/auctions") return <AuctionsPage />;
    if (path === "/livestock") return <LivestockPage />;
    if (path === "/profile") return isAuthenticated ? <Profile /> : <Auth />;
    if (path === "/dashboard/buyer")
      return isAuthenticated ? <BuyerDashboard /> : <Auth />;
    if (path === "/dashboard/seller")
      return isAuthenticated ? <SellerDashboard /> : <Auth />;
    if (path === "/dashboard/farm")
      return isAuthenticated ? <FarmDashboard /> : <Auth />;
    if (path === "/dashboard/admin")
      return isAuthenticated ? <AdminDashboard /> : <Auth />;
    if (path === "/about/buyer") return <AboutBuyerPage />;
    if (path === "/about/seller") return <AboutSellerPage />;
    if (path === "/about/cattle-farmer") return <AboutCattleFarmerPage />;
    if (path === "/about/service-provider") return <AboutServiceProviderPage />;
    return <Landing />;
  };

  return (
    <>
      <div
        className={`transition-opacity duration-200 ${transitioning ? "opacity-0" : "opacity-100"}`}
      >
        {renderPage()}
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
}
