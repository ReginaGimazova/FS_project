import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftMenu.module.css';
import MenuLink from '../../atoms/CommonLink';

const LeftMenu = props => (
  <aside className={styles.leftMenu}>
    {props.leftMenuContent.map(content => (<MenuLink className="blackLink" {...content}>{content.label}</MenuLink>))}
  </aside>
);

LeftMenu.propTypes = {
  leftMenuContent: PropTypes.array,
};
export default LeftMenu;
