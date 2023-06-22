// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import image from "../../assets/images/asset 25.jpeg";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-gradient-to-b from-[#F9F9F9] to-white my-20">
      <div className="w-full md:w-2/4 p-10 pt-20">
        <h6 className="text-gray-400 tracking-widest uppercase">
          What they say
        </h6>
        <h3 className="text-[#606480] text-4xl mt-4 mb-10">Testimonial</h3>

        <div className="mx-auto w-full text-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum placeat ullam obcaecati perspiciatis sed doloremque minima doloribus ut porro. Laboriosam, et!
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Lorem, ipsum dolor. <span>Lorem ipsum dolor sit.s</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quisquam harum deleniti repellendus soluta, modi officiis eos totam ipsum adipisci iure corporis incidunt? Iste fugit accusantium deleniti eos?
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
                    alt="sq-sample24"
                  />
                  <h5>
                    Lorem, ipsum dolor.n<span>Lorem ipsum dolor sit.s</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, beatae? Exercitationem commodi explicabo sit necessitatibus. Quas pariatur nemo amet.
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                    alt="sq-sample29"
                  />
                  <h5>
                    Lorem, ipsum dolor.<span> Lorem ipsum dolor sit.</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta dolorem accusantium dignissimos. Molestias animi dolor laudantium placeat nobis cum porro voluptatum accusantium.
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Lorem, ipsum dolor. <span>Lorem ipsum dolor sit.s</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className="snip1192">
                <blockquote>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio magni iusto, pariatur quam accusantium, nulla rem obcaecati minus illum quis ea possimus!
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
                    alt="sq-sample24"
                  />
                  <h5>
                    Lorem, ipsum dolor.n<span>Lorem ipsum dolor sit.s</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quae distinctio ipsam molestias iusto vel, aspernatur officiis doloremque cum deserunt.
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                    alt="sq-sample29"
                  />
                  <h5>
                    Lorem, ipsum dolor.<span> Lorem ipsum dolor sit.</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatum? Delectus ipsam corrupti quae consequatur quidem consectetur ullam?
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Lorem, ipsum dolor. <span>Lorem ipsum dolor sit.s</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim maiores voluptatum vitae tempora vel fuga odit ipsa dignissimos provident.
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
                    alt="sq-sample24"
                  />
                  <h5>
                    Lorem, ipsum dolor.n<span>Lorem ipsum dolor sit.s</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className="snip1192">
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis expedita consequuntur dolorem? Laborum ex voluptates, sequi iusto est aliquid reprehenderit culpa provident laboriosam perspiciatis?
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                    alt="sq-sample29"
                  />
                  <h5>
                    Lorem, ipsum dolor.<span> Lorem ipsum dolor sit.</span>
                  </h5>
                </div>
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full md:w-2/4">
        <img className="2-full" src={image} alt="testimonial" />
      </div>
    </div>
  );
};

export default TestimonialSection;
