import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const LawyerRoutes = () => {
  const [isAllowed, setstate] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem('lawyer') || localStorage.getItem('admin');
    setstate(token);
  }, []);

  if (!isAllowed) return <Navigate to="/" replace />;
  return <Outlet />;
};
