import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Pages/Homepage/Home";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import PrivetRoute from "./PrivetRoute";
import AboutUs from "../Component/AboutUs/AboutUs";
import ContactUs from "../Component/Contact/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<PrivetRoute><Home></Home></PrivetRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>
        }
      ]
    },
  ]);