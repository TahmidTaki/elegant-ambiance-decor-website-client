import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const MyReviewProtected = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  useTitle("My Review");
  if (loading) {
    return (
      <div className="mt-4 w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-amber-400"></div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default MyReviewProtected;
