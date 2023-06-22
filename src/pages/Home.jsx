import Banner from "../components/Banner";
import NewsAndClients from "../components/HomeSections/NewsAndClients";
import TeamEmailSection from "../components/HomeSections/TeamEmailSection";
import TestimonialSection from "../components/HomeSections/TestimonialSection";

const Home = () => {
  return (
    <>
      <Banner />
      <TestimonialSection />
      <NewsAndClients />
      <TeamEmailSection />
    </>
  );
};

export default Home;
