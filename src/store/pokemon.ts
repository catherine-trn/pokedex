import { atom } from 'recoil'
import { PokemonType } from '../components/PokemonCardType'

export const pokemonListState = atom<Pokemon[]>({
    key: 'pokemonListState',
    default: [],
})

export type Pokemon = {
    name: string
    img: string
    type: PokemonType[]
    weaknesses: string[]
    num: string
    id: string
}
