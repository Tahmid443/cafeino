import React from 'react';
import {  Form,Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "The Rise of Bangladeshi Coffee",
        excerpt: "How coffee cultivation is taking root in the hill tracts of Bangladesh.",
        date: "May 15, 2023",
        image: "/assets/images/blog-1.jpg",
        category: "Industry News"
    },
    {
        id: 2,
        title: "Brewing the Perfect Cup at Home",
        excerpt: "Our guide to making cafe-quality coffee with Bangladeshi beans.",
        date: "April 28, 2023",
        image: "/assets/images/blog-2.jpg",
        category: "Brewing Guide"
    },
    {
        id: 3,
        title: "Meet the Farmers: Abdul's Story",
        excerpt: "How one farmer in Bandarban transformed his livelihood through coffee.",
        date: "March 10, 2023",
        image: "/assets/images/blog-3.jpg",
        category: "Farmer Stories"
    },
    {
        id: 4,
        title: "Arabica vs. Robusta in Bangladesh",
        excerpt: "Comparing the two main coffee varieties grown in our country.",
        date: "February 22, 2023",
        image: "/assets/images/blog-4.jpg",
        category: "Coffee Varieties"
    },
    {
        id: 5,
        title: "Sustainable Coffee Farming Practices",
        excerpt: "How we're working with farmers to protect the environment.",
        date: "January 15, 2023",
        image: "/assets/images/blog-5.jpg",
        category: "Sustainability"
    },
    {
        id: 6,
        title: "Coffee Culture in Bangladesh",
        excerpt: "How coffee drinking habits are changing across the country.",
        date: "December 5, 2022",
        image: "/assets/images/blog-6.jpg",
        category: "Culture"
    }
];

function Blog() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5"><span className='about-text'>Cafeino</span> Blog</h1>

            <Row className="mb-4">
                <Col md={8}>
                    <h2>Latest Articles</h2>
                </Col>
                <Col md={4}>
                    <Form.Select>
                        <option>All Categories</option>
                        <option>Industry News</option>
                        <option>Brewing Guide</option>
                        <option>Farmer Stories</option>
                        <option>Coffee Varieties</option>
                        <option>Sustainability</option>
                        <option>Culture</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {blogPosts.map(post => (
                    <Col md={6} lg={4} key={post.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={post.image} />
                            <Card.Body>
                                <span className="badge bg-secondary mb-2">{post.category}</span>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.excerpt}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-transparent border-top-0">
                                <small className="text-muted">{post.date}</small>
                                <Button variant="outline-primary" size="sm" className="float-end">
                                    Read More
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="d-flex justify-content-center mt-4">
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </div>

            <section className="bg-light p-5 rounded mt-5">
                <Row className="align-items-center">
                    <Col md={8}>
                        <h3>Subscribe to Our Newsletter</h3>
                        <p className="mb-0">Get the latest updates on Bangladeshi coffee, brewing tips, and special offers.</p>
                    </Col>
                    <Col md={4}>
                        <Form className="d-flex">
                            <Form.Control type="email" placeholder="Your email" />
                            <Button variant="primary" className="ms-2">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}

export default Blog;