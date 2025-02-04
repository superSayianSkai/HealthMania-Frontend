import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { stillLoggedIn } = useContext(AuthContext);
  console.log(stillLoggedIn)
  const location = useLocation();

  return stillLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signIn" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
