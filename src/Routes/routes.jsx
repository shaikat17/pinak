import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import Team from "../pages/Team/Team";
import AboutUs from "../pages/AboutUs";
import Hirings from "../components/Hirings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../Dashboard/Dashboard";
import UserProfileEdit from "../Dashboard/Pages/UserProfileEdit";
import Profile from "../Dashboard/Pages/Profile";
import PrivateRoute from "../ProtectedRoute/PrivateRoute";
import AllUser from "../Dashboard/Pages/AllUser";
import DashboardGallery from "../Dashboard/Pages/DashboardGallery";
import Gallery from "../pages/Gallery";
import RecommendPinak from "../Dashboard/Pages/RecommendPinak";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/hirings",
        element: <Hirings />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "edit-information",
        element: <UserProfileEdit />,
      },
      {
        path: "alluser",
        element: <AllUser />,
      },
      {
        path: "gallery",
        element: <DashboardGallery />,
      },
      {
        path: "recommend",
        element: <RecommendPinak />,
      },
    ],
  },
]);
