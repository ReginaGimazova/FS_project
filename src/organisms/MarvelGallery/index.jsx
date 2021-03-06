/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MarvelCard from '../../molecules/MarvelCard';
import styles from './MarvelGallery.module.css';

const MarvelGallery = ({ children }) => (
  <div className={styles.mrvGallery}>
    {children.map(child => (
      <MarvelCard
        key={child.id}
        url={`/marvel/characters/${child.id}`}
        thumbnail={child.thumbnail}
        name={child.name}
        id={child.id}
      />
    ))}
  </div>
);

MarvelGallery.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MarvelGallery;
