import React from 'react';
import Header from '../../molecues/Header';
import Footer from '../../molecues/Footer';
import LeftMenu from '../../organisms/LeftMenu';
import RightMenu from '../../organisms/RightMenu';
import links from '../../data/label'
import styles from './MainTemplate.module.css';

const MainTemplate = ({children}) => (
    <div className={styles.template}>
        <Header/>
        <div className={styles.container}>
            <LeftMenu leftMenuContent = {links}/>
            {children}
            <RightMenu/>
        </div>
        <Footer/>
    </div>
);

export default MainTemplate;
