import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../Container";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  // Logout User
  const handleLogOut = async () => {
    await signOutUser();
    navigate("/");
    toast.success("User logged out!");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className="hover:text-primary hover:underline duration-300"
          to="/"
        >
          Home
        </NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink
            className="hover:text-primary hover:underline duration-300"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          className="hover:text-primary hover:underline duration-300"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-primary hover:underline duration-300"
          to="/whyus"
        >
          Why Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-primary hover:underline duration-300"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <nav className="navbar bg-base-100 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden mr-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <p className="text-3xl font-bold text-neutral-600 flex items-center">
              <span className="text-primary">Tasker</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 text-lg">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user?.email ? (
            <>
              <img className="h-10 w-10 rounded-full" src={user.photoURL} />
              <button
                onClick={handleLogOut}
                className="btn btn-secondary rounded-md"
              >
                <LuLogOut />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary rounded">
                <LuLogIn />
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
