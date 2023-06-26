import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import Team from "../pages/Team/Team";
import AboutUs from "../pages/AboutUs";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gallery",
          element: <Gallery />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        },
        {
          path: '/team',
          element: <Team/>
        },
        {
          
          path: "/about-us",
          element: <AboutUs />
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ]);