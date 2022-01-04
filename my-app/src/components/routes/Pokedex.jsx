import React from "react";
import { useState, useEffect } from "react";
import { getPokedex } from "../../api";
import { pokemonInit } from "../../assets/pokemon";
import Pokemon from "./../Pokedex/Pokemon";

export default function Pokedex(props) {

    const [pokemons, setPokemons] = useState(pokemonInit);
    console.log(pokemons);

    const download = async () => {
        let downloadedPokemons = await getPokedex();
        setPokemons([downloadedPokemons]);
        console.log(pokemons);
    }

    /*useEffect(() => {
        async function fetchData() {
            try {
                await download();
            } catch (error) {
                alert("error");
            }
        }
        fetchData();
    }, []);*/

    return (
        <>
        {pokemons.map((pokemon, index) => 
            <Pokemon key={index} pokemon={pokemon}/>
        )}
        </>
    );
}