import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import { Card } from 'react-bootstrap'

function capitalizeWords(string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


const Pizza = () => {
    const { pizzas, loading, error } = useContext(PizzaContext)

    if (loading) return <p>Cargando pizza...</p>
    if (error) return <p>{error}</p>

    const pizza = pizzas[0]

    if (!pizza) return <p>Pizza no encontrada</p>

    return (
        <div className="container mt-4">
            <Card className="mx-auto">
                <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                <Card.Body>
                    <Card.Title>{capitalizeWords(pizza.name)}</Card.Title>
                    <Card.Text>{pizza.desc}</Card.Text>
                    <h4>Ingredientes:</h4>
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{capitalizeWords(ingredient)}</li>
                        ))}
                    </ul>
                    <h3>Precio: ${pizza.price}</h3>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pizza
