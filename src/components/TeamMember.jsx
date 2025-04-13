import React from 'react';
import { Card } from 'react-bootstrap';

function TeamMember({ member }) {
    return (
        <Card className="h-100 border-0 shadow-sm">
            <Card.Img variant="top" src={member.image} style={{ height: '400px', objectFit: 'cover' }} />
            <Card.Body className="text-center">
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <Card.Text>{member.bio}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TeamMember;