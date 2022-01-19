import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Stat from "./Stat";

export default function Pokemon(props) {

    const style = `my-3 p-3 border-0 shadow ${props.pokemon.types[0].type.name}`;
    const tipo1 = props.pokemon.types[0].type.name;

    return (
        <Card className={style} text='dark' style={{ width: '15rem' }}>
            <Card.Img className="imagenPokemon " variant="top" src={props.pokemon.sprites.front_default} />
            <Card.Body>
                <Card.Title>#{props.pokemon.id}</Card.Title>
                <Card.Text>
                    <p>{(props.pokemon.name).toUpperCase()}</p>
                    <h10>Type: {tipo1}</h10>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}