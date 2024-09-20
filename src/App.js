import React, { useEffect, useState } from 'react';
import api from './services/api';
import Grid from './components/Grid';
import Loading from './components/Loading'
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/Search';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 12;
  
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

  return (
    <div className="App container">
      <h1>Pokedex</h1>
      {loading ? (
        <Loading />
      ) : (
      <div>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Grid 
          searchTerm={searchTerm}
          pokemons={pokemons}
        />
        <Pagination 
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          loading={loading}
        />
      </div>
      )}
    </div>
  );
}

export default App;