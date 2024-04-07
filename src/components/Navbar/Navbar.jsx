import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'; 
import CartWidget from '../CartWidget/Cartwidget';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h4>farmacia E-Commerce</h4>
      <nav>
        <Link to= '/category/Analgésico'>Analgesicos</Link>
        <Link to= '/category/Antibiótico'>Antibioticos</Link>
        <Link to= '/category/Antialérgico'>Antialergicos</Link>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
        </ul>
      </nav>
      <CartWidget className={styles.cartButton} />
    </header>
  );
};

export default Navbar;
