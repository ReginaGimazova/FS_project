import React from 'react';
import {Link} from 'react-router-dom';
import styles from './PaginationLink.module.css';

const PaginationLink = props => (
  <div className={styles.pageLink}>
    <Link to={props.href}>{props.children}</Link>
  </div>
);

export default PaginationLink;
