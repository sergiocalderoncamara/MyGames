import React from "react";
import { useState, useEffect } from "react";
import { CardGroup, Row, Col, Button } from "react-bootstrap";
import { getPokedex, searchPokedex } from "../../api";
import Pokemon from "./../Pokedex/Pokemon";
import Loader from "../Pokedex/Loader";
import Pages from "../Pokedex/Pages";
import Search from "../Pokedex/Search";

export default function Pokedex(props) {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [selected, setSelected] = useState();
    const limit = 20;

    const download = async () => {
        let downloadedPokemons = [];
        let index = offset;
        let max = offset + limit;
        for (index; index < max; index++) {
            downloadedPokemons.push(await getPokedex(index));
        }
        setPokemons(downloadedPokemons);
        setLoading(false);
    }

    const select = (pokemon) => {
        setSelected(pokemon.toLowerCase());
    }

    const search = async () => {
        setIsLoading(true);
        let downloadedPokemons = [];
        let pokemon = selected;
        downloadedPokemons.push(await searchPokedex(pokemon));
        setPokemons(downloadedPokemons);
        setIsLoading(false);
    }

    const next = () => {
        let aux = offset;
        if (aux <= 879) {
            aux = aux + limit;
        }
        setOffset(aux);
        download();
    }

    const previous = () => {
        let aux = offset;
        if (aux >= 20) {
            aux = aux - limit;
        }
        setOffset(aux);
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
    }, [offset]);

    return (
        <>
            <div className='col-2 btn-group'>
                <Search select={select} click={search} isLoading={isLoading} />
            </div>
            <div>
                {loading ? (<Loader />) : (
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
            </div>
            <div>
                <Pages next={next} previous={previous} />
            </div>

        </>
    );
}