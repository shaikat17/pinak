import Banner from "../components/Banner/Banner";
import NewsAndClients from "../components/HomeSections/NewsAndClients";
import TeamEmailSection from "../components/HomeSections/TeamEmailSection";
import TestimonialSection from "../components/HomeSections/TestimonialSection";
import IncredibleLayout from "../components/IncredibleLayout/IncredibleLayout";
import PowerEliteAuthor from "../components/PowerEliteAuthor";
import PowerfulAdminPanel from "../components/PowerfulAdminPanel/PowerfulAdminPanel";
import RecentWorks from "../components/RecentWorks/RecentWorks";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <Banner/>
      <IncredibleLayout />
      <PowerEliteAuthor/>
      <Services/>
      <RecentWorks/>
      <PowerfulAdminPanel/>
      <TestimonialSection />
      <NewsAndClients />
      <TeamEmailSection />
    </>
  );
};

export default Home;
