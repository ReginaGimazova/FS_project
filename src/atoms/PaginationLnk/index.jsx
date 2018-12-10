import React from 'react';
import CommonLink from '../CommonLink';
import styles from './PaginationLink.module.css';

const PaginationLink = props => (
  <div className={styles.pageLink}>
    <CommonLink href={props.href} className="paginationLink">{props.children}</CommonLink>
  </div>
);

export default PaginationLink;
