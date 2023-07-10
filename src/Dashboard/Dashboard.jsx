import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUsers, FaEnvelope, FaHome, FaSignOutAlt, FaUserEdit, FaImages,  } from "react-icons/fa";
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// assets
import Pinak_logo from "../assets/dashboard/pinak_logo.png";
import sideBar_controler from "../assets/dashboard/control.png";
import { useGlobalContext } from "../context/AppAuthContext";

const Dashboard = () => {
  const { logOut, loading } = useGlobalContext()
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", link: "/dashboard", src: <AiFillDashboard size={26} color="white" /> },
    { title: "Home", link: "/", src: <FaHome size={26} color="white" /> },
    { title: "Edit Profile", link: "/dashboard/edit-information", src: <FaUserEdit size={26} color="white" /> },
    { title: "Inbox", src: <FaEnvelope size={24} color="white" /> },
    { title: "Users", link: "/dashboard/alluser", src: <FaUsers size={25} color="white" />, gap: true },
    { title: "Gallery ", link: "/dashboard/gallery" , src: <FaImages size={24} color="white" /> },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: <AiFillSetting size={24} color="white" /> },
  ];

  return (
    <div className="flex">
      <div className={` ${open ? "w-72" : "w-20 "}`}>
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-violet-900 p-5 h-full z-50 pt-8 fixed overflow-y-scroll duration-300`}
        >
          <img
            src={sideBar_controler}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <Link to="/">
              <img
                src={Pinak_logo}
                className={`cursor-pointer duration-500 w-20 ${
                  open && "rotate-[360deg]"
                }`}
              />
            </Link>
            <h1
              className={`text-white font-black origin-left text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Pinak Lab
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <Link to={Menu.link} className="flex items-center gap-3">
                  {Menu.src}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
            <button className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4" onClick={() => {
              logOut().then((res) => console.log("logout"));
              localStorage.removeItem('userEmail')
            }}><FaSignOutAlt size={26} color="white" /> <span className={`${!open && "hidden"} origin-left duration-200`}>Signout</span></button>
          </ul>
        </div>
      </div>
      <ToastContainer />
      <Outlet />
    </div>
  );
};
export default Dashboard;
