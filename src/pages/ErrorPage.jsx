import Lottie from "lottie-react";
// lottie annimation
import lottieAnnimation from "../../public/404.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
    {/* react helmet async package for seo */}
    <Helmet>
        <title>Opps!!! Page Not Found.</title>
      </Helmet>
    <div className="flex gap-10 flex-col-reverse sm:flex-row text-center p-4 w-full items-center justify-center">
      <div>
        <h1 className="text-6xl font-black">Opps!</h1>
        <h4 className="font-bold my-5 text-3xl">Something went <span className="font-black text-5xl">wrong.</span></h4>
        <p className="mb-4 text-xl">The requested page not found.</p>
        <Link
          to="/"
          className="bg-orange-500 p-2 text-white rounded font-medium"
        >
          Back to Home
        </Link>
      </div>
      <div>
        <Lottie
          className="h-full"
          animationData={lottieAnnimation}
          loop={true}
        />
        
      </div>
    </div>
    </>
  );
};

export default ErrorPage;
