import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import styles from './Cartwidget.module.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    let totalItems = 0;

    for (const item of cart) {
        totalItems += item.quantity;
    }

    return (
        <div className='img cartCount'>
            <Link to="/cart">Carro ({totalItems})</Link>
        </div>
    );
};

export default CartWidget;