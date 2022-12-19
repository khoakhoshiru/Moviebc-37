import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

//HOC : tai sd logic cac component
const AppRoute = ({ path, component: Comp, isPrivate, isAuth }) => {
  const token = localStorage.getItem("token");
  const profile = useSelector(state => state.user?.profile);

  if (isPrivate) {
    if (token) return <Route path={path} element={<Comp />} />;
    return <Navigate to="/login" replace />;
  }
  if (isAuth) {
    if (!profile) return <Comp />;
    return <Navigate to="/" replace />;
  }
  return <Comp />;
};

export default AppRoute;
