/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MarvelCard from '../../molecules/MarvelCard';
import styles from './MarvelEventGallery.module.css';

const MarvelEventGallery = ({ children }) => (
  <div className={styles.mrvGallery}>
    {children.map(child => (
      <MarvelCard
        key={child.id}
        thumbnail={child.thumbnail}
        name={child.title}
        id={child.id}
        url={`/marvel/events/${child.id}`}
      />
    ))}
  </div>
);

MarvelEventGallery.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MarvelEventGallery;
