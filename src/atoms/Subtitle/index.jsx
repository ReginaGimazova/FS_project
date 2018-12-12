import React from 'react';
import PropTypes from 'prop-types';
import styles from './Subtitle.module.css';

const Subtitle = ({ children }) => (
  <h4 className={styles.subtitle}>{children}</h4>
);
Subtitle.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Subtitle;
