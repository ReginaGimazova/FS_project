import React from 'react';
import Header from '../molecues/Header'
import Footer from '../molecues/Footer'
import styles from './MainTemplate.module.css';

const MainTemplate = ({children}) => (
    <div className={styles.template}>
        <Header/>
        {children}
        <Footer/>
    </div>
);

export default MainTemplate;
