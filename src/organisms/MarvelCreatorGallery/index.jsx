/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MarvelCard from '../../molecules/MarvelCard';
import styles from './MarvelCreatorGallery.module.css';

const MarvelCreatorGallery = ({ children }) => (
  <div className={styles.mrvGallery}>
    {children.map(child => (
      <MarvelCard
        key={child.id}
        thumbnail={child.thumbnail}
        name={child.fullName}
        id={child.id}
        url={`/marvel/creators/${child.id}`}
      />
    ))}
  </div>
);

MarvelCreatorGallery.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MarvelCreatorGallery;
