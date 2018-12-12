import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../CommonLink';

const PaginationPrev = ({ href }) => (
  <MenuLink href={href}>
    previous
  </MenuLink>
);
PaginationPrev.propTypes = {
  href: PropTypes.string,
};
PaginationPrev.defaultProps = {
  href: '',
};
export default PaginationPrev;
