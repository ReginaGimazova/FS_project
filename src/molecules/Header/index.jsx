import React from 'react';
import Button from '../../atoms/Button';
import MenuLink from '../../atoms/CommonLink/index';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <MenuLink href="/" className="link navLink">Home</MenuLink>
      <MenuLink href="/info" className="link navLink">About</MenuLink>
    </nav>
    <Button type="submit">LOGOUT</Button>
  </header>
);

export default Header;
