import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm';
import { attemptLogin } from './../../../redux/login/actions';

class Login extends Component {
  submit = values => {
    this.props.dispatch(attemptLogin(values.email, values.password));
  };
  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

Login.propTypes = {
  LoggedIn: PropTypes.bool
};

const mapStateToProps = state => ({
  LoggedIn: state.login.LoggedIn
});

export default connect(mapStateToProps)(Login);
