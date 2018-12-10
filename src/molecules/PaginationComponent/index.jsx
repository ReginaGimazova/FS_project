import React from 'react';
import styles from './PaginationComponent.module.css';

const PaginationComponent = props => (
  <ul className={styles.pagination}>
    {props.children.map(page => (
      <li>{page}</li>
    ))}
  </ul>
);

export default PaginationComponent;
