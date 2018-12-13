/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({
  type, onclick, children, className,
}) => (
  <button
    type={type}
    onClick={onclick}
    className={classNames(styles.btn, { [styles.cardButton]: className === 'cardButton' })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onclick: PropTypes.func,
  className: PropTypes.string,
};
Button.defaultProps = {
  type: 'button',
  onclick: undefined,
  className: 'btn',
};
export default Button;
