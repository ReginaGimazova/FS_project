import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../molecues/Header';
import Footer from '../../molecues/Footer';
import LeftMenu from '../../organisms/LeftMenu';
import links from '../../data/label';
import styles from './MainTemplate.module.css';

const MainTemplate = ({ children }) => (
  <div className={styles.template}>
    <Header />
    <div className={styles.container}>
      <LeftMenu leftMenuContent={links} />
      {children}
    </div>
    <Footer />
  </div>
);
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplate;
