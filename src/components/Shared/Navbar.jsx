import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/AppAuthContext";
import useUser from "../../hooks/useUser";

// common profile image
import commonProfile from "../../assets/images/commonProfile.png"

const Navbar = () => {
  const { user, logOut } = useGlobalContext()
  const [singleUser] = useUser()
  const menu = (
    <>
      <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/about-us"
      >
        About
      </Link>
      <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/contact-us"
      >
        Contacts
      </Link>
      <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/team"
      >
        Team
      </Link>
      <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/gallery"
      >
        Gallery
      </Link>
      <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/hirings"
      >
        Hirings
      </Link>
      {!user && <Link
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900"
        to="/login"
      >
        Login
      </Link>}
      {user && <button onClick={() => {
        logOut().then((res) => console.log("logout"));
        localStorage.removeItem('userEmail')
      }}
        className="text-gray-500 hover:text-orange-500 hover:transition-all hover:duration-900 transition duration-900 text-left"
        to="/hirings"
      >
        Logout
      </button>}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-5"
          >
            {menu}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500"
        >
          Pinak Lab
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center justify-center space-x-5">
          {menu}
        </ul>
      </div>
      <div className="navbar-end">
        {user && <div className="avatar">
          <div className="w-16 rounded-full border cursor-pointer border-orange-500">
            <Link to="/dashboard">
            <img src={singleUser?.photoUrl ? singleUser?.photoUrl : commonProfile} title={singleUser?.name} />
            </Link>
          </div>
        </div>}
      </div>
    </div>
    
  );
};

export default Navbar;
