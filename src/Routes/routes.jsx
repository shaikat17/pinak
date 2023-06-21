import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    },
  ]);