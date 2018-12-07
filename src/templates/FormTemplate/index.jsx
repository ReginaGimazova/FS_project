import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormTemplate.module.css';

const FormTemplate = ({ children }) => (
  <div className={styles.formTemplate}>
    {children}
  </div>
);
export default FormTemplate;

FormTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
