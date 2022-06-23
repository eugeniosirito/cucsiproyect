import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PATH_NAMES } from 'constants/constantsPaths';
import 'scss/application.scss';
import Home from 'screens/Home/index';
import Login from 'screens/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH_NAMES.signup} element={<Home />} />
        <Route path={PATH_NAMES.login} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
