import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLink.module.css';
import {Link} from 'react-router-dom'

const MenuLink = (props) => (
    <Link to = {props.href} className={[styles.link, styles[props.className]].join(' ')}>{props.children}</Link >
);

MenuLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element.isRequired,
};

export default MenuLink;
