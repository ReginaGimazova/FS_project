import React from 'react';
import styles from './LeftMenu.module.css';
import Link from '../atoms/Link';

const style = {
    color: 'black',
    margin: '20px'
};

const LeftMenu = (props) => (
    <div className={styles.leftMenu}>
        {props.leftMenuContent.map(content => {
            return ( <Link style = {style} {...content}>{content.label}</Link>)
        })}
    </div>
);
export default LeftMenu