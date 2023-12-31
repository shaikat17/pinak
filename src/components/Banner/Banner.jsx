import bannerImg from "../../assets/shapes/asset 5.png";
import videoIcon from "../../assets/icons/asset 2.png";
import BannerCards from "../BannerCards/BannerCards";

import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* Modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal h-screen">
        <div className="modal-box h-4/5">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9xwazD5SyVg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>

      {/* remaining section */}
      <div className="banner overflow-hidden">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse !min-w-full p-8 lg:pl-28 lg:pr-20">
            {/* Banner Image */}

            <img src={bannerImg} className="hidden lg:block mt-36" />

            {/* Banner Text Container */}

            <div className="">
              <div className="flex gap-2 mb-10">
                <hr
                  style={{
                    border: "3px solid silver",
                    width: "30px",
                    borderRadius: "3px",
                  }}
                />
                <hr
                  style={{
                    border: "3px solid silver",
                    width: "180px",
                    borderRadius: "3px",
                  }}
                />
              </div>
              <h2 className="text-xl lg:text-4xl text-red-500 font-serif mb-5">
                Lorem ipsum dolor sit amet.
              </h2>
              <h1 className="text-3xl lg:text-6xl font-semibold font-serif text-black">
                Lorem, ipsum dolor.
              </h1>
              <p className="py-6 lg:pr-20 text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit quas quos, minima eligendi esse quam sed aliquid
                possimus iste illum!
              </p>
              <div className="flex items-center gap-5 lg:gap-10 mt-6">
                <Link to="/about-us" className="bg-gradient-to-r from-yellow-300 to-orange-500 flex items-center justify-center text-white font-serif w-28 h-10 lg:w-40 lg:h-14 rounded-sm">
                  Learn More
                </Link>
                {/* The button to open modal */}
                <label
                  htmlFor="my_modal_7"
                  className="flex items-center gap-4 text-[#3646a6] font-serif cursor-pointer"
                >
                  <img src={videoIcon} alt="" /> Video Introduction
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Banner bottom cards */}

        <div className="mt-14">
          <BannerCards />
        </div>
      </div>
    </>
  );
};

export default Banner;
