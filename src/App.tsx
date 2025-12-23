import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioCase = lazy(() => import("./pages/PortfolioCase"));
const Funds = lazy(() => import("./pages/Funds"));
const PhotoVideo = lazy(() => import("./pages/PhotoVideo"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loader = () => (
  <div className="min-h-screen bg-base text-muted flex items-center justify-center">
    <div className="glass px-6 py-4 rounded-full">Se incarca...</div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="servicii" element={<Services />} />
          <Route path="portofoliu" element={<Portfolio />} />
          <Route path="portofoliu/:slug" element={<PortfolioCase />} />
          <Route path="fonduri-europene" element={<Funds />} />
          <Route path="foto-video" element={<PhotoVideo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="politica-de-confidentialitate" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;