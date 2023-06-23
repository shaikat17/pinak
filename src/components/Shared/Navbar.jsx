import { Link } from "react-router-dom";

const Navbar = () => {
    const menu = <>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to='/'>Home</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to=''>Products</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to=''>About</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to='/contact-us'>Contacts</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to='/blog'>Blog</Link></li>
            <li className="text-gray-500 hover:text-black transition duration-300"><Link to='/gallery'>Gallery</Link></li>
    </>
    return (
        <div >
           <div className="navbar bg-base-100 py-8 px-8 lg:px-28">
    <div className="navbar-start">
    <a className="text-3xl">Pinak Lab</a>
    </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
        {menu}
      </ul>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex px-1 gap-7 text-lg">
      {menu}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;