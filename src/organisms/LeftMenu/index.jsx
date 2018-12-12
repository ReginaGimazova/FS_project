/* eslint-disable react/forbid-prop-types,react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftMenu.module.css';
import CommonLink from '../../atoms/CommonLink';

const LeftMenu = ({ leftMenuContent }) => (
  <aside className={styles.leftMenu}>
    {leftMenuContent.map((content, i) => (<CommonLink key={i} className="blackLink" {...content}>{content.label}</CommonLink>))}
  </aside>
);

LeftMenu.propTypes = {
  leftMenuContent: PropTypes.array,
};
LeftMenu.defaultProps = {
  leftMenuContent: [],
};
export default LeftMenu;
