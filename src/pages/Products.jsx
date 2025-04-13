import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

// Sample data
const products = [
    {
        id: 1,
        name: "Premium Arabica",
        description: "Smooth and aromatic coffee from Bandarban",
        price: "৳450",
        image: "/assets/images/product-1.jpg",
        details: "Grown in the highlands of Bandarban, this Arabica variety offers a smooth taste with floral notes."
    },
    {
        id: 2,
        name: "Robusta Blend",
        description: "Strong and full-bodied coffee from Rangamati",
        price: "৳400",
        image: "/assets/images/product-2.jpg",
        details: "Our Robusta blend provides a strong caffeine kick with earthy flavors, perfect for traditional Bengali coffee drinkers."
    },
    {
        id: 3,
        name: "Special Reserve",
        description: "Limited edition single-origin coffee",
        price: "৳550",
        image: "/assets/images/product-3.jpg",
        details: "This special reserve comes from a single estate in Khagrachhari, with only 500kg produced annually."
    },
    {
        id: 4,
        name: "Hill Tracts Blend",
        description: "Medium roast with balanced flavor",
        price: "৳480",
        image: "/assets/images/product-4.jpg",
        details: "A balanced blend from across the Chittagong Hill Tracts, offering both complexity and drinkability."
    },
    {
        id: 5,
        name: "Sylheti Morning",
        description: "Light roast with citrus notes",
        price: "৳500",
        image: "/assets/images/product-5.jpg",
        details: "Grown in the shadow of tea gardens, this light roast has surprising citrus notes uncommon in Bangladeshi coffee."
    },
    {
        id: 6,
        name: "Traditional Bangla Coffee",
        description: "Dark roast for strong flavor",
        price: "৳420",
        image: "/assets/images/product-6.jpg",
        details: "Our darkest roast, developed specifically for those who prefer their coffee strong and bold."
    }
];

function Products() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Our Coffee Products</h1>

            {/* Filter Section */}
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Group controlId="productFilter">
                        <Form.Label>Filter by:</Form.Label>
                        <Form.Select>
                            <option>All Products</option>
                            <option>Arabica</option>
                            <option>Robusta</option>
                            <option>Blends</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="productSort">
                        <Form.Label>Sort by:</Form.Label>
                        <Form.Select>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Popularity</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4} className="d-flex align-items-end">
                    <Button variant="outline-secondary" className="w-100">
                        Apply Filters
                    </Button>
                </Col>
            </Row>

            {/* Products Grid */}
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id} className="mb-4">
                        <ProductCard product={product} showDetailsButton={true} />
                    </Col>
                ))}
            </Row>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    );
}

export default Products;