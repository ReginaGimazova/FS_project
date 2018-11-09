import React from 'react';
import CardList from './CardList';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu'
import styles from './MenuContent.module.css';
import links from '../data/label'

const MenuContent = ({children}) => (
    <div className={styles.content}>
        <LeftMenu leftMenuContent = {links}/>
        <CardList>{children}</CardList>
        <RightMenu />
    </div>
);
export default MenuContent;