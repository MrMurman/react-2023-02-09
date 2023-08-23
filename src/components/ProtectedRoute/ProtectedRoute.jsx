import React from "react";
import { Navigate, Route } from "react-router-dom";

export const ProtectedRoute = ({ to, element }) => {
  return <Route to={to} element={isAuthorized ? element : <Navigate />} />;
};

// tldr this route checks auth, if not found it redirects somewhere
