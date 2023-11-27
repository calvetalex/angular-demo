import { combineReducers, Action } from '@ngrx/store';
import { ApiState } from '../../states/api';
import { POKEMON_SUBJECT } from 'src/app/config/app.config';
import { reducer as PokemonReducer } from './pokemon.reducer';

export function reducers(state: ApiState | undefined, action: Action) {
  return combineReducers({
    [POKEMON_SUBJECT]: PokemonReducer,
  })(state, action);
}
