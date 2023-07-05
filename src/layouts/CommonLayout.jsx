import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useGlobalContext } from "../context/AppAuthContext";

const CommonLayout = () => {
  const {loading, setLoading} = useGlobalContext()

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[]);

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
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default CommonLayout;
