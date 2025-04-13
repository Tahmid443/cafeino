import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ product, showDetailsButton = false }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="mt-auto">
                    <h5 className="text-success">{product.price}</h5>
                    {showDetailsButton ? (
                        <Button
                            as={Link}
                            to={`/products/${product.id}`}
                            variant="outline-success"
                            className="w-100 mt-2"
                        >
                            View Details
                        </Button>
                    ) : (
                        <Button variant="success" className="w-100 mt-2">Add to Cart</Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;