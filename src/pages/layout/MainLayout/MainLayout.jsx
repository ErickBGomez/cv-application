import { Outlet } from "react-router";
import Header from "../../../components/page-elements/Header/Header";
import Footer from "../../../components/page-elements/Footer/Footer";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <main>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
