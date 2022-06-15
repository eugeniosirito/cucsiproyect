import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'scss/application.scss';
import Home from 'screens/Home/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign_up">
          <Home />
        </Route>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
