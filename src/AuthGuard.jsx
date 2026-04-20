import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { END_POINTS } from "../src/authConstants";

const AuthGuard = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={END_POINTS.LOGIN} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
