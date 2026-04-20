import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { END_POINTS } from "../src/authConstants";

const GuestGuard = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to={END_POINTS.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default GuestGuard;
