import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state;
    const [value, setValue] = useState(1);

    const handleIncrement = () => {
        setValue(prevValue => prevValue + 1);
    };

    const handleDecrement = () => {
        if (value > 0)
            setValue(prevValue => prevValue - 1);
        else
            setValue(0);
    };

    const handleChange = (e) => {
        setValue(Number(e.target.value));
    };

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex >= 1) {
            cart[existingProductIndex].quantity += value;
        } else {
            cart.push({ ...product, quantity: value});
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="product">
            <div className='Product-image'>
                <img src={product.image} alt={product.title}/>
            </div>
            <div className="all-info">
                <div className="product-title">{product.title}</div>
                <p className='product-details'>{product.description}</p>
                <p className='product-price'>Price: ${product.price.toFixed(2)}</p>
                <p className='product-category'>Category: {product.category}</p>
                <p className='product-rate'>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                <div className ='number'>
                    <button className="plus" onClick={handleIncrement}>+</button>
                    <input  value={value} onChange={handleChange} />
                    <button className="minus" onClick={handleDecrement}>-</button>
                </div>
                <div className='cartplace'>
                <Link className='cart-go' onClick={handleAddToCart} to='/Cart'>Add to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
