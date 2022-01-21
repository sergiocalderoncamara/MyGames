import React from "react";
import { Card, Badge } from "react-bootstrap";
import Stat from "./Stat";

export default function Pokemon(props) {

    const style = `my-3 p-3 border-0 shadow ${props.pokemon.types[0].type.name}`;
    const tipo1 = props.pokemon.types[0].type.name;

    return (
        <Card className={style} text='dark' style={{ width: '15rem' }}>
            <Card.Img className="imagenPokemon " variant="top" src={props.pokemon.sprites.front_default} />
            <Card.Body>
                <Card.Title>
                    <Badge bg="dark">
                        #{props.pokemon.id}
                    </Badge>
                </Card.Title>
                <Card.Text>
                    <p style={{ fontFamily: 'cursive' }}>{(props.pokemon.name).toUpperCase()}</p>
                    <h10 style={{ fontFamily: 'monospace' }}>
                        {tipo1.toUpperCase()}
                        {(() => {
                            if (props.pokemon.types.length == 2) {
                                return (<> / {props.pokemon.types[1].type.name.toUpperCase()} </>)
                            }
                        })()}
                    </h10>
                </Card.Text>
            </Card.Body>
        </Card >
    );
}