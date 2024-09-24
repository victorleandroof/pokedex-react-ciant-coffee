import React, { useEffect, useState } from 'react';
import api from '../services/api.js';

function Modal({pokemonName}) {

    const [abilitities, setAbilitities] = useState([]); 

    useEffect(() => {
        const fetchPokemons = async () => {
          try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await api.get(url);
            setAbilitities(response.data.abilities);
          } catch (error) {
            console.log('Algo deu errado!!!', error);
          }
        };
    
        fetchPokemons();
      }, [pokemonName]);

    return (
        <div>
            {pokemonName && <div>Modal {pokemonName}</div>}
            Habilidades:
            {abilitities.map(ability => {
                return <div key={ability.ability.name}>{ability.ability.name}</div>
            
            })}
        </div>
    )
}

export default Modal;
