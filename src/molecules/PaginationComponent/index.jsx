/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationComponent.module.css';

const PaginationComponent = ({ children }) => (
  <ul className={styles.pagination}>
    {children.map((page, i) => (
      <li key={i}>{page}</li>
    ))}
  </ul>
);
PaginationComponent.propTypes = {
  children: PropTypes.array.isRequired,
};
export default PaginationComponent;
