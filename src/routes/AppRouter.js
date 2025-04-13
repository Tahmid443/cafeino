import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Farmers from '../pages/Farmers';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import SingleProduct from '../pages/SingleProduct';

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/farmers" element={<Farmers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRouter;