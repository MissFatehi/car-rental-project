import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Authenticate from "../pages/Authenticate";

const MainLayout = () => {
  return (
    <>
      <NavBar />

      <Outlet />

      <Authenticate />

      <Footer />
    </>
  );
};

export default MainLayout;