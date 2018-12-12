import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CommonLink.module.css';

const MenuLink = ({ href, children, className }) => (
  <Link
    to={href}
    className={classNames(styles.link, { [styles.blackLink]: className === 'blackLink' },
      { [styles.navLink]: className === 'navLink' }, { [styles.paginationLink]: className === 'paginationLink' })}
  >
    {children}
  </Link>
);

MenuLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

MenuLink.defaultProps = {
  href: '',
  className: 'link',
};

export default MenuLink;
