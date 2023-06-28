import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import NewsAndClients from "../components/HomeSections/NewsAndClients";
import TeamEmailSection from "../components/HomeSections/TeamEmailSection";
import TestimonialSection from "../components/HomeSections/TestimonialSection";
import IncredibleLayout from "../components/IncredibleLayout/IncredibleLayout";
import PowerEliteAuthor from "../components/PowerEliteAuthor";
import PowerfulAdminPanel from "../components/PowerfulAdminPanel/PowerfulAdminPanel";
import RecentWorks from "../components/RecentWorks/RecentWorks";
import Services from "../components/Services/Services";

// Animation Package
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
    {/* react helmet async package for seo */}
    <Helmet>
        <title>Pinak Idea Private Ltd.</title>
      </Helmet>
      <Fade cascade direction="left">
      <Banner/>
      </Fade>
      <IncredibleLayout />
      <PowerEliteAuthor/>
      <Services/>
      <RecentWorks/>
      <PowerfulAdminPanel/>
      <Slide>
      <TestimonialSection />
      </Slide>
      <NewsAndClients />
      <Zoom>
      <TeamEmailSection />
      </Zoom>
    </>
  );
};

export default Home;
