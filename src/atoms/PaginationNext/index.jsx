import React from 'react';
import PropTypes from 'prop-types';
import CommonLink from '../CommonLink';

const PaginationNext = ({ href, currentPage }) => (
  <CommonLink href={href} currentPage={currentPage}>next</CommonLink>
);
PaginationNext.propTypes = {
  href: PropTypes.string,
  currentPage: PropTypes.number,
};
PaginationNext.defaultProps = {
  href: '',
  currentPage: 1,
};
export default PaginationNext;
