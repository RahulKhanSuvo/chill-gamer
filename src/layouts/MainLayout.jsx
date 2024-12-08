import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeToggle from "../pages/ThemeToggle";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className=" min-h-screen dark:bg-[#181A1B] flex flex-col">
      <Header />
      <div className="fixed top-1/2 right-0 z-30 flex justify-end transform -translate-y-1/2">
        <ThemeToggle />
      </div>
      <main
        className={`flex-grow
        }`}
      >
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
