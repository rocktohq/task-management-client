import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/Home/HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tasker - Manage your tasks easily</title>
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* TODO: User Reviews */}
    </>
  );
};

export default Home;
