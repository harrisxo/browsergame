import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "./contexts/user-context";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/home/home.component";
import Login from "./pages/login/login.component.";
import Register from "./pages/register/register.component";

import { isTokenExp } from "./utils/utils";
const App = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setAuthenticatedUser } =
    useContext(Context);

  useEffect(() => {
    isTokenExp(setIsAuthenticated, setAuthenticatedUser);
  }, [setIsAuthenticated, setAuthenticatedUser]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const RequiredAuth = ({ children }) => {
    return isAuthenticated ? children : <Login />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
