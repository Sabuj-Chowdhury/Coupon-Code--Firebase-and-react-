import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{}],
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
