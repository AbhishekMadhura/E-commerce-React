import React ,{ useState } from 'react';
import Modal from './Model';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
// src/components/ProductCard.js

function ProductCard({ product }) {
    const {dispatch} =useCart();
   
    const [modalVisible, setModalVisible] = useState(false);
   
const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Dispatch action to add product to cart
    setModalVisible(true); // Show the modal

    };

    const closeModal = () => {
        setModalVisible(false); // Hide the modal
    };

    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`} className="product-link">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-info">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-price">₹{product.price}</p>
                </div>
            </Link>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            {modalVisible && (
                <Modal message="Item added to cart!" onClose={closeModal} />
            )}
        </div>
    );
}

export default ProductCard;
