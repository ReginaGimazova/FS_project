import React from 'react';
import PropTypes from 'prop-types';
import MarvelCard from '../../molecules/MarvelCard';
import styles from './MarvelGallery.module.css';

const MarvelGallery = ({ children }) => (
  <div className={styles.mrvGallery}>
    {children.map(character => (<MarvelCard>{character}</MarvelCard>))}
  </div>
);

MarvelGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MarvelGallery;
