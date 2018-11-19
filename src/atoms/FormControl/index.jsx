import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormControl.module.css';

const FormControl = ({ children }) => (
  <div className={styles.formControl}>
    {children}
  </div>
);

FormControl.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FormControl;
