import React from 'react';
import Header from '../molecues/Header'
import Footer from '../molecues/Footer'
import MenuContent from "../organisms/MenuContent";
import styles from './MainTemplate.module.css';

const MainTemplate = ({children}) => (
    <div className={styles.template}>
        <Header/>
        <MenuContent>{children}</MenuContent>
        <Footer/>
    </div>
);

export default MainTemplate;