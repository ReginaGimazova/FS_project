import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = props => (
  <Link to={props.href} className={classNames(styles.link, {[styles.leftMenuLink]: props.className})}>{props.children}</Link>
);

MenuLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default MenuLink;
