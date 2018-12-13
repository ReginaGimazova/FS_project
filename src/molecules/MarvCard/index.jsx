/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarvCard.module.css';
import Subtitle from '../../atoms/Subtitle';
import CommonLink from '../../atoms/CommonLink';

const MarvCard = ({
  name, id, url,
}) => (
  <div key={id} className={styles.marvelCard}>
    <Subtitle className="marvSub">Name of story</Subtitle>
    <CommonLink
      href={url}
      className="blackLink"
    >
      {name}
    </CommonLink>
  </div>
);

MarvCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};

MarvCard.defaultProps = {
  name: '',
  id: 0,
  url: '',
};

export default MarvCard;
