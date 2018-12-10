import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarvelCard.module.css';
import MenuLink from '../../atoms/CommonLink/index';

const MarvelCard = ({ children }) => (
  <div key={children.id} className={styles.marvelCard}>
    <img alt="" src={`${children.thumbnail.path}/portrait_xlarge.${children.thumbnail.extension}`} />
    <MenuLink
      href={`/marvel/characters/${children.id}`}
      className="leftMenuLink"
    >
      {children.name}
    </MenuLink>
  </div>
);

MarvelCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MarvelCard;
