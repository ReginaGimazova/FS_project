import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = ({ children }) => (
  <title className={styles.title}>{children}</title>
);

Title.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Title;
