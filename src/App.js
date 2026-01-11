

import React from "react";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from './pages/Products';
import Login from "./pages/login";
import Home from './pages/Home';
import './App.css';
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header /><>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/login' element={<Login/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
    </>
    <Footer/>
  </div>
);
}
export default App;
