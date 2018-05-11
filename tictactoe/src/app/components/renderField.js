import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <Fragment>
    <label>{label}</label>
    <Fragment>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </Fragment>
  </Fragment>
);

renderField.propTypes = {
  input: PropTypes.object, // Check type
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default renderField;
