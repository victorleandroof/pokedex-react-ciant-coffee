import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon')
      .then(response => {
        setPokemons(response.data.results);
      }).catch(error => {
        console.log('Algo deu errado!!!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <ul>
        {pokemons.length> 0 ? (pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))) : (
          <li>Carregando...</li>
        )}
      </ul>
    </div>
  );
}

export default App;
