import React from "react";
import { useState, useEffect } from "react";
import { CardGroup, Row, Col } from "react-bootstrap";
import { getPokedex } from "../../api";
import Pokemon from "./../Pokedex/Pokemon";
import Loader from "../Pokedex/Loader";

export default function Pokedex(props) {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    const download = async () => {
        let downloadedPokemons = [];
        for (let index = 1; index < 151; index++) {
            downloadedPokemons.push(await getPokedex(index));
        }
        setPokemons(downloadedPokemons);
        setLoading(false);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                await download();
            } catch (error) {
                alert("error");
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {loading ? (<Loader/>) : (
                <Row>
                    {pokemons.map((pokemon, index) =>
                        <Col key={index} xs={12} sm={12} md={3} lg={3} xl={3} >
                            <CardGroup className="m-10 d-block">
                                <Pokemon pokemon={pokemon} />
                            </CardGroup>
                        </Col>
                    )}
                </Row>
            )}
        </>
    );
}