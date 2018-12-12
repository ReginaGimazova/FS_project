/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftMenu.module.css';
import MenuLink from '../../atoms/CommonLink';

const LeftMenu = ({ leftMenuContent }) => (
  <aside className={styles.leftMenu}>
    {leftMenuContent.map(content => (<MenuLink className="blackLink" {...content}>{content.label}</MenuLink>))}
  </aside>
);

LeftMenu.propTypes = {
  leftMenuContent: PropTypes.array,
};
LeftMenu.defaultProps = {
  leftMenuContent: [],
};
export default LeftMenu;
