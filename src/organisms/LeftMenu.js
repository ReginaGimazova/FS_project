import React from 'react';
import styles from './LeftMenu.module.css';
import Link from '../atoms/Link';

const LeftMenu = (props) => (
    <aside className={styles.leftMenu}>
        {props.leftMenuContent.map(content => {
            return ( <Link className = 'leftMenuLink' {...content}>{content.label}</Link>)
        })}
    </aside>
);
export default LeftMenu
