import React from 'react';
import PropTypes from 'prop-types';
import CommonLink from '../CommonLink';

const PaginationNext = ({ to }) => (
  <CommonLink href={to} className="blackLink">next</CommonLink>
);
PaginationNext.propTypes = {
  to: PropTypes.string,
};
PaginationNext.defaultProps = {
  to: '',
};
export default PaginationNext;
