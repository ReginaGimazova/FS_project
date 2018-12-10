import React from 'react';
import styles from './Subtitle.module.css';

const Subtitle = ({ children }) => (
  <h4 className={styles.subtitle}>{children}</h4>
);

export default Subtitle;
