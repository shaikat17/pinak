// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const TeamMemberSlider = () => {
  return (
    <div className="w-5/6 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
            <div
              className="h-68 object-fill rounded-t text-center overflow-hidden"
            >
              <img className="" src="https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
              <div className="">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Yahya R. Makarim
                </a>
                <p className="text-sm text-gray-600">CEO & President</p>
                <p className="text-gray-500 text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="my-4 flex space-x-4">
                  <FaFacebook size={"1.5rem"} />
                  <FaTwitter size={"1.5rem"} />
                  <FaInstagram size={"1.5rem"} />
                  <FaLinkedinIn size={"1.5rem"} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
          <div
              className="h-68 object-fill rounded-t text-center overflow-hidden"
            >
              <img className="" src="https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
              <div className="">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Yahya R. Makarim
                </a>
                <p className="text-sm text-gray-600">CEO & President</p>
                <p className="text-gray-500 text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="my-4 flex space-x-4">
                  <FaFacebook size={"1.5rem"} />
                  <FaTwitter size={"1.5rem"} />
                  <FaInstagram size={"1.5rem"} />
                  <FaLinkedinIn size={"1.5rem"} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
          <div
              className="h-68 object-fill rounded-t text-center overflow-hidden"
            >
              <img className="" src="https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
              <div className="">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Yahya R. Makarim
                </a>
                <p className="text-sm text-gray-600">CEO & President</p>
                <p className="text-gray-500 text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="my-4 flex space-x-4">
                  <FaFacebook size={"1.5rem"} />
                  <FaTwitter size={"1.5rem"} />
                  <FaInstagram size={"1.5rem"} />
                  <FaLinkedinIn size={"1.5rem"} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
          <div
              className="h-68 object-fill rounded-t text-center overflow-hidden"
            >
              <img className="" src="https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
              <div className="">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Yahya R. Makarim
                </a>
                <p className="text-sm text-gray-600">CEO & President</p>
                <p className="text-gray-500 text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="my-4 flex space-x-4">
                  <FaFacebook size={"1.5rem"} />
                  <FaTwitter size={"1.5rem"} />
                  <FaInstagram size={"1.5rem"} />
                  <FaLinkedinIn size={"1.5rem"} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamMemberSlider;
