import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Subtitle.module.css';

const Subtitle = ({ children, className }) => (
  <h4 className={classNames(styles.subtitle, { [styles.marvSub]: className === 'marvSub' })}>{children}</h4>
);
Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Subtitle.defaultProps = {
  className: 'subtitle',
};
export default Subtitle;
