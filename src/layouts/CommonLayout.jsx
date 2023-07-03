import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const CommonLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  if (loading) {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <HashLoader color="#36d7b7" />
        </div>
    );
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default CommonLayout;
