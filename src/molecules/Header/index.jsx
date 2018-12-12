import React from 'react';
import Button from '../../atoms/Button';
import CommonLink from '../../atoms/CommonLink/index';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <CommonLink href="/" className="link navLink">Home</CommonLink>
      <CommonLink href="/info" className="link navLink">About</CommonLink>
    </nav>
    <Button type="submit">LOGOUT</Button>
  </header>
);

export default Header;
