// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // Import your Auth context
import './Cart.css';

function Cart() {
    const { state } = useCart();
    const { isLoggedIn } = useAuth(); // Get the login status from Auth context

    // Calculate total amount
    const totalAmount = state.cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {isLoggedIn ? ( // Check if the user is logged in
                state.cartItems.length === 0 ? (
                    <p className="empty-cart">No items in the cart</p>
                ) : (
                    <>
                        <ul className="cart-items">
                            {state.cartItems.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <img src={item.image} alt={item.title} className="cart-item-image" />
                                    <span className="item-title">{item.title}</span>
                                    <span className="item-price">₹{item.price}</span>
                                    
                                </li>
                            ))}
                        </ul>
                        <div className="total-amount">
                            <h3>Total Amount: ₹{totalAmount}</h3>
                        </div>
                    </>
                )
            ) : (
                <p className="login-prompt">Please log in to view your cart.</p> // Message for non-logged-in users
            )}
        </div>
    );
}

export default Cart;