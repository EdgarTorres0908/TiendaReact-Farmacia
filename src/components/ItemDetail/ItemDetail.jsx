import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './ItemDetail.module.css';

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);
    
    const handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue <= stock) {
            setCount(newValue);
        }
    };

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('button');
    const [quantity, setQuantity] = useState(0);
    const ItemCount = inputType === 'input' ? InputCount : ButtonCount;
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (count) => {
        console.log('Producto a agregar:', { id, name, price }, 'Cantidad:', count);
        addItem({ id, name, price }, count); 
        setQuantity(count); 
    };

    return (
        <article className="item-detail-container">
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="item-detail-image"/>
            </picture>
            <section>
                <p><strong>Categoría:</strong> {category}</p>
                <p><strong>Descripción:</strong> {description}</p>
                <p><strong>Precio:</strong> ${price}</p>
            </section>
            <footer>
                {quantity === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                ) : (
                    <Link to='/cart'>Ir al carrito</Link>
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;