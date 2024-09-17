import React, { useEffect, useState } from 'react';
import api from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;
  
  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await api.get(`pokemon?limit=${limit}&offset=${(page - 1) * limit}`);
        setPokemons(response.data.results);
        setTotalPages(Math.ceil(response.data.count / limit));
      } catch (error) {
        console.log('Algo deu errado!!!', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [page]);

  const getPokemonImage = (name) => {
    return `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
  };

  return (
    <div className="App container">
      <h1>Pokedex</h1>
      <div className="row">
        {loading ? (
          <div className="col-12">Carregando...</div>
        ) : (
          pokemons.map(pokemon => (
            <div key={pokemon.name} className="col-md-4 mb-4">
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
          ))
        )}
      </div>
      <div className="mt-3 text-center">
        <button 
          className="btn btn-primary" 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>
        <span className="mx-2">Página {page} de {totalPages}</span>
        <button 
          className="btn btn-primary" 
          disabled={page === totalPages} 
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default App;
