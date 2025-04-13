import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Farmers() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">For Coffee Farmers</h1>

            <Row className="mb-5">
                <Col md={6}>
                    <h2>Sell Your Coffee to Us</h2>
                    <p className="lead">
                        We're building long-term partnerships with coffee growers across Bangladesh.
                    </p>
                    <p>
                        Bangla Coffee offers fair prices, technical support, and a reliable market for your coffee beans. Whether you're a smallholder farmer with just a few trees or a larger producer, we're interested in buying your quality coffee beans.
                    </p>
                    <Button as={Link} to={'/contact'} variant="success" size="lg">Join Our Network</Button>
                </Col>
                <Col md={6}>
                    <img
                        src="/assets/images/farmer-main.jpg"
                        alt="Coffee farmer"
                        className="img-fluid rounded shadow"
                    />
                </Col>
            </Row>

            <h2 className="text-center mb-4">Why Partner With Us?</h2>
            <Row className="mb-5">
                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="text-center mb-3">
                                <i className="bi bi-cash-coin fs-1 text-success"></i>
                            </div>
                            <Card.Title className="text-center">Fair Prices</Card.Title>
                            <Card.Text>
                                We pay premium prices for quality beans, typically 20-30% above local market rates. Our pricing is transparent and based on international grading standards.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="text-center mb-3">
                                <i className="bi bi-people fs-1 text-primary"></i>
                            </div>
                            <Card.Title className="text-center">Technical Support</Card.Title>
                            <Card.Text>
                                Our agronomists provide free training on best practices for coffee cultivation, harvesting, and post-harvest processing to improve your yields and quality.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="text-center mb-3">
                                <i className="bi bi-shield-check fs-1 text-warning"></i>
                            </div>
                            <Card.Title className="text-center">Reliable Market</Card.Title>
                            <Card.Text>
                                We offer purchase agreements that guarantee we'll buy your coffee at agreed prices, protecting you from market fluctuations.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <Accordion className="mb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What quality standards do you require?</Accordion.Header>
                    <Accordion.Body>
                        We accept both Arabica and Robusta varieties. Beans should be properly dried (11-12% moisture content), free from defects, and properly sorted. Our team can provide detailed quality specifications and help you meet them.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How do you determine prices?</Accordion.Header>
                    <Accordion.Body>
                        Prices are based on international market rates adjusted for quality, with premiums paid for specialty-grade coffee. We use a transparent grading system so you understand how your coffee is evaluated.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Where are your collection points?</Accordion.Header>
                    <Accordion.Body>
                        We currently have collection centers in Bandarban, Rangamati, and Khagrachhari. For farmers outside these areas with significant quantities (100kg+), we can arrange transportation.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Do you provide seedlings or inputs?</Accordion.Header>
                    <Accordion.Body>
                        For farmers in our partner program, we can provide access to high-quality seedlings and connect you with suppliers of organic fertilizers and other inputs at discounted rates.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="bg-light p-5 rounded text-center">
                <h3>Ready to join our network?</h3>
                <p className="lead mb-4">Contact our farmer relations team today</p>
                <Button variant="success" size="lg" as={Link} to={'/contact'}>Contact Farmer Support</Button>
            </div>
        </Container>
    );
}

export default Farmers;