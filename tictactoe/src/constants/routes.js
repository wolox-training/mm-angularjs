import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from './../app/screens/Login';
import Game from './../app/screens/Game';

const routes = (
  <Router>
    <Fragment>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/" render={() => <Redirect to="/Login" />} />
      <Route exact path="/TicTacToe" component={Game} />
    </Fragment>
  </Router>
);

export default routes;
