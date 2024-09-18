"use client";

import pokeStyles from "./pokemon.module.css";
import { useState } from "react";

// Pokemon data
/**
 * @typedef {Object} pokemonApiObject This is the object for a pokemon
 * @prop {String} name Name of pokemon
 * @prop {Number} id Id of pokemon
 * @prop {Object} sprites Object with all sprite references
 * @prop {String} sprites.front_default Default front image for sprite
 * @prop {Number} height Height of pokemon. Multiply by 10 to make it in cms.
 * @prop {Number} weight Weight of pokemon. Divide by 10 to make it kg.
 */

export default function Pokemon() {
  /**
   * @type {[pokemonApiObject, Function]}
   */
  const [pokemon, setPokemon] = useState({ sprites: {} });
  /**
   * @type {[String, Function]}
   */
  const [searchTerm, setSearchTerm] = useState("");

  function changeSearchTerm(e) {
    setSearchTerm(e.currentTarget.value);
  }

  async function searchForPokemonByName() {
    try {
      const rawData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      const pokeDataFormatted = await rawData.json();

      setPokemon(pokeDataFormatted);
    } catch (error) {
      setPokemon({ name: searchTerm, sprites: {} });
    }
  }

  return (
    <main>
      <h1>Pokemon Page</h1>
      <div className={pokeStyles.search}>
        <input
          type="search"
          id="search"
          name="search"
          value={searchTerm}
          onChange={changeSearchTerm}
        />
        <input type="button" value="Search" onClick={searchForPokemonByName} />
      </div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} />
    </main>
  );
}
