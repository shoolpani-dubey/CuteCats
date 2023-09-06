import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/home-page";
import CatDetails from "./components/cat-details-page";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./main.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:catId",
    element: <CatDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className={style.pageWrapper}>
    <RouterProvider router={router} />
  </div>
);
