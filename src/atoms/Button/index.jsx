import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => (
  <button type={props.type} onClick={props.onclick} className={styles.btn}>{props.children}</button>
);

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

Button.propTypes = {
  onclick: PropTypes.func,
};
export default Button;
