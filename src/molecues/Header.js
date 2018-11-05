import React from 'react';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.menu}>
            <Link href={'/home'}>Home</Link>
            <Link href={'/about'}>About</Link>
        </div>
        <Button>LOGIN</Button>
    </header>
);

export default Header