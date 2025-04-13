import React from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Sample data
const featuredProducts = [
    {
        id: 1,
        name: "Premium Arabica",
        description: "Smooth and aromatic coffee from Bandarban",
        price: "৳450",
        image: "/assets/images/product-1.jpg"
    },
    {
        id: 2,
        name: "Robusta Blend",
        description: "Strong and full-bodied coffee from Rangamati",
        price: "৳400",
        image: "/assets/images/product-2.jpg"
    },
    {
        id: 3,
        name: "Special Reserve",
        description: "Limited edition single-origin coffee",
        price: "৳550",
        image: "/assets/images/product-3.jpg"
    }
];

function Home() {
    return (
        <div>
            {/* Hero Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/images/coffee-farm.jpg"
                        alt="Bangladeshi coffee farms"
                        style={{ height: "500px", objectFit: "cover" }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                        <h3>Direct from Bangladeshi Farmers</h3>
                        <p>Supporting local agriculture while delivering premium quality</p>
                        <Button as={Link} to="/products" variant="secondary">Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/images/coffee-powder.jpg"
                        alt="Premium coffee powder"
                        style={{ height: "500px", objectFit: "cover" }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                        <h3>100% Pure Bangladeshi Coffee</h3>
                        <p>Processed with care for the perfect cup</p>
                        <Button as={Link} to="/about" variant="secondary">Our Story</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Featured Products */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">Featured Products</h2>
                    <Row>
                        {featuredProducts.map(product => (
                            <Col md={4} key={product.id} className="mb-4">
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-4">
                        <Button as={Link} to="/products" variant="outline-secondary" size="lg">
                            View All Products
                        </Button>
                    </div>
                </Container>
            </section>

            {/* About Section */}
            <section className="py-5 bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>Our Mission</h2>
                            <p className="lead">
                                To bring the finest Bangladeshi coffee to your cup while supporting local farmers.
                            </p>
                            <p>
                                We work directly with coffee growers across Bangladesh, ensuring fair prices and sustainable practices. Our processing facility maintains the highest quality standards to deliver authentic Bangladeshi coffee flavors.
                            </p>
                            <Button as={Link} to="/about" variant="secondary">Learn More About Us</Button>
                        </Col>
                        <Col md={6}>
                            <img
                                src="/assets/images/about-mission.jpg"
                                alt="Our mission"
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Farmers Section */}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="order-md-2">
                            <h2>For Farmers</h2>
                            <p className="lead">
                                Join our network of coffee growers.
                            </p>
                            <p>
                                We offer fair prices, technical support, and a reliable market for your coffee beans. Our team works directly with farmers to improve quality and sustainability.
                            </p>
                            <Button as={Link} to="/farmers" variant="success" >Learn How to Sell to Us</Button>
                        </Col>
                        <Col md={6} className="order-md-1">
                            <img
                                src="/assets/images/farmer-network.jpg"
                                alt="Coffee farmers"
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Home;