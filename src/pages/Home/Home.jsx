import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import Reviews from "../../components/Home/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tasker - Manage your tasks easily</title>
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* User Reviews */}
      <Reviews />
    </>
  );
};

export default Home;
