import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";


const CommonLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>            
        </div>
    );
};

export default CommonLayout;