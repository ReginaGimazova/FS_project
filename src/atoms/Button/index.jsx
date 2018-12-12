/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ type, onclick, children }) => (
  <button
    type={type}
    onClick={onclick}
    className={styles.btn}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onclick: PropTypes.func,
};
Button.defaultProps = {
  type: 'button',
  onclick: undefined,
};
export default Button;
