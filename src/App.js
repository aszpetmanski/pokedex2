import "./App.css";
import Display from "./components/display";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [currentInput, updateInput] = useState("");
  const [currentPokemon, updatePokemon] = useState({name: '', description: '', spriteURL: ''});

  const handleChange = (e) => {
    const searchedPokemon = e.target.value;
    updateInput(searchedPokemon);
  };

  const handleOnClick = async () => {
    const { data: pokemon } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${currentInput}/`
    );
    const { data: description } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${currentInput}/`
    );
    const pokemonObj = {
      name: pokemon.name,
      spriteURL: pokemon.sprites.front_default,
      description: description.flavor_text_entries[1].flavor_text,
    };
    updatePokemon(pokemonObj);
  };

  return (
    <React.Fragment>
      <h1 style={{ "text-align": "center" }}>Pokedex</h1>
      <div style={{ "text-align": "center" }}>
        <input onChange={handleChange} placeholder="Search for Pokemon"></input>
        <button onClick={handleOnClick}>Search</button>
      </div>
      <div></div>
      <div
        style={{
          "text-align": "center",
          margin: "20px 800px 800px",
          border: "2px",
          "border-radius": "13px",
          "border-style": "ridge",
          padding: "150px  100px",
        }}
      >
        <Display pokemon={currentPokemon}/>
      </div>
    </React.Fragment>
  );
}

export default App;
