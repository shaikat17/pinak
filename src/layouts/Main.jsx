import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>            
        </div>
    );
};

export default Main;