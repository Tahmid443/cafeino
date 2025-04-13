import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-white text-dark py-4 mt-5 shadow-lg p-3  bg-white rounded">
            <Container>
                <Row>
                    <Col md={4}>
                        <img
                            src="/assets/images/logo.png"
                            width="200"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Bangla Coffee Logo"
                        />
                        <p>Proudly serving Bangladeshi-grown coffee nationwide.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-dark">Home</Link></li>
                            <li><Link to="/products" className="text-dark">Products</Link></li>
                            <li><Link to="/farmers" className="text-dark">For Farmers</Link></li>
                            <li><Link to="/contact" className="text-dark">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Connect With Us</h5>
                        <div className="social-links">
                            <a href="#" className="text-dark me-2">Facebook</a>
                            <a href="#" className="text-dark me-2">Instagram</a>
                            <a href="#" className="text-dark">LinkedIn</a>
                        </div>
                        <div className="mt-3">
                            <p>Email: info@banglacoffee.com</p>
                            <p>Phone: +880 1234 567890</p>
                        </div>
                    </Col>
                </Row>
                <hr className="mt-3" />
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} Bangla Coffee. All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;