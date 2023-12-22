import { LuLogOut } from "react-icons/lu";
import { FaGalacticRepublic } from "react-icons/fa6";
import { FaHome, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Drawer = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOutUser();
    navigate("/");
    toast.success("User logged out");
  };

  return (
    <div className="drawer-side ">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <img className="rounded-full h-28 w-28 mx-auto" src={user?.photoURL} />
        <p className="divider">Dashboard</p>
        <li>
          <Link to="/dashboard">
            <FaHome></FaHome>
            Dashboard
          </Link>
        </li>
        <li>
          <NavLink to="/dashboard/todolist">
            <FaGalacticRepublic />
            To-do List
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addtodo">
            <FaPlus />
            Add To-do
          </NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/">
            <FaHome></FaHome>
            Home
          </NavLink>
        </li>
        <li>
          <button onClick={handleLogOut}>
            <LuLogOut /> Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
