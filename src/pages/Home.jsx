import Banner from "../components/Banner";
import NewsAndClients from "../components/HomeSections/NewsAndClients";
import TeamEmailSection from "../components/HomeSections/TeamEmailSection";
import TestimonialSection from "../components/HomeSections/TestimonialSection";
import IncredibleLayout from "../components/IncredibleLayout/IncredibleLayout";
import PowerEliteAuthor from "../components/PowerEliteAuthor";
import RecentWorks from "../components/RecentWorks/RecentWorks";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <IncredibleLayout />
      <PowerEliteAuthor/>
      <Services/>
      <RecentWorks/>
      <TestimonialSection />
      <NewsAndClients />
      <TeamEmailSection />
    </>
  );
};

export default Home;
