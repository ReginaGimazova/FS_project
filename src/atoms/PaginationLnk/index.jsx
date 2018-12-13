import React from 'react';
import PropTypes from 'prop-types';
import CommonLink from '../CommonLink';
import styles from './PaginationLink.module.css';

const PaginationLink = ({ to, children, className }) => (
  <div className={styles.pageLink}>
    <CommonLink href={to} className={className}>{children}</CommonLink>
  </div>
);

PaginationLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};
PaginationLink.defaultProps = {
  to: '',
  children: PropTypes.number,
  className: 'pageLink',
};
export default PaginationLink;
