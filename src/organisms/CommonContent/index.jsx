/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommonContent.module.css';

const CommonContent = ({ children }) => (
  <section className={styles.contentSection}>
    {children}
  </section>
);

CommonContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default CommonContent;
