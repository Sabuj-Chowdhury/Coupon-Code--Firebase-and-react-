import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Brands from "../Pages/Brands";
import MyProfile from "../Pages/MyProfile";
import AboutDev from "../Pages/AboutDev";
import Login from "../Pages/Login";
import CouponDetails from "../Components/CouponDetails";
import Registration from "../Components/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../allcoupons.json"),
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("../allcoupons.json"),
      },
      {
        path: "/about",
        element: <AboutDev></AboutDev>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <CouponDetails></CouponDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch("../allcoupons.json");

          const data = await response.json();

          const singleData = data.find((d) => d.id == params.id);
          // console.log(singleData);

          return singleData;
        },
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1 className=" text-center text-4xl bg-red-700 text-white">
        {" "}
        Error:404, Page not found
      </h1>
    ),
  },
]);

export default router;
