import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import state from "../../assets/animation/stateChange.json";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { signInUser, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const toastId = toast.loading("Login in user...");
    try {
      await signInUser(email, password);
      toast.success("Login successful", { id: toastId });
      if (location?.state) {
        navigate(`${location.state}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Login in user...");
    try {
      const res = await googleSignIn();

      const user = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        photo: res?.user?.photoURL,
      };

      await axiosPublic.post("/users", user);

      toast.success("Login successful", { id: toastId });
      if (location?.state) {
        navigate(`${location.state}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };
  return (
    <>
      <Helmet>
        <title>Tasker - Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="w-full max-w-md">
            <h1 className="text-center text-3xl md:4xl font-bold">
              {`//Login here to get access...`}
            </h1>
            <Lottie
              animationData={state}
              loop={false}
              className="object-contain hidden md:flex"
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body pb-0">
              <p className="divider">User Login</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  <LuLogIn />
                  Login
                </button>
              </div>
              <p className="mt-2">
                » Need an account?{" "}
                <Link
                  state="/"
                  to="/register"
                  className="hover:underline text-primary"
                >
                  Register here
                </Link>
                .
              </p>
            </form>
            <div className="card-body pt-0">
              <span className="divider">OR</span>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary btn-outline"
              >
                <FaGoogle /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
