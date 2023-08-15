import React from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function RouteProtected({ children }) {
  const { loggedIn } = React.useContext(CurrentUserContext);
  return loggedIn ? children : <Navigate to="/signin" replace />;
}
