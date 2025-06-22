import React, { use } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if (loading) return <Loading></Loading>;

  // if user : return children
  if (user && user?.email) return children;
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  // navigate --> login
};

export default PrivateRoute;
