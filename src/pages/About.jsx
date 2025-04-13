import React from 'react';
import { Container, Row, Col, Image, Tab, Tabs } from 'react-bootstrap';
import TeamMember from '../components/TeamMember';

// Sample team data
const teamMembers = [
    {
        name: "Morad Hosen",
        role: "Founder & CEO",
        bio: "A coffee enthusiast in Bangladesh agricultural business.",
        image: "/assets/images/morad.png"
    },
    {
        name: "Taqi Tahmid",
        role: "Head of Tech",
        bio: "Specializes in tech management and web handler.",
        image: "/assets/images/tahmid.png"
    },
    {
        name: "Arafat Islam",
        role: "Head of Marketing",
        bio: "Ensures every batch meets our high standards for taste and quality.",
        image: "/assets/images/naim.png"
    }
];

function About() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">About <span className='about-text'>Cafeino</span></h1>

            <Tabs defaultActiveKey="story" id="about-tabs" className="mb-4">
                <Tab eventKey="story" title="Our Story">
                    <Row className="align-items-center mt-4">
                        <Col md={6}>
                            <h2>From Hills to Cup</h2>
                            <p className="lead">
                                Founded in 2020, Bangla Coffee began with a simple mission: to bring Bangladeshi-grown coffee to the national market.
                            </p>
                            <p>
                                Our journey started when our founder, Abdul Karim, noticed the exceptional quality of coffee being grown in the hill tracts but saw that farmers weren't getting fair prices for their crops. We built direct relationships with these farmers and established our own processing facility to control quality from bean to powder.
                            </p>
                            <p>
                                Today, we work with over 200 smallholder farmers across Bandarban, Rangamati, and Khagrachhari, helping them improve their yields and quality while bringing their products to coffee lovers across Bangladesh.
                            </p>
                        </Col>
                        <Col md={6}>
                            <Image
                                src="/assets/images/about-story.jpg"
                                alt="Our story"
                                fluid
                                className="rounded shadow"
                            />
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="process" title="Our Process">
                    <Row className="mt-4">
                        <Col>
                            <h2 className="text-center mb-4">From Farm to Your Cup</h2>

                            <div className="process-steps">
                                <Row className="mb-4">
                                    <Col md={3} className="text-center">
                                        <div className="process-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-tree fs-3"></i>
                                        </div>
                                        <h5 className="mt-3">Sustainable Farming</h5>
                                    </Col>
                                    <Col md={9}>
                                        <p>We work with farmers to implement sustainable agricultural practices that improve both yield and quality while protecting the environment.</p>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={3} className="text-center">
                                        <div className="process-icon bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-hand-thumbs-up fs-3"></i>
                                        </div>
                                        <h5 className="mt-3">Fair Pricing</h5>
                                    </Col>
                                    <Col md={9}>
                                        <p>Our direct trade model ensures farmers receive fair prices for their crops, typically 20-30% above local market rates.</p>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={3} className="text-center">
                                        <div className="process-icon bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-gear fs-3"></i>
                                        </div>
                                        <h5 className="mt-3">Careful Processing</h5>
                                    </Col>
                                    <Col md={9}>
                                        <p>At our facility in Bandarban, we use modern equipment to carefully roast and grind the beans while preserving their unique flavors.</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={3} className="text-center">
                                        <div className="process-icon bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-cup fs-3"></i>
                                        </div>
                                        <h5 className="mt-3">Quality Packaging</h5>
                                    </Col>
                                    <Col md={9}>
                                        <p>We package our coffee in air-tight containers with one-way valves to ensure freshness until it reaches your cup.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="team" title="Our Team">
                    <Row className="mt-4">
                        <Col>
                            <h2 className="text-center mb-5">Meet the Team</h2>
                            <Row>
                                {teamMembers.map((member, index) => (
                                    <Col md={6} lg={4} key={index} className="mb-4">
                                        <TeamMember member={member} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default About;