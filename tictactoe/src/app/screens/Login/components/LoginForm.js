import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

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

const warn = values => {
  const warnings = {};

  return warnings;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const LoginForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="text" component={renderField} label="Password" />
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

renderField.propTypes = {
  input: PropTypes.object, // Check type
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.object
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'login',
  validate,
  warn
})(LoginForm);
