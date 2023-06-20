import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const menu = <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to=''>Products</Link></li>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>Contacts</Link></li>
            <li><Link to=''>Blog</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-end bg-base-100">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <FiMenu className='text-2xl'/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 gap-1 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
      {menu}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;