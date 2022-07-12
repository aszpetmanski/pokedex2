import React, { useEffect } from "react";

const Display = (props) => {
  const pokemonToDisplay = {
    name: props.pokemon.name || "Placeholder",
    spriteURL: props.pokemon.spriteURL || "Placeholder",
    description: props.pokemon.description || "Placeholder",
  };

  return <React.Fragment>
    <h3>{pokemonToDisplay.name}</h3>
    <div><img src={pokemonToDisplay.spriteURL} /></div>
    <div><p1>{pokemonToDisplay.description}</p1></div>
  </React.Fragment>;
};

export default Display;
