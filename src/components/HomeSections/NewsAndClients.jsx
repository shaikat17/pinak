import bgImage from "../../assets/shapes/asset 44.jpeg";
// import Image1 from "../../assets/images/asset 26.jpeg";
// import Image2 from "../../assets/images/asset 27.jpeg";
// import Image3 from "../../assets/images/asset 28.jpeg";

// client logos
import clientImage1 from "../../assets/images/clients/asset 29.png";
import clientImage2 from "../../assets/images/clients/asset 30.png";
import clientImage3 from "../../assets/images/clients/asset 31.png";
import clientImage4 from "../../assets/images/clients/asset 32.png";
import clientImage5 from "../../assets/images/clients/asset 33.png";

const NewsAndSponsor = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bgImage}')` }}
      className="bg-cover flex flex-col bg-no-repeat bg-center overflow-hidden py-10 px-8 lg:px-28"
    >
      <div className="">
        <p className="my-4 text-lg text-gray-400 font-semibold uppercase tracking-widest">
          Only professional here
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
          Recent News
        </h2>
        {/* News section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="card card-compact bg-base-100 shadow-xl rounded">
            <figure className="overflow-hidden">
              <img
                className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50"
                src="https://img.freepik.com/free-photo/breathtaking-shot-sunset-along-street-middle-modern-city_181624-10919.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cupiditate omnis ad minus distinctio porro.
              </p>
              <p className="text-gray-500 mt-5 pb-10">
                July 19, 2023 - John Doe
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl rounded">
            <figure className="overflow-hidden">
              <img
                className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50"
                src="https://img.freepik.com/free-photo/businessman-working-laptop_23-2147839979.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cupiditate omnis ad minus distinctio porro.
              </p>
              <p className="text-gray-500 mt-5 pb-10">
                July 19, 2023 - John Doe
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl rounded">
            <figure className="overflow-hidden">
              <img
                className="hover:scale-110 hover:transition-all hover:duration-300 transition-all duration-300 hover:brightness-50"
                src="https://img.freepik.com/free-photo/businesspeople-working-laptop-office_1098-1672.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=ais"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
              <p className="text-gray-500 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cupiditate omnis ad minus distinctio porro.
              </p>
              <p className="text-gray-500 mt-5 pb-10">
                July 19, 2023 - John Doe
              </p>
            </div>
          </div>
        </div>

        {/* shape in the middle */}
        <hr className="text-center mx-auto mt-20" style={{border: '4px solid #DBDBDB', width: '5px', height: '50px', borderRadius: '3px'}} />

        {/* client section */}
        <div className="mt-20 text-center">
          <h5 className="text-red-500 uppercase tracking-widest font-medium text-lg">
            Clients really love us
          </h5>
          <h4 className="px-10 sm:px-20 md:px-40 text-3xl mt-10">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h4>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-20">
            <div>
              <img src={clientImage1} alt="client logos" />
            </div>
            <div>
              <img src={clientImage2} alt="client logos" />
            </div>
            <div>
              <img src={clientImage3} alt="client logos" />
            </div>
            <div>
              <img src={clientImage4} alt="client logos" />
            </div>
            <div>
              <img src={clientImage5} alt="client logos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndSponsor;
