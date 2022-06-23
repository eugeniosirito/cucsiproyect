import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import LocalStorageService from 'services/LocalStorageService';

function PrivateRoute() {
  const auth = LocalStorageService.getValue('logged');
  return auth ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateRoute;
