import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({item}) {
    console.log(item)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
          <Card.Text>Precio: ${item.price}</Card.Text>
        <Button variant="primary">¡Pedí la tuya!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;