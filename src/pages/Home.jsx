import Banner from "../components/Banner";
import NewsAndSponsor from "../components/HomeSections/NewsAndClients";
import TeamEmailSection from "../components/HomeSections/TeamEmailSection";
import IncredibleLayout from "../components/IncredibleLayout/IncredibleLayout";

const Home = () => {
  return (
    <>
      <Banner />
      <IncredibleLayout/>
      <NewsAndSponsor />
      <TeamEmailSection />
    </>
  );
};

export default Home;
