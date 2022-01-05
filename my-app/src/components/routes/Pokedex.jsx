import React from "react";
import { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import { getPokedex } from "../../api";
import Pokemon from "./../Pokedex/Pokemon";

export default function Pokedex(props) {

    const [pokemons, setPokemons] = useState([]);

    const download = async () => {
        let downloadedPokemons = [];
        for (let index = 1; index < 151; index++) {
            downloadedPokemons[index - 1] = await getPokedex(index);
        }
        setPokemons(downloadedPokemons);
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
            <div>
                {pokemons.map((pokemon, index) =>
                    <CardGroup className="m-5 d-block">
                        <Pokemon key={index} pokemon={pokemon} />
                    </CardGroup>
                )}

            </div>
        </>
    );
}