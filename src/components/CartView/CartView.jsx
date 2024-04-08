import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartView.module.css';

const CartView = () => {
    const { cart, getCartTotalPrice } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de compras</h2>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="cartItem">
                                <span className="cartItem">{item.name} </span>
                                <span className="cartItem">Cantidad: {item.quantity}</span>
                                <span className="cartItem">Precio unitario: ${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${getCartTotalPrice()}</p>
                    <Link to='/checkout'>
                        <button disabled={cart.length === 0}>Finalizar compra</button>
                    </Link>
                </>
            ) : (
                <p>No hay productos en el carrito</p>
            )}
        </div>
    );
};

export default CartView;
