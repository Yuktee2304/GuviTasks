import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/sb-admin-2.css";
import "../src/assets/custom.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import Colors from "./Components/Colors";
import Borders from "./Components/Borders";
import Animations from "./Components/Animations";
import Other from "./Components/Other";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import Page404 from "./Components/Page404";
import Blank from "./Components/Blank";
import { Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/buttons",
        element: <Buttons />,
      },
      {
        path: "/colors",
        element: <Colors />,
      },
      {
        path: "/borders",
        element: <Borders />,
      },
      {
        path: "/animations",
        element: <Animations />,
      },
      {
        path: "/other",
        element: <Other />,
      },
      {
        path: "/page404",
        element: <Page404 />,
      },
      {
        path: "/blank",
        element: <Blank />,
      },
      {
        path: "/",
        element: <Navigate to="/dashboard" replace={true} />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
