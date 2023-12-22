import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import TodoList from "../pages/Dashboard/TodoList/TodoList";
import WhyUs from "../pages/WhyUs/WhyUs";
import AddTodo from "../pages/Dashboard/AddTodo/AddTodo";
import UpdateTodo from "../pages/Dashboard/UpdateTodo/UpdateTodo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "whyus",
        element: <WhyUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "todolist",
        element: <TodoList />,
      },
      {
        path: "addtodo",
        element: <AddTodo />,
      },
      {
        path: "updatetodo/:id",
        element: <UpdateTodo />,
      },
    ],
  },
]);
