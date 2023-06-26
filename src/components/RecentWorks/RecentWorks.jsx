import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rw1 from "../../assets/images/rw1.jpg";
import rw2 from "../../assets/images/rw2.jpg";
import rw3 from "../../assets/images/rw3.jpg";
import rw4 from "../../assets/images/rw4.jpg";
import rw5 from "../../assets/images/rw5.jpg";

const RecentWorks = () => {
  const [counterOn, setCounterOn] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="mx-8 lg:mx-28">
      <div className="mb-20">
        <h4
          style={{ letterSpacing: "0.2rem" }}
          className="text-sm font-bold text-slate-300"
        >
          Lorem ipsum dolor sit.3
        </h4>
        <h1 className="text-3xl lg:text-5xl font-bold mt-3">Lorem, ipsum.</h1>
      </div>

      {/* Recent Works Cards */}

            <div>
            
            <Carousel responsive={responsive}>
            <div className=" lg:w-[400px]">
                <figure className="overflow-hidden">
                <img style={{width: '400px', height: '400px'}} src={rw1} className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50 rounded-lg" alt="" />
                </figure>
                <h3 className="text-xl font-bold text-center mt-6">Lorem, ipsum dolor.</h3>
            </div>
            <div className=" lg:w-[400px]">
                <figure className="overflow-hidden">
                <img style={{width: '400px', height: '400px'}} src={rw2} className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50 rounded-lg" alt="" />
                </figure>
                <h3 className="text-xl font-bold text-center mt-6">Lorem, ipsum dolor.</h3>
            </div>
            <div className=" lg:w-[400px]">
                <figure className="overflow-hidden">
                <img style={{width: '400px', height: '400px'}} src={rw3} className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50 rounded-lg" alt="" />
                </figure>
                <h3 className="text-xl font-bold text-center mt-6">Lorem, ipsum dolor.</h3>
            </div>
            <div className=" lg:w-[400px]">
                <figure className="overflow-hidden">
                <img style={{width: '400px', height: '400px'}} src={rw4} className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50 rounded-lg" alt="" />
                </figure>
                <h3 className="text-xl font-bold text-center mt-6">Lorem, ipsum dolor.</h3>
            </div>
            <div className=" lg:w-[400px]">
                <figure className="overflow-hidden">
                <img style={{width: '400px', height: '400px'}} src={rw5} className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50 rounded-lg" alt="" />
                </figure>
                <h3 className="text-xl font-bold text-center mt-6">Lorem, ipsum dolor.</h3>
            </div>
            </Carousel>
            </div>

      {/* Scroll Counters */}
      <ScrollTrigger onEnter={() => setCounterOn(true)}>
        {/* <div className="flex justify-around my-28 text-center"> */}
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center my-10 lg:my-20">
          <div className="flex flex-col mb-3 md:mb-0">
              {counterOn && (
                <h2 className="text-3xl md:text-5xl font-bold text-[#ff5443]">
                  <CountUp start={0} end={99} duration={2} delay={0} />%
                </h2>
              )}
              <p className="lg:text-lg mt-5 text-slate-500">
                Lorem, ipsum dolor.
              </p>
          </div>
          <div className="flex flex-col mb-3 md:mb-0">
              {counterOn && (
                <h2 className="text-3xl md:text-5xl font-bold text-[#ff5443]">
                  <CountUp start={0} end={342} duration={2} delay={0} />+
                </h2>
              )}
              <p className="lg:text-lg mt-5 text-slate-500">
                Lorem, ipsum dolor.
              </p>
          </div>
          <div className="flex flex-col">
              {counterOn && (
                <h2 className="text-3xl md:text-5xl font-bold text-[#ff5443]">
                  <CountUp start={0} end={24} duration={2} delay={0} />+
                </h2>
              )}
              <p className="lg:text-lg mt-5 text-slate-500">
                Lorem, ipsum dolor.
              </p>
          </div>
          <div className="flex flex-col">
              {counterOn && (
                <h2 className="text-3xl md:text-5xl font-bold text-[#ff5443]">
                  <CountUp start={0} end={22} duration={2} delay={0} />+
                </h2>
              )}
              <p className="lg:text-lg mt-5 text-slate-500">
                Lorem, ipsum dolor.
              </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default RecentWorks;
