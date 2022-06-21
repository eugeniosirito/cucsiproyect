import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/naming-convention
const PrivateRoute = () => {
  const auth = localStorage.getItem('logged');

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
