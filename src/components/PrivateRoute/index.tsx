import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import LocalStorageService from 'services/LocalStorageService';
import { STORAGE_KEYS } from 'constants/constantsLocalStorage';
import { PATH_NAMES } from 'constants/constantsPaths';

function PrivateRoute() {
  const auth = LocalStorageService.getValue(STORAGE_KEYS.token);
  return auth ? <Outlet /> : <Navigate to={PATH_NAMES.login} replace />;
}

export default PrivateRoute;
