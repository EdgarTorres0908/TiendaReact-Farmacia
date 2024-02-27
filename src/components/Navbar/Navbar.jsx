import React from 'react';
import styles from './Navbar.module.css'; 
import CartWidget from '../CartWidget/Cartwidget';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h4>farmacia E-Commerce</h4>
      <nav>
        <a className={styles.navLink}>Analgesicos</a>
        <a className={styles.navLink}>Antibioticos</a>
        <a className={styles.navLink}>Antialergicos</a>
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;
