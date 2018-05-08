import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

class Login extends Component {
  submit = values => {
    // Verifiy values with API
  };
  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default Login;
