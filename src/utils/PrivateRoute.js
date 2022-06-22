import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import LocalStorageService from 'services/LocalStorageService';

// eslint-disable-next-line @typescript-eslint/naming-convention
const PrivateRoute = () => {
  const auth = LocalStorageService.getValue('token');

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
