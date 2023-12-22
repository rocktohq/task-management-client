import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import Reviews from "../../components/Home/Reviews/Reviews";
import MobileApp from "../../components/Home/MobileApp/MobileApp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tasker - Manage your tasks easily</title>
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Mobile Application */}
      <MobileApp />

      {/* User Reviews */}
      <Reviews />
    </>
  );
};

export default Home;
