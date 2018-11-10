import React from 'react';
import CardList from './CardList';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu'
import styles from './PageContent.module.css';
import links from '../data/label'
import articles from '../data/articles'

const PageContent = () => (
    <div className={styles.content}>
        <LeftMenu leftMenuContent = {links}/>
        <CardList>{articles}</CardList>
        <RightMenu />
    </div>
);

export default PageContent;
