import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.css';

const Link = (props) => (
    <a className={[styles.link, styles[props.className]].join(' ')} href={props.href}>{props.children}</a>
);

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.element.isRequired,
};
export default Link;
