import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CommonLink.module.css';

const CommonLink = ({ href, children, className }) => (
  <Link
    to={href}
    className={classNames(styles.link, { [styles.blackLink]: className === 'blackLink' },
      { [styles.navLink]: className === 'navLink' }, { [styles.paginationLink]: className === 'paginationLink' })}
  >
    {children}
  </Link>
);

CommonLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

CommonLink.defaultProps = {
  href: '',
  className: 'link',
  children: PropTypes.string,
};

export default CommonLink;
