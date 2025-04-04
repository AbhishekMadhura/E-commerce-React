import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { FaShoppingCart, FaUser , FaHome, FaTshirt, FaSearch } from 'react-icons/fa';
import './Header.css';
import { useAuth } from "../context/AuthContext";

function Header() {
    const { currentUser , logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Redirect to the products page with the search query
            navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
            setSearchQuery(''); // Clear the search input
        }
    };

    return (
        <header className="header">
            <div className="container flex-center">
                <div className="logo">
                    <Link to="/">Shop Now!</Link>
                </div>
                
                <div className="search-bar">
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Search for products"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                        />
                        <button type="submit">
                            <FaSearch />
                        </button>
                    </form>
                </div>

                <nav className="nav-links">
                    <Link to="/" className="nav-item">
                        <FaHome className="nav-icon" />
                        <span>Home</span>
                    </Link>
                    <Link to="/products" className="nav-item">
                        <FaTshirt className="nav-icon" />
                        <span>Products</span>
                    </Link>
                    
                    <Link to="/cart" className="nav-item">
                        <FaShoppingCart className="nav-icon" />
                        <span>Cart</span>
                    </Link>
                    {currentUser  ? (
                        <>
                            <Link className="logout" onClick={logout}>
                                <img 
                                    src={currentUser .photoURL} 
                                    alt="User  Icon" 
                                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginLeft: '10px' }} 
                                />
                            </Link>
                        </>
                    ) : (
                        <Link to="/login" className="nav-item">
                            <FaUser  className="nav-icon" />
                            <span>Login</span>
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;