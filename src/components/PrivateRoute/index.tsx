import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { STORAGE_VALUES } from 'constants/constantsStorageValues';
import LocalStorageService from 'services/LocalStorageService';
import { PATH_NAMES } from 'constants/constantsPaths';

function PrivateRoute() {
  const auth = LocalStorageService.getValue(STORAGE_VALUES.tokenValue);
  return auth ? <Outlet /> : <Navigate to={PATH_NAMES.login} replace />;
}

export default PrivateRoute;
