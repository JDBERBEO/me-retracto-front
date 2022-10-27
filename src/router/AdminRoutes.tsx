import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AdminRoutes = () => {
  const [isAllowed, setstate] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("admin");
    setstate(token);
  }, []);

  if (!isAllowed) return <Navigate to="/" replace />;
  return <Outlet />;
};