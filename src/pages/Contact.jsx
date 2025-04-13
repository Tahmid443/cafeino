import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Contact Us</h1>

            <Row>
                <Col md={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <h2>Send Us a Message</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter your phone number" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Select>
                                        <option>General Inquiry</option>
                                        <option>Product Questions</option>
                                        <option>Farmer Partnership</option>
                                        <option>Wholesale Inquiry</option>
                                        <option>Other</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="h-100">
                        <Card.Body>
                            <h2>Our Offices</h2>

                            <div className="mb-4">
                                <h5>Head Office (Dhaka)</h5>
                                <p>
                                    123 Coffee Street, Tejgaon Industrial Area<br />
                                    Dhaka 1208, Bangladesh<br />
                                    <strong>Phone:</strong> +880 1234 567890<br />
                                    <strong>Email:</strong> info@banglacoffee.com
                                </p>
                            </div>

                            <div className="mb-4">
                                <h5>Processing Facility (Bandarban)</h5>
                                <p>
                                    Bandarban Coffee Processing Center<br />
                                    Bandarban Hill District<br />
                                    <strong>Phone:</strong> +880 1234 567891<br />
                                    <strong>Email:</strong> facility@banglacoffee.com
                                </p>
                            </div>

                            <div className="mb-4">
                                <h5>Farmers Relations Office (Rangamati)</h5>
                                <p>
                                    456 Coffee Lane, Rangamati Town<br />
                                    Rangamati Hill District<br />
                                    <strong>Phone:</strong> +880 1234 567892<br />
                                    <strong>Email:</strong> farmers@banglacoffee.com
                                </p>
                            </div>

                            <div>
                                <h5>Business Hours</h5>
                                <p>
                                    <strong>Sunday-Thursday:</strong> 9:00 AM - 6:00 PM<br />
                                    <strong>Friday-Saturday:</strong> Closed
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.862837298778!2d90.3882623154319!3d23.75091108458726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                            allowFullScreen=""
                            loading="lazy"
                            title="Location Map"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;