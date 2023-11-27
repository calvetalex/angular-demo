import { POKEMON_SUBJECT } from 'src/app/config/app.config';
import { PokemonStateApi } from './pokemon.states';

export interface ApiState {
  [POKEMON_SUBJECT]: PokemonStateApi;
}
