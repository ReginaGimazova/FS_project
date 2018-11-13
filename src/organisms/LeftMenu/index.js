import React from 'react';
import styles from './LeftMenu.module.css';
import MenuLink from '../../atoms/MenuLink';

const LeftMenu = (props) => (
    <aside className={styles.leftMenu}>
        {props.leftMenuContent.map(content => {
            return ( <MenuLink className = 'leftMenuLink' {...content}>{content.label}</MenuLink>)
        })}
    </aside>
);

export default LeftMenu
