import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" className='shadow-lg bg-white rounded'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="/assets/images/logo.png"
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Bangla Coffee Logo"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/farmers">For Farmers</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;