import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
  <button onClick={props.onclick} className={styles.btn}>{props.children}</button>
);

export default Button;
