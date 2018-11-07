import React from 'react';
import MainTemplate from '../templates/MainTemplate'
import styles from './HomePage.module.css';
import articles from '../data/articles'

const HomePage = () => (
    <div className={styles.page}>
        <MainTemplate>{articles}</MainTemplate>
    </div>
);

export default HomePage;
