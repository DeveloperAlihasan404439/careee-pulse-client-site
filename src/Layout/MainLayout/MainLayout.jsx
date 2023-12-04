import { Outlet } from "react-router-dom";
import Navber from "../../shared/Navber/Navber";
import Footer from "../../shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="dark:bg-[#1D232A]">
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;