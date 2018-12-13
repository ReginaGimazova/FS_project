/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MarvCard from '../../molecules/MarvCard';
import styles from './MarvelStoriesGallery.module.css';

const MarvelStoriesGallery = ({ children }) => (
  <div className={styles.mrvGallery}>
    {children.map(child => (
      <MarvCard
        key={child.id}
        name={child.title}
        id={child.id}
        url={`/marvel/stories/${child.id}`}
      />
    ))}
  </div>
);

MarvelStoriesGallery.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MarvelStoriesGallery;
