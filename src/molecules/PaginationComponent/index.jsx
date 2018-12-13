/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import PaginationEllipsis from '../../atoms/PaginationEllipsis';
import styles from './PaginationComponent.module.css';
import PaginationLink from '../../atoms/PaginationLnk';

const PaginationComponent = ({ total, location, currentPage }) => (
  <div className={styles.pagination}>
    <PaginationLink
      to={`${location}?page=${currentPage - 1}`}
      className="blackPaginationLink"
    >
      prev
    </PaginationLink>

    <PaginationLink
      to={`${location}?page=1`}
      className="paginationLink"
    >
        1
    </PaginationLink>

    {currentPage >= 1 && currentPage <= 4
        && [2, 3, 4, 5].map(page => (
          <PaginationLink
            to={`${location}?page=${page}`}
            key={page}
            className="paginationLink"
          >
            {page}
          </PaginationLink>
        ))
      }
    {currentPage > 4 && (
      <PaginationEllipsis />
    )}
    {currentPage > 4 && currentPage < total - 4 && (
      [currentPage - 1, currentPage, currentPage + 1].map(page => (
        <PaginationLink
          to={`${location}/?page=${page}`}
          key={page}
          className="paginationLink"
        >
          {page}
        </PaginationLink>
      ))
    )}

    {currentPage >= total - 4 && currentPage <= total && (
      [currentPage - 4, currentPage - 3, currentPage - 2, currentPage - 1].map(page => (
        <PaginationLink
          to={`${location}?page=${page}`}
          key={page}
          className="paginationLink"
        >
          {page}
        </PaginationLink>
      ))
    )}
    {currentPage < total - 4 && (
      <PaginationEllipsis />
    )}
    <PaginationLink
      to={`${location}?page=${total}`}
      className="paginationLink"
    >
      {total}
    </PaginationLink>
    <PaginationLink
      to={`${location}?page=${currentPage + 1}`}
      className="blackPaginationLink"
    >
      next
    </PaginationLink>
  </div>
);
PaginationComponent.propTypes = {
  total: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationComponent;
