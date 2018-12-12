/* eslint-disable jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React from 'react';
import styles from './Label.module.css';

const Label = ({ props, children }) => (
  <label className={styles.label} {...props}>{children}</label>
);

export default Label;
