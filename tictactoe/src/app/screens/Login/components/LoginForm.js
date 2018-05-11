import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import renderField from './../../../components/renderField';
import { LOGIN, EMAIL, PASSWORD } from './../../../../constants/constants';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address - Example: Email@something.com';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (Number(values.password.length) < 8) {
    errors.password = 'Sorry, the password must contain at least 8 characters';
  }
  return errors;
};

const LoginForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name={EMAIL} type="email" component={renderField} label="Email" />
      <Field name={PASSWORD} type="text" component={renderField} label="Password" />
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: LOGIN,
  validate
})(LoginForm);
