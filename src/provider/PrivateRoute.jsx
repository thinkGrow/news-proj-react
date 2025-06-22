import React, { use } from "react";
import AuthContext from "./AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) return <Loading></Loading>;

  // if user : return children
  if (user && user?.email) return children;
  return <Navigate to="/auth/login"></Navigate>;
  // navigate --> login
};

export default PrivateRoute;
