import { useState } from "react";

function Grid({ pokemons, searchTerm }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState('');

    const getPokemonImage = (name) => {
      return `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
    };
  
    return(
      <div className="row">
      {
        pokemons.map(pokemon => {
          return pokemon.name.includes(searchTerm) &&   
            <div 
                key={pokemon.name} 
                className="col-md-4 mb-4"
                onClick={() => {
                    setModalOpen(true)
                    setSelectedPokemon(pokemon.name)
                }}
            >
                <div className="card">
                    <img 
                    src={getPokemonImage(pokemon.name)} 
                    className="card-img-top" 
                    alt={pokemon.name} 
                    />
                    <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    </div>
                </div>
            </div>
        })}
        { isModalOpen && <div>Modal {selectedPokemon}</div> }
    </div>
    )
  }
  
  export default Grid;