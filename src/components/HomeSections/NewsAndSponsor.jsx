import bgImage from "../../assets/shapes/asset 44.jpeg"
import Image1 from "../../assets/images/asset 26.jpeg"
import Image2 from "../../assets/images/asset 27.jpeg"
import Image3 from "../../assets/images/asset 28.jpeg"

const NewsAndSponsor = () => {
    return (
        <div style={{backgroundImage: `url('${bgImage}')`}} className="h-screen bg-cover flex flex-col bg-no-repeat bg-center overflow-hidden py-10 px-10">
            <div className="">
            <p className="my-4 text-lg text-gray-400 font-semibold uppercase tracking-widest">
        Only professional here
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">Recent News</h2>
        <div className="grid grid-cols-1 md: grid-cols-3 gap-3 mt-10">
        <div className="card card-compact bg-base-100 shadow-xl rounded">
  <figure className="overflow-hidden"><img className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" src={Image1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
    <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate omnis ad minus distinctio porro.</p>
    <p className="text-gray-500 mt-5 pb-10">July 19, 2023 - John Doe</p>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl rounded">
  <figure className="overflow-hidden"><img className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" src={Image2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
    <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate omnis ad minus distinctio porro.</p>
    <p className="text-gray-500 mt-5 pb-10">July 19, 2023 - John Doe</p>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl rounded">
  <figure className="overflow-hidden"><img className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50" src={Image3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
    <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate omnis ad minus distinctio porro.</p>
    <p className="text-gray-500 mt-5 pb-10">July 19, 2023 - John Doe</p>
  </div>
</div>
        </div>
            </div>
        </div>
    );
};

export default NewsAndSponsor;