import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const theme = pathname.startsWith("/fonduri-europene")
      ? "funds"
      : pathname.startsWith("/foto-video")
        ? "photo"
        : "core";
    root.setAttribute("data-theme", theme);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-base text-text">
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <main id="content" className="min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;