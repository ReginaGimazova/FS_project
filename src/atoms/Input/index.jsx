import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = ({ error, ...rest }) => (
  <input
    className={classNames(styles.input, { [styles.error]: error })}
    {...rest}
  />
);

Input.defaultProps = {
  error: false,
};

export default Input;
