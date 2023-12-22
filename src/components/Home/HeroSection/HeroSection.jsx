import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Task Management</h1>
          <p className="mb-5">Manage your everyday tasks easily.</p>
          <Link to={user?.email ? "/dashboard" : "/login"}>
            <button className="btn btn-primary rounded">
              {`Let's Explore`}
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
