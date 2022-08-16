import React from 'react'
import { PokemonCardType, PokemonType } from './PokemonCardType'

type PokemonCardTypeListProps = {
    pokemonTypes: PokemonType[]
}

export const PokemonCardTypeList = ({
    pokemonTypes,
}: PokemonCardTypeListProps) => {
    return (
        <div className="flex flex-row">
            {pokemonTypes.map((type) => (
                <PokemonCardType type={type} />
            ))}
        </div>
    )
}
