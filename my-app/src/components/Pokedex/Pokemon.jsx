import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Pokemon(props) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.pokemon.name}</Card.Title>
                    <Card.Text>
                        <div>ID: {props.pokemon.id}</div>
                        <div>HP: {props.pokemon.stats.hp}</div>
                        <div>ATTACK: {props.pokemon.stats.attack}</div>
                        <div>DEFENSE: {props.pokemon.stats.defense}</div>
                        <div>SPECIAL ATTACK: {props.pokemon.stats.sp_atk}</div>
                        <div>SPECIAL DEFENSE: {props.pokemon.stats.sp_def}</div>
                        <div>SPEED: {props.pokemon.stats.speed}</div>
                        <div>TOTAL: {props.pokemon.stats.total}</div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}