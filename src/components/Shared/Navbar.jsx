import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const menu = <>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to='/'>Home</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to=''>Products</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to=''>About</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to=''>Contacts</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to='/blog'>Blog</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to='/gallery'>Gallery</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-white pt-[32px] pb-[32px] px-8 lg:px-28">
  <div className="navbar-start">
    <a className="text-2xl text-orange-500 font-bold">Pinak Lab</a>
  </div>
  <div className="navbar-end bg-base-100">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <FiMenu className='text-2xl'/>
      </label>
      <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 p-2 gap-1 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex font-bold px-1 gap-8">
      {menu}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;