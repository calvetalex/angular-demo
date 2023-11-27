import { Pokemon } from 'src/app/models/pokemon.models';

export interface PokemonStateApi {
  pokemons: Pokemon[];
}

export const initialState: PokemonStateApi = {
  pokemons: [],
};
