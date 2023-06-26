import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import './Team.css'
import Carousel from "react-multi-carousel";

const Team = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
            <div className="text-center">
            <h1 className="text-6xl font-bold my-20">Meet Our Team</h1>
            <h3 className="text-3xl font-bold">Lorem, ipsum dolor.</h3>
            <div className="flex justify-center mt-6">
            <hr style={{border: '1px solid gray', width: '180px', borderRadius: '3px'}} />
            </div>
        </div>

        {/* Team Member Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-8 lg:mx-28">
            <div className="mb-10">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite9-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5">
                <h3 className="text-xl mt-8 mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500 mb-5">Lorem, ipsum dolor.</p>
                <hr style={{border: '1px solid silver', width: '50px', borderRadius: '3px'}} />
                <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit debitis! Doloremque dolor expedita, eaque ullam odit non enim reprehenderit!</p>
                <div className="flex gap-3 text-[#ff5443] text-xl">
                    <FaFacebook className="hover:text-[#ff5343b9]"/>
                    <FaPinterest className="hover:text-[#ff5343b9]"/>
                    <FaTwitter className="hover:text-[#ff5343b9]"/>
                </div>
                </div>
            </div>
            <div className="mb-10">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite8-1-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5">
                <h3 className="text-xl mt-8 mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500 mb-5">Lorem, ipsum dolor.</p>
                <hr style={{border: '1px solid silver', width: '50px', borderRadius: '3px'}} />
                <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit debitis! Doloremque dolor expedita, eaque ullam odit non enim reprehenderit!</p>
                <div className="flex gap-3 text-[#ff5443] text-xl">
                    <FaFacebook className="hover:text-[#ff5343b9]"/>
                    <FaPinterest className="hover:text-[#ff5343b9]"/>
                    <FaTwitter className="hover:text-[#ff5343b9]"/>
                </div>
                </div>
            </div>
            <div className="mb-10">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite7-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5">
                <h3 className="text-xl mt-8 mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500 mb-5">Lorem, ipsum dolor.</p>
                <hr style={{border: '1px solid silver', width: '50px', borderRadius: '3px'}} />
                <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit debitis! Doloremque dolor expedita, eaque ullam odit non enim reprehenderit!</p>
                <div className="flex gap-3 text-[#ff5443] text-xl">
                    <FaFacebook className="hover:text-[#ff5343b9]"/>
                    <FaPinterest className="hover:text-[#ff5343b9]"/>
                    <FaTwitter className="hover:text-[#ff5343b9]"/>
                </div>
                </div>
            </div>
            <div className="mb-10">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite9-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5">
                <h3 className="text-xl mt-8 mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500 mb-5">Lorem, ipsum dolor.</p>
                <hr style={{border: '1px solid silver', width: '50px', borderRadius: '3px'}} />
                <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit debitis! Doloremque dolor expedita, eaque ullam odit non enim reprehenderit!</p>
                <div className="flex gap-3 text-[#ff5443] text-xl">
                    <FaFacebook className="hover:text-[#ff5343b9]"/>
                    <FaPinterest className="hover:text-[#ff5343b9]"/>
                    <FaTwitter className="hover:text-[#ff5343b9]"/>
                </div>
                </div>
            </div>
            <div className="mb-10">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite8-1-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5">
                <h3 className="text-xl mt-8 mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500 mb-5">Lorem, ipsum dolor.</p>
                <hr style={{border: '1px solid silver', width: '50px', borderRadius: '3px'}} />
                <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit debitis! Doloremque dolor expedita, eaque ullam odit non enim reprehenderit!</p>
                <div className="flex gap-3 text-[#ff5443] text-xl">
                    <FaFacebook className="hover:text-[#ff5343b9]"/>
                    <FaPinterest className="hover:text-[#ff5343b9]"/>
                    <FaTwitter className="hover:text-[#ff5343b9]"/>
                </div>
                </div>
            </div>
            <div className="mb-10">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite7-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5">
                <h3 className="text-xl mt-8 mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500 mb-5">Lorem, ipsum dolor.</p>
                <hr style={{border: '1px solid silver', width: '50px', borderRadius: '3px'}} />
                <p className="text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit debitis! Doloremque dolor expedita, eaque ullam odit non enim reprehenderit!</p>
                <div className="flex gap-3 text-[#ff5443] text-xl">
                    <FaFacebook className="hover:text-[#ff5343b9]"/>
                    <FaPinterest className="hover:text-[#ff5343b9]"/>
                    <FaTwitter className="hover:text-[#ff5343b9]"/>
                </div>
                </div>
            </div>
        </div>

        {/* Team Member Slider */}

        <div className="team-slider mt-10 py-20 px-8 lg:px-28">
            <i className="text-xl  text-gray-300 ml-5">Lorem ipsum dolor consectetur adipisicing.</i>
            <h3 className="text-3xl font-bold text-white ml-5 mt-2 mb-10" >Lorem ipsum amet consectetur.</h3>
        <Carousel responsive={responsive}>
        <div className="bg-white mx-5">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite9-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5 py-7">
                <h3 className="text-xl mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500">Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className="bg-white mx-5">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite8-1-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5 py-7">
                <h3 className="text-xl mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500">Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className="bg-white mx-5">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite7-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5 py-7">
                <h3 className="text-xl mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500">Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className="bg-white mx-5">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite9-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5 py-7">
                <h3 className="text-xl mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500">Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className="bg-white mx-5">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite8-1-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5 py-7">
                <h3 className="text-xl mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500">Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className="bg-white mx-5">
            <figure className="overflow-hidden">
                <img src="https://a6e8z9v6.stackpathcdn.com/infinite/homepages/main3/wp-content/uploads/sites/27/2016/05/psinfinite7-700x500.jpg" className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" alt="" />
                </figure>
                <div className="mx-5 py-7">
                <h3 className="text-xl mb-2 font-bold">DAVID PARKER</h3>
                <p className="text-gray-500">Lorem, ipsum dolor.</p>
                </div>
            </div>
            </Carousel>
        </div>
        </div>
    );
};

export default Team;