import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate(); // Get the navigate function
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  const emptyCart = () => {
    localStorage.removeItem('cart');
    navigate('/'); // Redirect to home page after emptying the cart
  };

  if (cart.length === 0) {
    return <h1 className="empty-cart">Your cart is empty</h1>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <ul className="cart-items">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <i className="bx bx-x cart-item-remove" onClick={() => handleRemoveItem(index)}></i>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{item.title}</h2>
              <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total Price: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
        <Link className="checkout-btn" onClick={emptyCart} >Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
