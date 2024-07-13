import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Note = ({ title, content, onDelete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default Note;
