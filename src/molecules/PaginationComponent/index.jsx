import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationComponent.module.css';

const PaginationComponent = ({ children }) => (
  <ul className={styles.pagination}>
    {children.map(page => (
      <li>{page}</li>
    ))}
  </ul>
);
PaginationComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PaginationComponent;
