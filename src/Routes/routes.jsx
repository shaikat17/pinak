import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";


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
        }
      ]
    },
  ]);