import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

function capitalizeWords(string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


const CardPizza = ({ pizza, addToCart }) => {
    return (
        <Card className="mb-3">
            <Card.Img variant="top" src={pizza.img} alt={capitalizeWords(pizza.name)} />
            <Card.Body>
                <Card.Title>{capitalizeWords(pizza.name)}</Card.Title>
                <Card.Text>{pizza.desc}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {pizza.ingredients.map((ingredient, index) => (
                    <ListGroupItem key={index}>{capitalizeWords(ingredient)}</ListGroupItem>
                ))}
            </ListGroup>
            <Card.Body>
                <Card.Text><strong>Precio: </strong>${pizza.price}</Card.Text>
                <Button onClick={() => addToCart(pizza)} variant="primary">Añadir al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default CardPizza
