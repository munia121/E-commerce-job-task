import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Pages/Homepage/Home";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        }
      ]
    },
  ]);