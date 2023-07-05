import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaEnvelope } from "react-icons/fa"
import { AiFillDashboard } from "react-icons/ai"


const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <AiFillDashboard size={26} /> },
    { title: "Inbox", src: <FaEnvelope size={24} /> },
    { title: "Users", src: <FaUsers size={25} />, gap: true },
    { title: "Schedule ", src: "Schedule" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-violet-900 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/dashboard/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/dashboard/pinak_logo.png"
            className={`cursor-pointer duration-500 w-20 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white font-black origin-left text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Pinak
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
              <Link className="flex items-center gap-3">
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Dashboard Page</h1>
      </div>
    </div>
  );
};
export default Dashboard;