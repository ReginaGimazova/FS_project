import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../molecules/Header';
import Footer from '../../molecules/Footer';
import LeftMenu from '../../organisms/LeftMenu';
import links from '../../data/label';
import styles from './MainTemplate.module.css';

const MainTemplate = ({ children }) => (
  <div className={styles.template}>
    <Header />
    <div className={styles.rowContainer}>
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
