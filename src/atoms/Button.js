import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => (
  <button onClick={props.onclick} className={styles.btn}>{props.children}</button>
);

Button.propTypes = {
  color: PropTypes.string
};

export default Button;