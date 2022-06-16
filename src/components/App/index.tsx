import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PATH_NAMES } from 'constants/constantsPaths';
import 'scss/application.scss';
import Home from 'screens/Home/index';
import Login from 'screens/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={PATH_NAMES.signup}>
          <Home />
        </Route>
        <Route path={PATH_NAMES.login}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
