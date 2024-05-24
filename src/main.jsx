import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Import Pages
import HomePage from "./pages/HomePage.jsx";
import Admin from "./pages/admin.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Reservasi from "./pages/Dashboard/Reservasi.jsx";
import User from "./pages/Dashboard/User.jsx";
import Reserve from "./pages/Reserve.jsx";
import SeeMore from "./pages/SeeMore.jsx";
import Cashier from "./pages/cashier.jsx";
import DashboardCashier from "./pages/Dashboard/Cashier.jsx";
import Menu from "./pages/Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/dashboard-home",
    element: <Dashboard />,
  },
  {
    path: "/admin/dashboard-reservasi",
    element: <Reservasi />,
  },
  {
    path: "/admin/dashboard-user",
    element: <User />,
  },
  {
    path: "/reservasi",
    element: <Reserve />,
  },
  {
    path: "/seemore",
    element: <SeeMore />,
  },
  { path: "/admin/cashier", element: <Cashier /> },
  { path: "/admin/dashboard-cashier", element: <DashboardCashier /> },
  { path: "/menu", element: <Menu /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
