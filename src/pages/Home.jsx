import Banner from "../components/Banner";
import NewsAndClients from "../components/HomeSections/NewsAndClients";
import TeamEmailSection from "../components/HomeSections/TeamEmailSection";
// import TestimonialSection from "../components/HomeSections/TestimonialSection";
import IncredibleLayout from "../components/IncredibleLayout/IncredibleLayout";
import PowerEliteAuthor from "../components/PowerEliteAuthor";

const Home = () => {
  return (
    <>
      <Banner />
      <IncredibleLayout />
      <PowerEliteAuthor/>
      {/* <TestimonialSection /> */}
      <NewsAndClients />
      <TeamEmailSection />
    </>
  );
};

export default Home;
