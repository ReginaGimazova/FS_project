import React from 'react';
import PropTypes from 'prop-types';
import CommonLink from '../CommonLink';
import styles from './PaginationLink.module.css';

const PaginationLink = ({ href, children }) => (
  <div className={styles.pageLink}>
    <CommonLink href={href} className="paginationLink">{children}</CommonLink>
  </div>
);

PaginationLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.element.isRequired,
};
PaginationLink.defaultProps = {
  href: '',
};
export default PaginationLink;
