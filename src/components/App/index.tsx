import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import { PATH_NAMES } from 'constants/constantsPaths';
import 'scss/application.scss';
import Home from 'screens/Home/index';
import Login from 'screens/Login';
import NavBar from 'screens/NavBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path={PATH_NAMES.navBar}>
            <NavBar />
          </Route>
          <Route path={PATH_NAMES.signup}>
            <Home />
          </Route>
          <Route path={PATH_NAMES.login}>
            <Login />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
