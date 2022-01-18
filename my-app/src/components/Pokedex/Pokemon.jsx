import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Stat from "./Stat";

export default function Pokemon(props) {

    const colores = {
        fire: 'danger',
        grass: 'success',
        electric: 'warning',
        water: 'primary',
        ground: 'warning',
        rock: 'secondary',
        fairy: 'light',
        poison: 'danger',
        bug: 'success',
        dragon: 'light',
        psychic: 'light',
        flying: 'info',
        fighting: 'secondary',
        normal: 'light',
        ice: 'info',
    };

    return (
        <Card className="my-3 p-3 border-0 shadow" bg={colores[props.pokemon.types[0].type.name]} text='dark' style={{ width: '20rem' }}>
            <Card.Img className="imagenPokemon img-thumbnail" variant="top" src={props.pokemon.sprites.front_default} />
            <Card.Body>
                <Card.Title>#{props.pokemon.id}</Card.Title>
                <Card.Text>
                    {(props.pokemon.name).toUpperCase()}
                    <ul>
                        {props.pokemon.stats.map(item => (
                            <Stat key={item.stat.name} item={item} />
                        ))}
                    </ul>
                    {props.pokemon.types[0].type.name}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}