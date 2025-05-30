import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
