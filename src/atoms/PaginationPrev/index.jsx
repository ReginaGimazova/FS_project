import React from 'react';
import PropTypes from 'prop-types';
import CommonLink from '../CommonLink';

const PaginationPrev = ({ to }) => (
  <div>
    <CommonLink href={to} className="blackLink">
      previous
    </CommonLink>
  </div>
);
PaginationPrev.propTypes = {
  to: PropTypes.string,
};
PaginationPrev.defaultProps = {
  to: '',
};
export default PaginationPrev;
