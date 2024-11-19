import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
