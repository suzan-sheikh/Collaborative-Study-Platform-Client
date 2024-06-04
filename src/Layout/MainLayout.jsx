import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className="mt-16">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;