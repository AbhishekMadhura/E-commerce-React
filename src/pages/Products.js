import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

import './Products.css';

function Products() {
    const [fetchedProducts, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data); // Update state with fetched products
            } catch (err) {
                setError('Failed to fetch products.'); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        getProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Loading message
    }

    if (error) {
        return <div>{error}</div>; // Display error message
    }

    return (
        <div>
           {/* Pass the correct variable */}
            <div className="product-grid">
                {fetchedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;