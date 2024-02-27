import React from 'react';
import styles from './Cartwidget.module.css';
import carro from './assets/carro.png';

const CartWidget = () => {
  return (
    <button className={styles.cartButton}>
      <img src={carro} alt="Carro de compras" className={styles.cartIcon} />
      <span className={styles.cartCount}>2</span>
    </button>
  );
};

export default CartWidget;
