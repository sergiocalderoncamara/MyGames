import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Stat from "./Stat";

export default function Pokemon(props) {

    return (
            <Card className="my-3 p-3 border-0 shadow" bg='light' text='dark' style={{ width: '20rem' }}>
                <Card.Img className="imagenPokemon" variant="top" src={props.pokemon.sprites.front_default} />
                <Card.Body>
                    <Card.Title>#{props.pokemon.id}</Card.Title>
                    <Card.Text>
                        {(props.pokemon.name).toUpperCase()}
                        <ul>
                            {props.pokemon.stats.map(item => (
                                <Stat key={item.stat.name} item={item} />
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}