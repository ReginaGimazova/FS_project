/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarvelCard.module.css';
import CommonLink from '../../atoms/CommonLink';

const MarvelCard = ({ children }) => (
  <div key={children.id} className={styles.marvelCard}>
    <img alt="" src={`${children.thumbnail.path}/portrait_xlarge.${children.thumbnail.extension}`} />
    <CommonLink
      href={`/marvel/characters/${children.id}`}
      className="blackLink"
    >
      {children.name}
    </CommonLink>
  </div>
);

MarvelCard.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MarvelCard;
