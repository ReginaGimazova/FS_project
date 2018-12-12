import React from 'react';
import PropTypes from 'prop-types';
import CommonLink from '../CommonLink';

const PaginationPrev = ({ href }) => (
  <CommonLink href={href}>
    previous
  </CommonLink>
);
PaginationPrev.propTypes = {
  href: PropTypes.string,
};
PaginationPrev.defaultProps = {
  href: '',
};
export default PaginationPrev;
