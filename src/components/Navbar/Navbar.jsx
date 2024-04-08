import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import CartWidget from '../CartWidget/Cartwidget';
import cartIcon from "../CartWidget/assets/carro.png.png"

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h4><Link to="/">farmacia E-Commerce</Link></h4>
      <nav>
        <Link to='/category/Analgésico'>Analgesicos</Link>
        <Link to='/category/Antibiótico'>Antibioticos</Link>
        <Link to='/category/Antialérgico'>Antialergicos</Link>
      </nav>
      <Link to="/cart">
        <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
      </Link>
      <CartWidget className={styles.cartButton} />
    </header>
  );
};

export default Navbar;
