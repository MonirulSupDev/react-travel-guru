import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loading from "../pages/Loading/Loading";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import Search from "../pages/Search/Search";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    HydrateFallback: Loading,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/destination-info.json"),
      },
      { path: "/booking", Component: Booking },
      { path: "/login", Component: Login },
      { path: "/create-account", Component: CreateAccount },
      {
        Component: PrivateRoute,
        children: [
          {
            path: "/search",
            Component: Search,
            loader: () => fetch("/stays.json"),
          },
        ],
      },
    ],
  },
]);

export default router;
