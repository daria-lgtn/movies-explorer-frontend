import React from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function RouteProtected({ children }) {
  const me = React.useContext(CurrentUserContext);
  return me ? children : <Navigate to="/" replace />;
}
