import React from 'react';
import Button from '../../atoms/Button';
import MenuLink from '../../atoms/MenuLink/index';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/info">About</MenuLink>
    </nav>
    <Button type="submit">LOGOUT</Button>
  </header>
);

export default Header;
