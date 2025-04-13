import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from './Products';
function SingleProduct() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <Container className="py-5 text-center">
                <h2>Product not found</h2>
                <p>The product you're looking for doesn't exist.</p>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid className="rounded shadow" />
                </Col>
                <Col md={6}>
                    <h1>{product.name}</h1>
                    <Badge bg="success" className="mb-3">In Stock</Badge>
                    <h3 className="text-primary mb-4">{product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <p>{product.details}</p>

                    <div className="my-4">
                        <h5>Product Details</h5>
                        <ul>
                            <li>Origin: {product.name.includes('Arabica') ? 'Bandarban' : product.name.includes('Robusta') ? 'Rangamati' : 'Khagrachhari'}</li>
                            <li>Roast Level: {product.name.includes('Light') ? 'Light' : product.name.includes('Dark') ? 'Dark' : 'Medium'}</li>
                            <li>Net Weight: 200g</li>
                            <li>Shelf Life: 12 months</li>
                        </ul>
                    </div>

                    <div className="d-flex gap-3 mb-4">
                        <Form.Select style={{ width: '100px' }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Select>
                        <Button variant="primary">Add to Cart</Button>
                    </div>

                    <div className="border-top pt-3">
                        <h5>Shipping Information</h5>
                        <p>Free shipping on orders over ৳1000. Usually ships within 2 business days.</p>
                    </div>
                </Col>
            </Row>

            {/* Related Products */}
            <section className="mt-5 pt-4 border-top">
                <h3 className="mb-4">You may also like</h3>
                <Row>
                    {products
                        .filter(p => p.id !== product.id)
                        .slice(0, 3)
                        .map(relatedProduct => (
                            <Col md={4} key={relatedProduct.id}>
                                <ProductCard product={relatedProduct} />
                            </Col>
                        ))}
                </Row>
            </section>
        </Container>
    );
}

export default SingleProduct;