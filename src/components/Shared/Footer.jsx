import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="pt-10 bg-[#F7F7F7]">
      <div className="px-10 md:px-16 flex flex-col sm:flex-row gap-5 justify-center">
        <div className="w-full md:w-1/4">
          <h3 className="text-4xl font-black">Pinak</h3>
          <p className="mt-10 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            doloremque, nam veritatis, soluta eveniet quasi ut totam fugit
            officiis laudantium, necessitatibus repudiandae eius ab sint quos
            voluptatum eum debitis recusandae?
          </p>
        </div>
        <div className="w-full md:w-1/4">
        <h5 className="text-xl font-semibold mb-10">Contact Us</h5>
          <p className="text-gray-500">Lorem, ipsum dolor.</p>
          <p className="text-gray-500">Lorem ipsum dolor sit.</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="mt-5 text-blue-500">+91-XXXX-XXXXXX</p>
          <p className="text-blue-500">admin@testmail.text</p>
        </div>
        <div className="w-full md:w-1/4 flex gap-2 flex-col">
        <h5 className="text-xl font-semibold mb-10">Hot Links</h5>
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500">Frequently Asked Question</Link>
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500">Story About Us</Link>
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500">Our Works</Link>
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500">Service We Provide</Link>
        </div>
        <div className="w-full md:w-1/4">
          <h5 className="text-xl font-semibold mb-10">Follow Us</h5>
          <div className="flex gap-4 ">
            <Link><FaFacebookF /></Link>
            <Link><FaTwitter /></Link>
            <Link><FaLinkedinIn /></Link>
            <Link><FaPinterest /></Link>
            <Link><FaInstagram /></Link>
          </div>
        </div>
      </div>
      <div className="flex space-y-4 sm:space-y-0 flex-col sm:flex-row justify-between bg-[#EDEDED] px-16 pb-10 pt-8 mt-20">
        <div>
          <p className="text-gray-500">&copy; 2023, Pinak. All Right Reserved.</p>
        </div>
        <div className="flex gap-5">
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500 text-black" to="/">Home</Link>
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500 text-black" to="#">About</Link>
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500 text-black" to="#">News</Link>
          <Link className="hover:text-blue-500 hover:transition-all hover:duration-300 transition-all duration-300 text-gray-500 text-black" to="#">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
