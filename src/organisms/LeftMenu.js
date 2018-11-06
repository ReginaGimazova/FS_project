import React from 'react';
import styles from './LeftMenu.module.css';
import Link from '../atoms/Link';

const LeftMenu = ({links}) => (
    <div className={styles.leftMenu}>
        {links.map(link => {
            return ( <Link color={'black'} margin={'20px'} {...link}>{link.label}</Link>)
        })}
    </div>
);
export default LeftMenu