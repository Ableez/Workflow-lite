/* eslint-disable react/prop-types */
import { Navigate, Route } from "react-router-dom";
import { auth } from "../../config/firebase";

const RequireAuth = ({ element, ...rest }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={element} />;
};

export default RequireAuth;
