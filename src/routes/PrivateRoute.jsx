import { useContext } from "react";
import { AuthContex } from "../assets/providers/AuthContex";
import Loading from "../pages/Loading/Loading";
import { Navigate, Outlet, useLocation } from "react-router";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) {
    <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
  }
  return <Outlet />;
};

export default PrivateRoute;
