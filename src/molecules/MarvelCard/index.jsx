/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarvelCard.module.css';
import CommonLink from '../../atoms/CommonLink';

const MarvelCard = ({
  name, id, thumbnail, url,
}) => (
  <div key={id} className={styles.marvelCard}>
    <img alt="" src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`} />
    <CommonLink
      href={url}
      className="blackLink"
    >
      {name}
    </CommonLink>
  </div>
);

MarvelCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  thumbnail: PropTypes.object,
  url: PropTypes.string,
};

MarvelCard.defaultProps = {
  name: '',
  id: 0,
  url: '',
};

export default MarvelCard;
