/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MarvelCard from '../../molecules/MarvelCard';
import styles from './MarvelGallery.module.css';

const MarvelGallery = ({ children }) => (
  <div className={styles.mrvGallery}>
    {children.map((child, i) => (<MarvelCard key={i}>{child}</MarvelCard>))}
  </div>
);

MarvelGallery.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MarvelGallery;
