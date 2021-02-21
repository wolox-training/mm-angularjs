import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter as Router, Route, Redirect, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';

import { browserHistory } from './../redux/store';
import Login from './screens/Login';
import Game from './screens/Game';

function App({ isLogged }) {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/TicTacToe" component={Game} />
        <Route path="/" render={() => (isLogged ? <Redirect to="/TicTacToe" /> : <Redirect to="/Login" />)} />
      </Switch>
    </Router>
  );
}

App.propTypes = {
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLogged: state.login.LoggedIn
});

export default withRouter(connect(mapStateToProps)(App));
