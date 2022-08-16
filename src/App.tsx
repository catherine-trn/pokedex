import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useRecoilState} from 'recoil';
import axios from 'axios';

import { Pokemon, pokemonListState } from './store/pokemon'
import { PokemonCardList } from './components/PokemonCardList';


function App() {

  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);

  const getPokemonList = async () => {
    const result = await axios.get<{pokemon: Pokemon[]}>('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    // console.log(result.data.pokemon)
    setPokemonList(result.data?.pokemon)
  }

  useEffect(() => {
    getPokemonList() // ne pas faire setPokemonList(getPokemonList())
  }, [])

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-100">
        <PokemonCardList pokemons = { pokemonList }/>
        {/* <Card title={ pokemonList && pokemonList[0] && pokemonList[0].name } /> */}
    </div>
  );
}

export default App;
