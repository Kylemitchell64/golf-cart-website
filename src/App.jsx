import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import MobileTopBar from "./components/layout/MobileTopBar";
import FloatingButtons from "./components/layout/FloatingButtons";
import Footer from "./components/layout/Footer";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 min-w-0 lg:pl-16 flex flex-col">
        <MobileTopBar />
        <main className="flex-1 pt-14 lg:pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
}
