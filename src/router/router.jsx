import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyLayout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";

export const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <MyLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
            path:'/about',
            element:<AboutUs/>
        }
      ],
    },
  ]);

