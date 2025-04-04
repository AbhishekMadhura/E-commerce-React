// src/pages/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
 import './pcard.css';// Import the fetch function

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
            setLoading(false); // Set loading to false after fetching
        };
        getProduct();
    }, [id]);

    if (loading) return <div className='loading'>Loading...</div>; // Show loading state

    if (!product) return <div className='loading'>Product not found.</div>; // Handle case where product is not found

    return (
        <div className="product-details-container">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">

                <h1 className="product-title">{product.title}</h1>

                <p className="product-price">₹{product.price}</p>
                <p className="product-description">{product.description}</p>
                <div className='btn'>
                <button className="buy">Buy Now</button>
               
                <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
            </div>
    );
};

export default ProductDetails;