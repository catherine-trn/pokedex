import React from 'react'
import { Pokemon } from '../store/pokemon'
import { Card } from './Card'


interface PokemonListProps {
    pokemons : Pokemon[]
}

export const PokemonCardList =  ( {pokemons}: PokemonListProps ) => {
  return (
    <div className="overflow-y-scroll w-full py-10">
        {
        pokemons.map((pokemon) => (
           <Card pokemon = {pokemon} />))
        }
    </div>
  )
}
