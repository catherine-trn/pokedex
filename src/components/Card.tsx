import React from 'react'
import { Pokemon } from '../store/pokemon'
import { PokemonCardTypeList } from './PokemonCardTypeList'

type CardProps = {
    pokemon: Pokemon
}

export const Card = ({ pokemon }: CardProps) => {
    return (
        <div className="relative bg-gray-50	h-60 w-40 flex flex-col justify-center items-center my-10 rounded-3xl px-40 overflow-visible">
            <img className="absolute bottom-44 left-1.2" src={pokemon.img} />
            <div className="text-slate-400 text-sm font-black">
                N°{pokemon.num}
            </div>
            <div className="font-black text-lg font-sans text-slate-700">
                {pokemon.name}
            </div>
            <PokemonCardTypeList pokemonTypes={pokemon.type} />
        </div>
    )
}
